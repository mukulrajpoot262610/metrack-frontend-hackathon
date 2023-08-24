import React, { useEffect, useState } from "react";
import Profile from "components/profile";
import { useSelector } from "react-redux";
import { getProfile } from "services/api";
import toast, { LoaderIcon } from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProfilePage() {
  const [data, setData] = useState(null)

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProfile(username);
        setData(data?.data);
      } catch (err) {
        setData("Not found");
        toast.error(err?.response?.data?.msg);
      }
    };
    username && fetchData();
  }, [username]);

  return (
    <div className="pb-10 mt-16">
      {
        data ? (data === "Not found" ? <div className="relative flex flex-col items-center justify-center h-96 lg:h-[85vh] overflow-hidden">
          <h1 className="absolute font-black text-blue-100 text-9xl lg:text-10xl -z-10">
            404
          </h1>
          <h1 className="text-4xl font-black text-blue-500 lg:text-9xl">
            Not Found
          </h1>
          <Link href={"/"}>
            <button className="absolute mt-10 bg-blue-500 border-0 bottom-10 btn btn-wide hover:bg-blue-400">
              Go to Home
            </button>
          </Link>
        </div> : <Profile data={data} user={user} />) : <div>
          <LoaderIcon />
        </div>
      }

    </div>
  );
}
