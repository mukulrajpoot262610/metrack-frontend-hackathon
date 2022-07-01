import { formatDistance } from "date-fns";
import { useState } from "react";

export default function Replies({ replies, user }) {
  const elements = replies?.map((i) => <Reply key={i._id} i={i} user={user} />);
  return <>{elements}</>;
}

function Reply({ i, user }) {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked((liked) => !liked);
  };

  return (
    <>
      <div className="flex gap-4">
        <div className="">
          <div className="w-8 h-8 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
            <img
              alt="avatar"
              src={i?.user?.avatar || "/profile.png"}
              className="object-cover w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <div className="space-y-4">
          <section id="user" className="flex items-center justify-start flex-1">
            <p className="pr-2 text-sm font-bold">
              {i?.user?._id === user?._id ? "You" : i?.user?.name}
            </p>
          </section>
          <section id="message">
            <p className="flex-1 text-sm">{i?.message}</p>
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
          <section id="replies" className="bg-base-200"></section>
        </div>
      </div>
    </>
  );
}
