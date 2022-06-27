import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { updatePassword } from "../../services/api";

export default function SettingsContent() {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user?.name);
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changePassword = async (data) => {
    setLoading(true);
    try {
      const res = await updatePassword(data);
      toast.success("Password changed");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setOldPassword("");
      setNewPassword("");
      setLoading(false);
    }
  };

  return (
    <>
      <section className="col-span-12 lg:col-span-9 text-base-content">
        <div className="w-full p-4 space-y-8 bg-blue-50 rounded-xl">
          <section className="space-y-1">
            <h2 className="text-sm font-bold uppercase text-accent">
              Email Verification
            </h2>
            <div>
              {user && user?.verified ? (
                <button className="btn-disabled btn">Email Verified</button>
              ) : (
                <button className="btn-primary btn">Verify email</button>
              )}
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
              <button className="ml-2 btn btn-primary">Update</button>
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
                className={`btn ${loading ? "btn-disabled" : "btn-primary"}`}
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
          <section className="space-y-1">
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
          </section>
        </div>
      </section>
    </>
  );
}
