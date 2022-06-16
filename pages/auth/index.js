import React from 'react'

const Login = () => {
    return (
        <div className='h-screen flex items-center justify-center gap-20 pt-20 pb-10'>
            <div className='w-1/3'>
                <h1 className='font-bold text-center text-xl uppercase'>Log in to 100Tube</h1>

                <button className='btn btn-ghost shadow-lg mt-10 w-full'>Continue with Google</button>
                <p className='text-center text-gray-400 font-semibold my-4'>or continue with Email</p>

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
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {/* <label className="label">
                            <span className="label-text-alt">Alt label</span>
                        </label> */}
                    </div>
                    <button className='btn btn-ghost bg-red-100 mt-6 hover:bg-red-300 w-full'>Log In </button>
                    <p className='mt-4 text-xs text-center'>Don’t have an account?</p>
                </form>
            </div>
            <div className='w-2/3 h-full'>
                <div className='rounded-3xl bg-red-50 flex justify-center items-center h-full overflow-hidden'>
                    <img src='/hero.svg' className='object-cover rounded-3xl w-10/12' />
                </div>
            </div>
        </div>
    )
}

export default Login