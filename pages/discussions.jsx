import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { getMessages, sendMessage } from "../services/api";

const socket = io("http://localhost:3001");

export default function Discussions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await getMessages();
        setData(res?.data?.data);
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.msg);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      toast.success("connected");
    });
    socket.on("disconnect", () => {
      toast.error("disconnected");
    });
    socket.on("connect_error", () => {
      toast.error("unable to connect");
    });
    socket.on("message", (message) => {
      setData((data) => [...data, message]);
    });
  }, [socket]);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await sendMessage(data);
      toast.success("Message Sent 🎉");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(err?.response?.data?.msg);
    }
  };

  const messages = data.map((i, j) => {
    // console.log(i);
    return (
      <div key={j}>
        <p>{i?.message}</p>
        <p>{i?.from?.name}</p>
      </div>
    );
  });

  return (
    <>
      <div className="py-10">{messages}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="message"
          className="input input-bordered"
          {...register("message", { required: true })}
        />
        <button className="btn btn-primary">Send</button>
      </form>
    </>
  );
}
