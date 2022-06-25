import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { getDiscussion, sendMessage } from "../../../../services/api";
import { useSelector } from "react-redux";
import Messages from "./Messages";
import Editor from "../../../editor";

// socket connection
const socket = io("http://localhost:3001");

export default function Discussions({ id }) {
  const { isAuth, user } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sendingMsg, setSendingMsg] = useState(false);
  const [msg, setMsg] = useState("");
  console.log(id, "id");

  // send message to the server
  const submitMsg = async () => {
    try {
      if (sendingMsg) {
        return toast.error("msg already in queue");
      }
      if (!msg) {
        return toast.error("empty message");
      }
      setSendingMsg(true);
      console.log(user, "user");
      const res = await sendMessage({
        message: msg,
        discussionId: id,
        sender: {
          _id: user._id,
          name: user.name,
        },
      });
      toast.success("Message Sent 🎉");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  // handle keydown on msg box
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submitMsg();
    }
  };

  // handle keydown on msg box
  const handleSend = (e) => {
    e.preventDefault();
    submitMsg();
  };

  // get discussion data
  useEffect(() => {
    if (!id) return;
    socket.emit("join", id);
    (async () => {
      setLoading(true);
      try {
        const res = await getDiscussion(id);
        console.log(res, res?.data, res?.data?.data, "data data data");
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

  // socket listeners
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

    socket.on("update:reply", (payload) => {
      console.log(payload, "payload");
      setData((data) => {
        let chat = data?.chat || [];
        const updatedChat = chat.map((i) => {
          if (i?._id === payload?.id) {
            let temp = i;
            temp.replies = [...temp.replies, payload?.data];
            return temp;
          }
          return i;
        });
        return { ...data, chat: updatedChat };
      });
    });

    socket.on("update:message", (payload) => {
      console.log(payload, "payload");
      setData((data) => {
        return {
          ...data,
          chat: [payload, ...data?.chat],
        };
      });
      setMsg("");
      setSendingMsg(false);
    });
  }, [socket]);

  return (
    <div className="w-full space-y-5">
      <section className="text-accent-content">
        <p className="font-bold">Discussions</p>
        <p className="mt-1 text-sm">
          Ask questions, discuss different approaches, and share your thoughts
          about this course.
        </p>
      </section>
      <div className="flex gap-4">
        <div className="">
          <div className="w-8 h-8 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
            <img
              src="https://api.lorem.space/image/face?hash=47449"
              className="object-cover w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <div className="flex-1">
          <Editor data={msg} setData={setMsg} />
        </div>
      </div>
      <div className="flex justify-end">
        {sendingMsg ? (
          <button className="px-4 rounded-full btn btn-sm btn-disabled">
            Sending
          </button>
        ) : (
          <button
            className="px-4 rounded-full btn btn-sm btn-primary"
            onClick={handleSend}
          >
            Send
          </button>
        )}
      </div>
      <div className="w-full h-full chat" id="chat">
        <div className="w-0 h-0 opacity-0" id="top-of-chat"></div>
        <Messages data={data} />
      </div>
    </div>
  );
}
