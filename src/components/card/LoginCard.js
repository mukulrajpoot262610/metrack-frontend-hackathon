import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { login } from "services/api";
import { useDispatch } from "react-redux";
import { setAuth } from "redux/authSlice";
import toast from "react-hot-toast";

const LoginCard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await login(data);
      dispatch(setAuth(res.data));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err?.response?.data?.msg);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full form-control">
          <input
            type="text"
            placeholder="Email here"
            className={`w-full input input-sm input-bordered ${
              errors.email ? "input-error" : ""
            }`}
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
        <div className="w-full mt-1 form-control">
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className={`w-full input input-sm input-bordered ${
              errors.password ? "input-error" : ""
            }`}
          />
          <label className="flex justify-between items-center my-0.5">
            {errors.password ? (
              <span className="text-red-500 label-text-alt">
                Password is required!
              </span>
            ) : (
              <span className="label-text-alt"></span>
            )}
            <Link href="/auth/forgot-password">
              <span className="cursor-pointer label-text-alt hover:underline"></span>
            </Link>
          </label>
        </div>
        <button
          className={`w-full ${
            loading && "loading"
          } bg-blue-100 btn btn-ghost hover:bg-blue-300 btn-sm`}
        >
          Log In{" "}
        </button>
        <p className="mt-1 text-xs text-center">
          Don’t have an account?
          <Link href="/auth/register">
            <span
              className={`ml-1 text-blue-400 cursor-pointer hover:underline`}
            >
              Register Now
            </span>
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginCard;
