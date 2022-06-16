import React from 'react'

const Header = () => {
    return (
        <header className='relative mt-20 lg:gap-10 w-full h-screen flex justify-center items-center flex-col lg:flex-row'>
            <div className='w-full lg:w-1/2 h-full flex justify-center flex-col items-start'>
                <h1 className='text-3xl md:text-6xl z-20 font-bold max-w-5xl'>We increase your learning experience by <span className='font-extrabold text-transparent text-6xl md:text-9xl bg-clip-text bg-gradient-to-r from-[#ECB3A0] to-[#F9C9BD]'>100X</span></h1>
                <p className='mt-2 z-20 text-sm md:text-lg max-w-2xl text-gray-400'>We all know YouTube is great place to learn anything, but it did not provide complete learning experience as YouTube is made for enternatainment.</p>
                <button className='btn mt-8 lg:mb-16'>Join Now</button>
            </div>
            <div className='w-full md:w-11/12 lg:w-1/2 h-full relative p-2'>
                <img src='/overlay/react.webp' className='absolute h-40 -top-10 md:top-0 -left-10 md:-left-20' />
                <img src='/overlay/code.webp' className='absolute h-48 bottom-0 md:bottom-10 -right-10 md:-right-5' />
                <img src='/overlay/django.webp' className='absolute h-40 bottom-0 md:bottom-20 -left-10 md:-left-16' />
                <div className='w-full h-5/6 rounded-3xl bg-gray-50'>
                    <img src='/overlay/46.jpg' className='h-full w-full object-cover rounded-3xl' />
                </div>

            </div>
        </header>
    )
}

export default Header