import React from 'react'
import Link from 'next/link'

const Register = () => {
    return (
        <div className='h-screen flex items-center justify-center gap-20 pt-20 pb-10'>
            <div className='w-full lg:w-1/3 p-6'>
                <h1 className='font-bold text-center text-3xl uppercase mb-10'>Welcome to 100Tube</h1>

                <form>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {/* <label className="label">
                            <span className="label-text-alt">Alt label</span>
                        </label> */}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {/* <label className="label">
                            <span className="label-text-alt">Alt label</span>
                        </label> */}
                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {/* <label className="label">
                            <span className="label-text-alt">Alt label</span>
                        </label> */}
                    </div>
                    <button className='btn btn-ghost bg-red-100 mt-6 hover:bg-red-300 w-full'>Register </button>
                    <p className='mt-4 text-xs text-center'>Have an account already?
                        <Link href="/auth">
                            <span className='ml-1 hover:underline text-blue-400 cursor-pointer'>Login Now</span>
                        </Link>
                    </p>
                </form>
            </div>
            <div className='hidden lg:block lg:w-2/3 h-full'>
                <div className='rounded-3xl bg-red-50 flex justify-center h-full overflow-hidden relative'>
                    <h1 className='text-red-200 font-black text-9xl absolute top-16 uppercase'>Welcome</h1>
                    <img src='/hero.svg' className='object-cover rounded-3xl w-10/12 z-20' />
                </div>
            </div>
        </div>
    )
}

export default Register