import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed h-16 top-0 w-10/12 left-1/2 -translate-x-1/2  z-50 bg-white flex justify-between items-center'>
            <div>
                <h1 className='text-xl font-bold'><span className='text-[#ECB3A0]'>100</span>Tube</h1>
            </div>
            <div className='flex items-center gap-4'>
                <p className='font-bold btn btn-ghost hover:bg-red-50'>Login</p>
                <button className='btn font-bold btn-ghost border border-red-300 hover:bg-red-50'>Resigter</button>
            </div>
        </nav>
    )
}

export default Navbar