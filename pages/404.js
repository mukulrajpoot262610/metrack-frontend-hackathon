import React from 'react'
import Link from 'next/link'

const NotFoundPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center relative overflow-hidden flex-col'>
            <h1 className='text-blue-100 font-black text-9xl lg:text-10xl absolute -z-10'>404</h1>
            <h1 className='text-blue-500 font-black text-4xl lg:text-9xl'>Not Found</h1>
            <Link href={'/'}>
                <button className='absolute bottom-10 btn btn-wide mt-10 bg-blue-500 hover:bg-blue-400 border-0'>Go to Home</button>
            </Link>
        </div>
    )
}

export default NotFoundPage