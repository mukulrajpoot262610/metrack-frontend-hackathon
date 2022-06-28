import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { register as signup } from "../../services/api";
import { setAuth } from "../../redux/authSlice";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [toggelFieldType, setToggleFieledType] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (payload) => {
    setLoading(true);
    try {
      const { data } = await signup(payload);
      router.push("/dashboard");
      toast.success("Registration Success 🎉");
      dispatch(setAuth(data))
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen gap-20 pb-10 min-h-screen">
      <div className="w-full p-6 lg:w-1/3">
        <a className="flex items-center flex-col gap-2 mb-2">
          <img src="/logo.png" className="h-12 w-24 object-contain" />
          <h1 className="uppercase tracking-tight text-3xl font-bold cursor-pointer text-center">
            Welcome to <span className="text-blue-500">ME</span>Track
          </h1>
        </a>
        <p className="mb-4 text-xs text-center">
          Join Metrack for Free and explore the new learing experience
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`w-full input input-bordered ${errors.name ? "input-error" : ""}`}
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && (
              <label className="">
                <span className="text-red-500 label-text-alt">
                  Enter a valid name!
                </span>
              </label>
            )}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`w-full input input-bordered ${errors.email ? "input-error" : ""}`}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email && (
              <label className="">
                <span className="text-red-500 label-text-alt">
                  Enter a valid Email Address!
                </span>
              </label>
            )}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative w-full">
              <input
                type={toggelFieldType ? "text" : "password"}
                placeholder="Password"
                className={`input ${errors.password ? "input-error" : ""
                  } input-bordered w-full`}
                {...register("password", {
                  required: true,
                })}
              />
              {toggelFieldType ? (
                <AiOutlineEyeInvisible
                  className="absolute text-xl cursor-pointer top-4 right-3"
                  onClick={() => setToggleFieledType(!toggelFieldType)}
                />
              ) : (
                <AiOutlineEye
                  className="absolute text-xl cursor-pointer top-4 right-3"
                  onClick={() => setToggleFieledType(!toggelFieldType)}
                />
              )}
            </div>
            <label className="">
              {errors.password ? (
                <span className="text-red-500 label-text-alt">
                  Password is required!
                </span>
              ) : (
                <span className="label-text-alt"></span>
              )}
            </label>
          </div>
          <button
            className={`w-full mt-4 bg-blue-100 btn btn-ghost hover:bg-blue-300 ${loading && "loading"
              } `}
          >
            Register{" "}
          </button>
          <p className="mt-4 text-xs text-center">
            Have an account already?
            <Link href="/auth">
              <span className="ml-1 text-blue-400 cursor-pointer hover:underline">
                Login Now
              </span>
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden h-full lg:w-2/3">
        <div className="relative flex justify-center items-end h-full overflow-hidden rounded-3xl bg-blue-50">
          <h1 className="absolute font-black text-blue-200 uppercase text-9xl top-20">
            Welcome
          </h1>
          <img
            src="/auth/404.svg"
            className="z-20 object-contain w-10/12 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
