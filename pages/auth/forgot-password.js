import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { forgotPassword } from "../../services/api";
import toast from "react-hot-toast";

const ForgetPassowrd = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await forgotPassword(data);
      toast(res?.data?.msg);
    } catch (err) {
      toast(err?.response?.data?.msg);
    }
  };

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  return (
    <div className="flex items-center justify-center h-screen gap-20 pt-20 pb-10">
      <div className="w-full p-6 lg:w-1/3">
        <h1 className="text-3xl font-bold text-center uppercase">
          Forgot Password
        </h1>
        <p className="mt-2 mb-10 text-xs text-center">
          We&apos;ll send a password reset link to your email.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email && (
              <label className="label">
                <span className="text-red-500 label-text-alt">
                  Enter a valid Email Address!
                </span>
              </label>
            )}
          </div>
          <button className="w-full mt-6 bg-red-100 btn btn-ghost hover:bg-red-300">
            Send Password Reset Link
          </button>
          <p className="mt-4 text-xs text-center">
            Don’t have an account?
            <Link href="/auth/register">
              <span className="ml-1 text-blue-400 cursor-pointer hover:underline">
                Register Now
              </span>
            </Link>
          </p>
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

export default ForgetPassowrd;
