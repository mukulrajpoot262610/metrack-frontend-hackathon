import React, { useEffect } from "react";
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
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await signup(data);
      dispatch(setAuth(res.data));
      toast.success("account created");
      router.push("/auth/verify");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.msg);
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
              <label className="label">
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
              <label className="label">
                <span className="text-red-500 label-text-alt">
                  Enter a valid Email Address!
                </span>
              </label>
            )}
          </div>
          <div className="w-full mt-2 form-control">
            <label className="label">
              <span className="label-text">Password</span>
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
          <button
            type="submit"
            className="w-full mt-6 bg-red-100 btn btn-ghost hover:bg-red-300"
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
        <div className="relative flex justify-center h-full overflow-hidden rounded-3xl bg-red-50">
          <h1 className="absolute font-black text-red-200 uppercase text-9xl top-16">
            Welcome
          </h1>
          <img
            src="/hero.svg"
            className="z-20 object-cover w-10/12 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
