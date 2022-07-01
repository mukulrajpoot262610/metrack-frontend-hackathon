import Router from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { setAuth } from "redux/authSlice";
import { updateAvatar } from "services/api";
import uploadPic from "utils/uploadPic";
import { useDispatch, useSelector } from "react-redux";
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
  const [image, setImage] = useState();
  const [media, setMedia] = useState();
  const [imageLoading, setImageLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    if (!user) return;
    setLoading(true);
    try {
      await updateProfile({ ...data, about });
      toast.success("profile updated");
      Router.reload();
    } catch (err) {
      // console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();
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
      toast.success("Image uploaded. Continue Editing");
      setImageLoading(false);
    } catch (err) {
      setImageLoading(false);
      toast.error("Error in Upload");
    }
  };

  const captureImage = (e) => {
    e.preventDefault();
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
        <section className="space-y-2">
          <h2 className="block text-xs font-bold text-blue-500 uppercase">
            about
          </h2>
          <label className="flex flex-col items-center w-full p-1 border rounded-lg cursor-pointer lg:w-1/2 text-blue border-blue">
            {image ? (
              <img src={image} alt="" className="rounded-lg" />
            ) : (
              <div className="flex flex-col items-center m-4">
                <span className="text-5xl">+</span>
                <span className="text-xs">Select a file</span>
              </div>
            )}
            <input type="file" onChange={captureImage} className="hidden" />
          </label>
          <button
            onClick={uploadImage}
            className={`${
              imageLoading ? "loading" : ""
            } btn bg-blue-500 hover:bg-blue-400 border-0 w-fit mt-4`}
          >
            Upload
          </button>
        </section>
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
