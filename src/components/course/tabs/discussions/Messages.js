import React, { useState } from "react";
import { formatDistance } from "date-fns";
import Reply from "./Reply";
import Replies from "./Replies";
import { useSelector } from "react-redux";
import ParseMarkdown from "markdown/ParseMarkdown";

export default function Messages({ data }) {
  const { user } = useSelector((state) => state.auth);

  const messages = data?.chat?.map((i) => {
    return (
      <>
        <Message key={i._id} i={i} user={user} />
      </>
    );
  });

  return (
    <div id="messages" className="max-w-full space-y-4">
      {messages}
    </div>
  );
}

function Message({ i, user }) {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked((liked) => !liked);
  };
  return (
    <>
      <div>
        <div
          className={`${
            i?.user?._id === user?._id
              ? "w-full bg-transparent"
              : "w-full bg-transparent"
          }`}
        >
          <div className="flex gap-4">
            <div className="">
              <div className="w-8 h-8 overflow-hidden rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
                <img
                  alt="avatar"
                  src={i?.user?.avatar || "/profile.png"}
                  className=""
                />
              </div>
            </div>
            <div className="flex-wrap flex-1 w-full space-y-4">
              <section
                id="user"
                className="flex items-center justify-start flex-1"
              >
                <p className="pr-2 text-sm font-bold">
                  {i?.user?._id === user?._id ? "You" : i?.user?.name}
                </p>
              </section>
              <section id="message" className="max-w-full">
                <p className="flex-1 text-sm break-all">
                  <ParseMarkdown>{i?.message}</ParseMarkdown>
                </p>
              </section>
              <section id="details" className="flex items-center gap-4 text-xs">
                {liked ? (
                  <p className="font-bold cursor-pointer" onClick={toggleLiked}>
                    Liked
                  </p>
                ) : (
                  <p
                    onClick={toggleLiked}
                    className="font-bold text-blue-500 cursor-pointer"
                  >
                    Like
                  </p>
                )}
                <p className="text-xs whitespace-nowrap">
                  {i?.createdAt &&
                    formatDistance(
                      new Date(i.createdAt),
                      new Date(Date.now())
                    )}{" "}
                  ago
                </p>
              </section>
              <section id="replies" className="p-4 pb-2 rounded-md bg-base-200">
                <Replies replies={i.replies} user={user} />
                <Reply message={i} user={user} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
