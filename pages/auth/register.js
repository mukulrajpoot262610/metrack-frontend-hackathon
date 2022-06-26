import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { register as signup } from "../../services/api";
import { setAuth } from "../../redux/authSlice";
import toast from "react-hot-toast";
import UseRedirectOnAuth from "../../hooks/UseIsAuthenticated";

const Register = () => {
  const dispatch = useDispatch();
  const { isAuth } = UseRedirectOnAuth("/", true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await signup(data);
      router.push("/auth/verify");
      toast.success("Check your mail 🎉");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen gap-20 pb-10">
      <div className="w-full p-6 lg:w-1/3">
        <h1 className="text-3xl font-bold text-center uppercase ">
          Welcome to 100Tube
        </h1>
        <p className="mt-2 mb-8 text-xs text-center">
          Join 100Tube for Free and explore the new learing experience
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              {...register("name", {
                required: true,
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                },
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
              className="w-full input input-bordered"
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
            <input
              type="text"
              {...register("password", { required: true })}
              placeholder="Type here"
              className="w-full input input-bordered"
            />
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
            className={`w-full mt-4 bg-blue-100 btn btn-ghost hover:bg-blue-300 ${
              loading && "loading"
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
      <div className="hidden h-full lg:block lg:w-2/3">
        <div className="relative flex items-end justify-center h-full overflow-hidden rounded-3xl bg-blue-50">
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
