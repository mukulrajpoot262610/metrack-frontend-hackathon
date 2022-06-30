import React, { useEffect, useState } from "react";
import Profile from "components/profile";
import { useSelector } from "react-redux";
import { getProfile } from "services/api";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [data, setData] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // console.log(user);
    if (!user) return;
    // console.log(user);
    const fetchData = async () => {
      try {
        const { data } = await getProfile(user._id);
        setData(data?.data || {});
        // console.log({ data });
      } catch (err) {
        // console.log(err);
        toast.error(err?.response?.data?.msg);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="pb-10 mt-20">
      <Profile data={data} user={user} />
    </div>
  );
}
