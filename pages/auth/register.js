import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("username is required"),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Register = () => {
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
        <h1 className="text-3xl font-bold text-center uppercase ">
          Welcome to 100Tube
        </h1>
        <p className="mt-2 mb-8 text-xs text-center">
          Join 100Tube for Free and explore the new learing experience
        </p>

        <form onSubmit={handleSubmit(submitForm)}>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              {...register("username")}
              placeholder="Type here"
              className="w-full input input-bordered"
            />
            <p className="pt-1 text-sm text-error">
              {" "}
              {errors?.username?.message}{" "}
            </p>
            {/* <label className="label">
                            <span className="label-text-alt">Alt label</span>
                        </label> */}
          </div>
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
          <div className="w-full mt-2 form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              name="password"
              {...register("password")}
              placeholder="Type here"
              className="w-full input input-bordered"
            />
            <p className="pt-1 text-sm text-error">
              {" "}
              {errors?.password?.message}{" "}
            </p>
            {/* <label className="label">
                            <span className="label-text-alt">Alt label</span>
                        </label> */}
          </div>
          <div className="w-full mt-2 form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              name="confirmPassword"
              {...register("confirmPassword")}
              placeholder="Type here"
              className="w-full input input-bordered"
            />
            <p className="pt-1 text-sm text-error">
              {" "}
              {errors?.confirmPassword && "Passwords Should Match!"}{" "}
            </p>
            {/* <label className="label">
                            <span className="label-text-alt">Alt label</span>
                        </label> */}
          </div>
          <button
            type="submit"
            id="submit"
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
