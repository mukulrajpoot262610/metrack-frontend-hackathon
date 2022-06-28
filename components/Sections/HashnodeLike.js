import React from 'react'
import Link from 'next/link'

const HashnodeLike = () => {
    return (
        <main className='flex flex-col justify-center items-center rounded-3xl p-10 my-32 bg-blue-100 h-96'>
            <h1 className='text-sm z-40 font-bold text-blue-400 uppercase'>Join Now our amazing community</h1>
            <h2 className='max-w-2xl text-2xl lg:text-4xl font-bold tracking-tight mt-6 text-center'>Sail through the endless ocean of tech resources on YouTube.</h2>

            <Link href="/auth/register">
                <button className="mt-8 bg-blue-400 text-white btn btn-ghost btn-wide hover:border-blue-500 hover:bg-blue-200">
                    Join Now
                </button>
            </Link>
        </main>
    )
}

export default HashnodeLike