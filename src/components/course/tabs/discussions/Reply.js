import { useState } from "react";
import toast from "react-hot-toast";
import { addReply } from "services/api";

export default function Reply({ message, user }) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // send message to the server
  const submitMsg = async () => {
    setLoading(true);
    try {
      await addReply({
        reply: msg,
        discussionId: message?.discussionId,
        messageId: message._id,
        sender: {
          _id: user.id,
          name: user.name,
          avatar: user.avatar,
        },
      });
      toast.success("Reply Sent 🎉");
      setMsg("");
    } catch (err) {
      // console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <div className="">
          <div className="w-8 h-8 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
            <img
              alt="avatar"
              src={user?.avatar || "/profile.png"}
              className="object-cover w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <div className="flex-1">
          <textarea
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="block w-full h-16 p-2 text-sm resize-none input textarea-bordered"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        {loading ? (
          <>
            <button className="btn btn-sm btn-disabled">sending</button>
          </>
        ) : (
          <>
            <button onClick={submitMsg} className="btn btn-sm btn-primary">
              send
            </button>
          </>
        )}
      </div>
    </>
  );
}
