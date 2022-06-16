import React from 'react'

const NotFoundPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center relative overflow-hidden'>
            <h1 className='text-red-50 font-black text-9xl md:text-10xl absolute -z-10'>404</h1>
            <img src='/404.svg' className='w-full md:w-1/2' />
        </div>
    )
}

export default NotFoundPage