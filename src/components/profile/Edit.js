import Router from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { updateProfile } from "services/api";
import Editor from "editor";

export default function Edit({ profile }) {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState(profile?.about || "");
  const [hashnode, setHashnode] = useState(profile?.hashnode || "");
  const [linkedin, setLinkedin] = useState(profile?.linkedin || "");
  const [github, setGithub] = useState(profile?.github || "");

  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    if (!user) return;
    setLoading(true);
    try {
      const res = await updateProfile({ ...data, about });
      toast.success("profile updated");
      Router.reload();
    } catch (err) {
      // console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      return toast.error("Please add a image");
    }
    setImageLoading(true);

    try {
      const { data } = await updateAvatar({
        id: user._id,
        url: await uploadPic(media),
      });

      dispatch(setAuth(data));
      toast.success("Updated");
      setImageLoading(false);
    } catch (err) {
      // console.log(err);
      setImageLoading(false);
      toast.error("Error in Upload");
    }
  };

  const captureImage = (e) => {
    const file = e.target.files[0];
    setMedia(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
    };
  };

  return (
    <div className="p-4 custom-overlay">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-xs font-bold text-blue-500 uppercase">
            about
          </label>
          <Editor data={about} setData={setAbout} />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-blue-500 uppercase">
            github username
          </label>
          <input
            type="text"
            {...register("github")}
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="w-full input input-bordered"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-blue-500 uppercase">
            linkedin username
          </label>
          <input
            type="text"
            {...register("linkedin")}
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full input input-bordered"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-blue-500 uppercase">
            hashnode username
          </label>
          <input
            type="text"
            {...register("hashnode")}
            value={hashnode}
            onChange={(e) => setHashnode(e.target.hashnode)}
            className="w-full input input-bordered"
          />
        </div>
        <div className="flex justify-end">
          <button className="btn btn-primary">
            {loading ? "updating" : "update"}
          </button>
        </div>
      </form>
    </div>
  );
}
