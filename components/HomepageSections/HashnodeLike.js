import React from 'react'
import Link from 'next/link'

const HashnodeLike = () => {
    return (
        <main className='flex flex-col justify-center items-center rounded-3xl p-10 my-32 bg-blue-100 h-96 relative'>
            <h1 className='text-sm z-40 font-bold text-blue-400 uppercase'>Join Now our amazing community</h1>
            <h2 className='z-20 max-w-2xl text-2xl lg:text-4xl font-bold tracking-tight mt-6 text-center'>Sail through the endless ocean of tech resources on YouTube.</h2>

            <img src='https://cdn.discordapp.com/attachments/987256512118399026/991336432541110292/CodiSource_5.png' className='absolute opacity-70 h-16 lg:h-60 left-2 lg:left-10 top-2 lg:top-10' />
            <img src='https://cdn.discordapp.com/attachments/987256512118399026/991335953413185576/CodiSource_4.png' className='absolute h-20 lg:h-60 right-2 bottom-2 lg:right-10 opacity-60 lg:bottom-10' />

            <Link href="/auth/register">
                <button className="mt-8 bg-blue-400 text-white btn btn-ghost btn-wide hover:border-blue-500 hover:bg-blue-200">
                    Join Now
                </button>
            </Link>
        </main>
    )
}

export default HashnodeLike