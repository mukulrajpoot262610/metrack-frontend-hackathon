import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { getDiscussion, sendMessage } from "../../../services/api";
import { useSelector } from "react-redux";
import { format, formatDistance } from "date-fns";
import { MdOutlineReply } from "react-icons/md";
import { Link as ScrollerLink, Element } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const socket = io("http://localhost:3001");

export default function Discussions({ id }) {

  const [reply, setReply] = useState(null);
  const [msg, setMsg] = useState("");
  const { user } = useSelector((state) => state.auth);
  console.log(id, "id");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isAuth } = useSelector(state => state.auth)

  useEffect(() => {
    if (!id) return;
    socket.emit("join", id);
    (async () => {
      setLoading(true);
      try {
        const res = await getDiscussion(id);
        setData(res?.data?.data);
        // console.log(res?.data?.data, "response", res);
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.msg);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  useEffect(() => {
    socket.on("connect", () => {
      toast.success("connected");
      id && socket.emit("join", id);
    });
    socket.on("disconnect", () => {
      toast.error("disconnected");
    });
    socket.on("connect_error", () => {
      toast.error("unable to connect");
    });
    socket.on("update_state", (payload) => {
      console.log(payload, "payload");
      setData((data) => {
        return {
          ...data,
          chat: [payload, ...data?.chat],
        };
      });
    });
  }, [socket]);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await sendMessage({
        ...data,
        discussionId: id,
        replyOf: reply,
      });
      toast.success("Message Sent 🎉");
      setReply(null);
      setMsg("");
      setLoading(false);
      let chat = chat?.current;
      console.log(chat, "chat");
      if (!chat) return;
      chat.scrollTop = 0;
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(err?.response?.data?.msg);
    }
  };

  const messages = data?.chat?.map((i) => {
    return (
      <>
        <Element id={i?._id} className="flex items-start gap-4">

          <div className={`${i?.user?._id === user?._id ? "my-2 p-4 w-full bg-gray-50" : "my-2 p-4 w-full bg-gray-50"}`}>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=47449" className="w-8 h-8 object-cover rounded-full" />
              </div>

              <div className="flex justify-start items-center ml-2 mb-2 overflow-hidden">
                <p className="pr-2 text-sm font-bold">{i?.user?.name}</p>
                <p className="text-xs whitespace-nowrap">
                  {i?.createdAt &&
                    formatDistance(new Date(i.createdAt), new Date(Date.now()))} ago
                </p>
              </div>
            </div>

            <section id="" className="flex mt-2">
              <p className="flex-1 px-2 text-sm">{i?.message}</p>
            </section>

            <div className="h-full px-2 text-sm font-medium my-2">
              <button className="flex items-center btn btn-ghost btn-sm gap-1" onClick={(e) => setReply(i)}><MdOutlineReply /> Reply</button>
            </div>

            <div className="ml-6">
              {i?.replyOf && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
                      <img src="https://api.lorem.space/image/face?hash=47449" className="w-8 h-8 object-cover rounded-full" />
                    </div>

                    <div className="flex justify-start items-center pl-2 mb-2">
                      <p className="pr-2 text-sm font-bold">{i?.user?.name}</p>
                      <p className="text-xs whitespace-nowrap">
                        {i?.createdAt &&
                          formatDistance(new Date(i.createdAt), new Date(Date.now()))} ago
                      </p>
                    </div>
                  </div>
                  <section className="py-2 mb-2">
                    <ScrollerLink
                      spy={true}
                      className="block w-full h-full cursor-pointer"
                      to={`${i?.replyOf?._id}`}
                      containerId="chat"
                    >
                      <span className="w-full h-full">{i?.replyOf?.message}</span>
                    </ScrollerLink>
                  </section>
                </>
              )}
            </div>
          </div>

        </Element>
      </>
    );
  });

  return (
    <div className="flex flex-col w-full mx-auto">
      <section className="p-4 text-accent-content">
        <p className="font-bold">Discussions</p>
        <p className="text-sm mt-1">Ask questions, discuss different approaches, and share your thoughts about this course.</p>
      </section>
      {reply ? (
        <div id="replyTo" className="p-4 mt-1 bg-accent">
          <div className="flex">
            <p className="flex-1 mb-2">{reply?.message}</p>
            <button
              onClick={() => setReply(null)}
              className="btn btn-ghost btn-sm"
            >
              X
            </button>
          </div>

          <div className="flex justify-between">
            <p className="text-xs">{reply?.user?.name}</p>
            <p className="text-xs">
              {reply?.createdAt &&
                formatDistance(new Date(reply.createdAt), new Date(Date.now()))}
            </p>
          </div>
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full gap-4 pt-4 border-t border-neutral border-opacity-10"
      >
        <div className="w-10 h-10 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-1">
          <img src="https://api.lorem.space/image/face?hash=47449" className="w-10 h-10 object-cover rounded-full" />
        </div>
        <div className="w-full ml-1">
          <textarea
            type="text"
            placeholder="Add to the discussion"
            className="flex-1 w-full textarea textarea-bordered"
            {...register("message", { required: true })}
            value={msg}
            disabled={!isAuth}
            onChange={(e) => setMsg(e.target.value)}
          />
          <div className="flex justify-end">
            {
              msg && <button className="btn btn-sm">Post</button>
            }
          </div>
        </div>
      </form>

      <div id="chat-wrapper" className="relative w-full h-full">
        <Element
          className="w-full h-full pl-4 pr-4 md:pr-0 chat"
          id="chat"
        >
          <Element className="w-0 h-0 opacity-0" id="top-of-chat"></Element>

          {messages}

          <ScrollerLink
            to="top-of-chat"
            className="absolute animate-bounce bottom-4 right-4"
            containerId="chat"
            spy={true}
            smooth={true}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full shadow cursor-pointer text-accent-content bg-accent">
              <AiOutlineArrowUp className="w-6 h-6" />
            </div>
          </ScrollerLink>
        </Element>
      </div>
    </div>
  );
}
