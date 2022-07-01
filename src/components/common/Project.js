import { formatDistance } from "date-fns";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { useSelector } from "react-redux";
import { addFeedback } from "services/api";
import ParseMarkdown from "markdown/ParseMarkdown";

export default function Project({ project }) {
  const [feedbacks, setFeedbacks] = useState(project.feedbacks);
  const { user } = useSelector((state) => state.auth);

  const tags = project?.tags.map((i) => {
    return (
      <>
        {i && (
          <p
            key={i}
            className="p-1 px-2 text-xs font-bold tracking-tight uppercase border border-blue-500 border-opacity-50 rounded-lg bg-blue-50"
          >
            #{i}
          </p>
        )}
      </>
    );
  });

  console.log(project);

  return (
    <>
      <label
        htmlFor={`project-modal-${project?._id}`}
        className="max-w-sm duration-200 bg-transparent border border-t-0 border-black cursor-pointer modal-button hover:shadow-lg card bg-base-100"
      >
        <div className="w-full overflow-hidden rounded-xl">
          <div className="overflow-hidden bg-base-200">
            <figure className="aspect-w-2 aspect-h-1">
              <img
                className="block object-cover w-full h-full"
                src={project?.thumbnail || "/project.png"}
                alt="thumbnail"
              />
            </figure>
          </div>
          <div className="p-2 pb-4 space-y-1">
            <h2 className="font-bold line-clamp-1">{project?.title}</h2>
            <p className="text-xs line-clamp-3 text-base-content text-opacity-70">
              {project?.description}
            </p>
          </div>
          <div className="w-full h-6"></div>
          <div className="absolute flex items-center justify-center gap-2 bottom-2 right-4">
            <div className="flex items-center gap-2">
              <BiCommentDots className="text-xl" />
              <p className="text-sm font-bold">
                {project?.feedbacks?.length || 0}
              </p>
            </div>
          </div>
        </div>
      </label>

      <input
        type="checkbox"
        id={`project-modal-${project?._id}`}
        className="modal-toggle"
      />

      <div className="p-4 modal md:p-0 backdrop-blur-md">
        <div className="relative w-full max-w-6xl rounded-lg modal-box backdrop-blur-md">
          <div className="grid w-full h-full grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
            <h3 className="col-span-1 mb-6 text-lg font-bold md:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight capitalize">
                Project: {project?.title}
              </h2>
            </h3>

            <section id="details" className="space-y-4">
              <div
                className="overflow-hidden rounded-lg bg-blue-50"
                id="thumbnail"
              >
                <figure>
                  <img
                    className="block w-full h-full"
                    src={project?.thumbnail || "/project.png"}
                    alt="thumbnail"
                  />
                </figure>
              </div>
              <div className="flex gap-2">{tags}</div>
              <p className="text-sm prose text-base-content text-opacity-70">
                <ParseMarkdown>{project?.description}</ParseMarkdown>
              </p>
              <div className="space-x-4">
                {project?.githubUrl ? (
                  <a
                    href={project?.githubUrl}
                    target="_blan"
                    className="bg-blue-500 border-0 btn hover:bg-blue-400"
                  >
                    <BsGithub className="w-6 h-6 pr-2" />
                    Github
                  </a>
                ) : null}
                {project?.webUrl ? (
                  <a
                    a
                    href={project?.webUrl}
                    target="_blan"
                    className="bg-blue-500 border-0 btn hover:bg-blue-400"
                  >
                    <BsGlobe className="w-6 h-6 pr-2" />
                    View Live
                  </a>
                ) : null}
              </div>
            </section>

            <section id="feedback" className="space-y-4">
              <div className="flex gap-2 cursor-pointer">
                <div className="w-12 h-12 overflow-hidden rounded-full avatar ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
                  <img
                    alt="avatar"
                    src={user?.avatar ? user?.avatar : "/profile.png"}
                    className="object-top"
                  />
                </div>
                <div className="flex-1 ml-2">
                  <h2 className="text-lg font-bold">{project?.userId?.name}</h2>
                  <p className="text-sm text-base-content text-opacity-80">
                    submitted{" "}
                    {project?.createdAt &&
                      formatDistance(
                        new Date(project.createdAt),
                        Date.now()
                      )}{" "}
                    ago
                  </p>
                </div>
              </div>

              <WriteFeedback
                project={project}
                feedbacks={feedbacks}
                setFeedbacks={setFeedbacks}
              />
              <Feedbacks feedbacks={feedbacks} />
            </section>

            <div className="absolute top-0 modal-action right-4">
              <label
                htmlFor={`project-modal-${project?._id}`}
                className="btn btn-sm btn-square"
              >
                X
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function WriteFeedback({ project, feedbacks, setFeedbacks }) {
  const { user, isAuth } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // send message to the server
  const submitMsg = async () => {
    setLoading(true);
    try {
      await addFeedback({
        message: msg,
        id: project._id,
      });
      setMsg("");
      // temporary
      if (!feedbacks) {
        feedbacks = [];
      }
      setFeedbacks([{ message: msg, user }, ...feedbacks]);
    } catch (err) {
      // console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="gap-4">
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          disabled={!isAuth}
          placeholder="write your feedback"
          className="w-full h-16 p-2 text-sm resize-none input textarea-bordered"
        />
      </div>
      <div className="flex justify-end">
        {loading ? (
          <>
            <button className="btn btn-sm btn-disabled">sending</button>
          </>
        ) : (
          <>
            {msg && (
              <button
                onClick={submitMsg}
                className="bg-blue-500 border-0 btn btn-sm hover:bg-blue-400"
              >
                send
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
}

function Feedbacks({ feedbacks }) {
  // temporary
  if (!feedbacks) {
    feedbacks = [];
  }

  console.log(feedbacks);

  const { user } = useSelector((state) => state.auth);

  const elements = feedbacks.map((i, j) => (
    <div key={j}>
      <div className="flex gap-4">
        <div className="">
          <div className="w-8 h-8 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
            <img
              alt="avatar"
              src={i?.user?.avatar ? i?.user?.avatar : "/profile.png"}
              className="object-cover w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <div className="flex-1 space-y-1">
          <section id="user" className="flex items-center justify-start flex-1">
            <p className="pr-2 text-sm font-bold">
              {i?.user?._id === user?._id ? "You" : i?.user?.name}
            </p>
          </section>
          <section id="message">
            <p className="flex-1 text-sm">{i?.message}</p>
          </section>
        </div>
      </div>
    </div>
  ));

  return <div className="space-y-6">{elements}</div>;
}
