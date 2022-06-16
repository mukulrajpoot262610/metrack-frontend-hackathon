import React from 'react'
import Link from 'next/link'

const VerifyEmail = () => {
    return (
        <div className='h-screen flex items-center justify-center gap-20 pt-20 pb-10'>
            <div className='w-full lg:w-1/3 p-6'>
                <h1 className='font-bold text-center text-3xl uppercase mb-10'>Check Your Mail</h1>
                <p className='my-4 text-center'>We have sent a verification link to <span className='font-bold'>mukul@gmail.com</span>.</p>

                <p className='my-4 text-center'>If you have not received the verification link
                    please check your &apos;Spam&apos; or &apos;Junk&apos; folder.
                    Still don&apos;t see it? <br /> <span className='font-bold text-blue-400 hover:underline cursor-pointer'>Resend the verification link</span>.</p>

                <p className='text-center'>Wrong email address? <span className='font-bold text-blue-400 hover:underline cursor-pointer'>Change email </span></p>

                <div className='flex justify-center items-center mt-6 '>
                    <button className='btn btn-ghost bg-red-50 btn-wide hover:bg-red-200 border border-red-200'>Go To Login</button>
                </div>
            </div>
            <div className='hidden lg:block lg:w-2/3 h-full'>
                <div className='rounded-3xl bg-red-50 flex justify-center h-full overflow-hidden relative'>
                    <h1 className='text-red-200 font-black text-8xl absolute top-12 uppercase'>Verification</h1>
                    <img src='/email.png' className='object-cover object-top mt-20 rounded-3xl w-10/12 z-20' />
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail