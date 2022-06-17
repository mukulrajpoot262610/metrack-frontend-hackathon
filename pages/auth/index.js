import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className='h-screen flex items-center justify-center gap-20 pt-20 pb-10'>
            <div className='w-full lg:w-1/3 p-6'>
                <h1 className='font-bold text-center text-3xl uppercase mb-10'>Log in to 100Tube</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("email", {
                            required: true, pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            }
                        })} />
                        {errors.email && <label className="label">
                            <span className="label-text-alt text-red-500">Enter a valid Email Address!</span>
                        </label>}
                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" {...register("password", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                        <label className="label">
                            {errors.password ? <span className="label-text-alt text-red-500">Password is required!</span> : <span className="label-text-alt"></span>}
                            <Link href="/auth/forget-password">
                                <span className="label-text-alt cursor-pointer hover:underline">Forget Password?</span>
                            </Link>
                        </label>
                    </div>
                    <button className='btn btn-ghost bg-red-100 mt-6 hover:bg-red-300 w-full'>Log In </button>
                    <p className='mt-4 text-xs text-center'>Don’t have an account?
                        <Link href="/auth/register">
                            <span className='ml-1 hover:underline text-blue-400 cursor-pointer'>Register Now</span>
                        </Link>
                    </p>
                </form>
            </div>
            <div className='hidden lg:block lg:w-2/3 h-full'>
                <div className='rounded-3xl bg-red-50 flex justify-center items-center h-full overflow-hidden relative'>
                    <h1 className='text-red-200 font-black text-9xl absolute top-16 z-10 uppercase'>Login</h1>
                    <img src='/hero.svg' className='z-20 object-cover rounded-3xl w-10/12' />
                </div>
            </div>
        </div>
    )
}

export default Login