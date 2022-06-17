import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});

const ForgetPassowrd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data, "data");
  };
  return (
    <div className="flex items-center justify-center h-screen gap-20 pt-20 pb-10">
      <div className="w-full p-6 lg:w-1/3">
        <h1 className="text-3xl font-bold text-center uppercase">
          Forgot Password
        </h1>
        <p className="mt-2 mb-10 text-xs text-center">
          We&apos;ll send a password reset link to your email.
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              {...register("email")}
              placeholder="Type here"
              className="w-full input input-bordered"
            />
            <p className="pt-1 text-sm text-error">
              {" "}
              {errors?.email?.message}{" "}
            </p>
            {/* <label className="label">
                            <span className="text-red-300 label-text-alt">We&apos;ll send a verification link to your email.</span>
                        </label> */}
          </div>
          <button
            type="submit"
            id="submit"
            className="w-full mt-6 bg-red-100 btn btn-ghost hover:bg-red-300"
          >
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
