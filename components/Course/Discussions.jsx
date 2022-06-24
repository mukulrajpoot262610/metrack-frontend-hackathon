import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { getDiscussion, sendMessage } from "../../services/api";
import { useSelector } from "react-redux";
import { format, formatDistance } from "date-fns";
import { HiOutlineDotsVertical } from "react-icons/hi";
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
    console.log(data, "data data data");
  }, [data]);

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
    console.log("submit called", data);
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
        <Element id={i?._id} className="flex md:pr-20">
          <div className={`${i?.user?._id === user?._id ? "to" : "from"}`}>
            <div className="flex justify-between text-[10px] px-2 mb-2">
              <p className="pr-4">{i?.user?.name}</p>
              <p className="">
                {i?.createdAt &&
                  formatDistance(new Date(i.createdAt), new Date(Date.now()))}
              </p>
            </div>
            {i?.replyOf && (
              <section className="p-2 mb-2 rounded-lg bg-base-300">
                <ScrollerLink
                  spy={true}
                  className="block w-full h-full cursor-pointer"
                  to={`${i?.replyOf?._id}`}
                  containerId="chat"
                >
                  <span className="w-full h-full">{i?.replyOf?.message}</span>
                </ScrollerLink>
              </section>
            )}
            <section id="" className="flex">
              <p className="flex-1 px-2 text-sm md:text-base">{i?.message}</p>
              <div className="h-full dropdown">
                <label tabIndex="0" className="z-50 m-1 btn btn-xs btn-ghost">
                  <HiOutlineDotsVertical />
                </label>
                <ul
                  tabIndex="0"
                  className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button onClick={(e) => setReply(i)}>Reply</button>
                  </li>
                  <li>
                    <button>Info</button>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </Element>
      </>
    );
  });

  return (
    <div className="flex flex-col w-full h-screen max-w-4xl mx-auto overflow-hidden border border-neutral border-opacity-10 bg-base-100 rounded-xl">
      <section className="p-4 bg-accent text-accent-content">
        <p className="font-bold">Discussions</p>
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
        className="flex gap-4 p-4 border-t border-neutral border-opacity-10"
      >
        <input
          type="text"
          placeholder="message"
          className="flex-1 w-full input input-bordered"
          {...register("message", { required: true })}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          send
        </button>
      </form>
      <div id="chat-wrapper" className="relative w-full h-full overflow-hidden">
        <Element
          className="w-full h-full pl-4 pr-4 overflow-auto overflow-x-hidden md:pr-0 chat"
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
            <div className="flex items-center justify-center w-8 h-8 rounded-full text-accent-content bg-accent">
              <AiOutlineArrowUp className="w-6 h-6" />
            </div>
          </ScrollerLink>
        </Element>
      </div>
    </div>
  );
}
