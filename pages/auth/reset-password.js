import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { resetPassword, verifyMagicToken } from "../../services/api";

const ResetPassowrd = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const router = useRouter();
  const params = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { password, confirmPassword } = data;
    try {
      if (password !== confirmPassword) {
        return toast("passwords do not match");
      }
      data = { ...data, ...params };
      const res = await resetPassword(data);
      toast(res?.data?.msg);
      router.push("/auth");
    } catch (err) {
      toast(err?.response?.data?.msg);
    }
  };

  // ONLOAD: check if link is valid
  useEffect(() => {
    if (!params?.token) return;
    (async () => {
      try {
        const res = await verifyMagicToken(params);
      } catch (err) {
        router.push("/auth/invalid-link");
      }
    })();
  }, [params]);

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  return (
    <div className="flex items-center justify-center h-screen gap-20 pb-10">
      <div className="w-full p-6 lg:w-1/3">
        <h1 className="text-3xl font-bold text-center uppercase">
          Reset Password
        </h1>
        <p className="mt-2 mb-10 text-xs text-center">
          Make a new password for your 100Tube account.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mt-2 form-control">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              type="text"
              {...register("password", { required: true })}
              placeholder="Type here"
              className="w-full input input-bordered"
            />
            <label className="label">
              {errors.password ? (
                <span className="text-red-500 label-text-alt">
                  Password is required!
                </span>
              ) : (
                <span className="label-text-alt"></span>
              )}
            </label>
          </div>
          <div className="w-full mt-2 form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              {...register("confirmPassword", { required: true })}
              placeholder="Type here"
              className="w-full input input-bordered"
            />
            <label className="label">
              {errors.password ? (
                <span className="text-red-500 label-text-alt">
                  Passwords should match
                </span>
              ) : (
                <span className="label-text-alt"></span>
              )}
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-red-100 btn btn-ghost hover:bg-red-300"
          >
            Reset Password
          </button>
        </form>
      </div>
      <div className="hidden h-full lg:block lg:w-2/3">
        <div className="relative flex items-center justify-center h-full overflow-hidden rounded-3xl bg-red-50">
          <h1 className="absolute z-10 font-black text-red-200 uppercase text-9xl top-16">
            Forgot
          </h1>
          <h1 className="absolute z-10 font-black text-red-200 uppercase text-8xl top-40">
            PAssword
          </h1>
          <img
            src="/forgot.png"
            className="z-20 object-cover object-top w-10/12 mt-40 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassowrd;
