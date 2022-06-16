import React from 'react'

const Header = () => {
    return (
        <header className='relative mt-20 gap-10 w-full h-screen flex justify-center items-center'>
            <div className='w-1/2 h-full flex justify-center flex-col items-start'>
                <h1 className='text-6xl z-20 font-bold max-w-5xl'>We increase your learning experience by <span className='font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-[#ECB3A0] to-[#F9C9BD]'>100X</span></h1>
                <p className='mt-2 z-20 text-lg max-w-2xl text-gray-400'>We all know YouTube is great place to learn anything, but it did not provide complete learning experience as YouTube is made for enternatainment.</p>
                <button className='btn mt-8 mb-16'>Join Now</button>
            </div>
            <div className='w-1/2 h-full relative p-2'>
                <img src='/overlay/react.webp' className='absolute h-40 top-0 -left-20' />
                <img src='/overlay/code.webp' className='absolute h-40 bottom-20 -right-20' />
                <img src='/overlay/django.webp' className='absolute h-40 bottom-20 -left-16' />
                <img src='/overlay/5.png' className='absolute h-40 top-40 -right-20' />
                <div className='w-full h-5/6 rounded-3xl bg-gray-50'>
                    <img src='/overlay/46.jpg' className='h-full object-cover rounded-3xl' />
                </div>

            </div>
            {/* <div className='absolute -z-10 w-40 h-40 bottom-10 rounded-full bg-gradient-to-br from-green to-white left-10'></div>
            <div className='absolute -z-10 w-40 h-40 top-10 right-10 rounded-full bg-gradient-to-br from-yellow to-white'></div> */}
        </header>
    )
}

export default Header