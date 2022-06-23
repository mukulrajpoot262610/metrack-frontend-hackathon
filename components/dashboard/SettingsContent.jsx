import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function SettingsContent() {
  const { user } = useSelector((state) => state.auth);
  const [email, setEmail] = useState(user?.email);

  return (
    <>
      <section className="col-span-9 text-base-content">
        <div className="w-full p-4 space-y-8 bg-red-50 rounded-xl">
          <section className="space-y-4">
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
          <section className="space-y-4">
            <h2 className="text-sm font-bold uppercase text-accent">
              Change Email
            </h2>
            <form>
              <input
                type="text"
                className="input input-bordered"
                value={email}
                onChange={(e) => e.target.value}
              />
              <button className="ml-2 btn btn-primary">Update</button>
            </form>
          </section>
          <section className="space-y-4">
            <h2 className="text-sm font-bold uppercase text-accent">
              Change Password
            </h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="" className="text-sm text-accent">
                  Password
                </label>
                <br />
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="password"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="" className="text-sm text-accent">
                  New Password
                </label>
                <br />
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="new password"
                />
              </div>
              <button className="btn btn-primary">Update Password</button>
            </form>
          </section>
          <section className="space-y-4">
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
          <section className="space-y-4">
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
