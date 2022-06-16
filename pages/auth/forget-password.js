import React from 'react'
import Link from 'next/link'

const ForgetPassowrd = () => {
    return (
        <div className='h-screen flex items-center justify-center gap-20 pt-20 pb-10'>
            <div className='w-full lg:w-1/3 p-6'>
                <h1 className='font-bold text-center text-3xl uppercase'>Forgot Password</h1>
                <p className='mt-2 text-center text-xs mb-10'>We&apos;ll send a password reset link to your email.</p>
                <form>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {/* <label className="label">
                            <span className="label-text-alt">Alt label</span>
                        </label> */}
                    </div>
                    <button className='btn btn-ghost bg-red-100 mt-6 hover:bg-red-300 w-full'>Send Password Reset Link</button>
                    <p className='mt-4 text-xs text-center'>Don’t have an account?
                        <Link href="/auth/register">
                            <span className='ml-1 hover:underline text-blue-400 cursor-pointer'>Register Now</span>
                        </Link>
                    </p>
                </form>
            </div>
            <div className='hidden lg:block lg:w-2/3 h-full'>
                <div className='rounded-3xl bg-red-50 flex justify-center items-center h-full overflow-hidden relative'>
                    <h1 className='text-red-200 font-black text-9xl absolute top-16 z-10 uppercase'>Forgot</h1>
                    <h1 className='text-red-200 font-black text-8xl absolute top-40 z-10 uppercase'>PAssword</h1>
                    <img src='/forgot.png' className='object-cover object-top mt-40 rounded-3xl w-10/12 z-20' />
                </div>
            </div>
        </div>
    )
}

export default ForgetPassowrd