import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { login } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const { isAuth } = useSelector((state) => state.auth);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await login(data);
      dispatch(setAuth(res.data));
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
      toast.error(err?.response?.data?.msg || err?.message);
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
        <h1 className="mb-10 text-3xl font-bold text-center uppercase">
          Log in to 100Tube
        </h1>

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
              <Link href="/auth/forgot-password">
                <span className="cursor-pointer label-text-alt hover:underline">
                  Forget Password?
                </span>
              </Link>
            </label>
          </div>
          <button className={`w-full mt-6 ${loading && "loading"} bg-red-100 btn btn-ghost hover:bg-red-300`}>
            Log In{" "}
          </button>
          <p className="mt-4 text-xs text-center">
            Don’t have an account?
            <Link href="/auth/register">
              <span className={`ml-1 text-blue-400 cursor-pointer hover:underline`}>
                Register Now
              </span>
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden h-full lg:block lg:w-2/3">
        <div className="relative flex items-center justify-center h-full overflow-hidden rounded-3xl bg-red-50">
          <h1 className="absolute z-10 font-black text-red-200 uppercase text-9xl top-16">
            Login
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

export default Login;
