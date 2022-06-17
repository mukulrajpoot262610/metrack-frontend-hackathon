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

const ResetPassowrd = () => {
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
          Reset Password
        </h1>
        <p className="mt-2 mb-10 text-xs text-center">
          Make a new password for your 100Tube account.
        </p>
        <form>
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
