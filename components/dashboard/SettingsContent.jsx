import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword, updateAvatar, updateUsername } from "../../services/api";
import { setAuth } from "../../redux/authSlice";
import uploadPic from "../../utils/uploadPic";

export default function SettingsContent() {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [url, setUrl] = useState();
  const [image, setImage] = useState();
  const [media, setMedia] = useState();
  const [imageLoading, setImageLoading] = useState(false);
  const dispatch = useDispatch();

  const changePassword = async (data) => {
    setLoading(true);

    try {
      const res = await updatePassword(data);
      toast.success("Password changed");
    } catch (err) {
      // console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setOldPassword("");
      setNewPassword("");
      setLoading(false);
    }
  };

  const changeUsername = async (e) => {
    e.preventDefault()
    setLoading(true);

    if (!username) {
      return toast.error("Add a username")
    }

    try {
      const { data } = await updateUsername({ id: user._id, username });
      toast.success("Username changed");
      dispatch(setAuth(data));
    } catch (err) {
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
    <>
      <section className="col-span-12 lg:col-span-9 text-base-content">
        <div className="w-full p-4 space-y-8 bg-blue-50 rounded-xl">
          <section className="space-y-1">
            <h2 className="text-sm font-bold uppercase text-accent">
              Upload Image
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
            <div
              onClick={uploadImage}
              className={`${imageLoading ? "loading" : ""
                } btn bg-blue-500 hover:bg-blue-400 border-0 w-fit mt-2 `}
            >
              Upload
            </div>
          </section>
          <section className="space-y-1">
            <h2 className="text-sm font-bold uppercase text-accent">
              Change Name
            </h2>
            <form>
              <input
                type="text"
                className="w-1/2 input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className="ml-2 bg-blue-500 border-0 btn hover:bg-blue-400">
                Update
              </button>
            </form>
          </section>
          <section className="space-y-1">
            <h2 className="text-sm font-bold uppercase text-accent">
              Change Username
            </h2>
            <form onSubmit={changeUsername}>
              <input
                type="text"
                className="w-1/2 input input-bordered"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button className="ml-2 bg-blue-500 border-0 btn hover:bg-blue-400">
                Update
              </button>
            </form>
          </section>

          <section className="space-y-1">
            <h2 className="text-sm font-bold uppercase text-accent">
              Change Password
            </h2>
            <form onSubmit={handleSubmit(changePassword)} className="space-y-2">
              <div className="space-y-1">
                <label htmlFor="" className="text-sm text-accent">
                  Password
                </label>
                <br />
                <input
                  type="text"
                  value={oldPassword}
                  {...register("oldPassword", {
                    required: true,
                  })}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="input input-bordered"
                  placeholder="old password"
                />
                <br />
                <label className="">
                  {errors.oldPassword ? (
                    <span className="text-red-500 label-text-alt">
                      Old password is required!
                    </span>
                  ) : (
                    <span className="label-text-alt"></span>
                  )}
                </label>
              </div>
              <div className="space-y-1">
                <label htmlFor="" className="text-sm text-accent">
                  New Password
                </label>
                <br />
                <input
                  type="text"
                  {...register("newPassword", {
                    required: true,
                  })}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="input input-bordered"
                  placeholder="new password"
                />
                <br />
                <label className="">
                  {errors.newPassword ? (
                    <span className="text-red-500 label-text-alt">
                      New password is required!
                    </span>
                  ) : (
                    <span className="label-text-alt"></span>
                  )}
                </label>
              </div>
              <button
                type="submit"
                className={`btn ${loading
                  ? "btn-disabled"
                  : "bg-blue-500 hover:bg-blue-400 border-0"
                  }`}
              >
                {loading ? "Updating" : "Update Password"}
              </button>
            </form>
          </section>
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-accent">Email Preferences</h2>
            <form className="space-y-4">
              <div className="flex items-center gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <label htmlFor="" className="flex-1 text-sm">
                  Updates related to new projects
                </label>
              </div>
              <div className="flex items-center gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <label htmlFor="" className="flex-1 text-sm">
                  Updates related to new products
                </label>
              </div>
              <div className="flex items-center gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <label htmlFor="" className="flex-1 text-sm">
                  Updates related to new services
                </label>
              </div>
              <div className="flex items-center gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <label htmlFor="" className="flex-1 text-sm">
                  Branding and Advertisements
                </label>
              </div>
            </form>
          </section>
          {/* <section className="space-y-1">
            <h2 className="text-sm font-bold text-error">Delete Account</h2>
            <div className="space-y-4">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                commodi omnis, ab nesciunt praesentium illum doloribus vel? In
                omnis nobis ullam nesciunt unde dicta, temporibus ex ipsam, a
                qui non.
              </p>
              <button className="btn btn-error">Delete Account</button>
            </div>
          </section> */}
        </div>
      </section>
    </>
  );
}
