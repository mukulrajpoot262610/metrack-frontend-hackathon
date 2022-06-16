import React from 'react'
import Link from 'next/dist/client/link'

const Navbar = () => {
    return (
        <nav className='fixed h-16 top-0 w-11/12 lg:w-10/12 left-1/2 -translate-x-1/2  z-50 bg-white flex justify-between items-center'>
            <div>
                <Link href='/'>
                    <h1 className='cursor-pointer text-xl font-bold'><span className='text-[#ECB3A0]'>100</span>Tube</h1>
                </Link>
            </div>
            <div className='flex items-center gap-4'>
                <Link href="/auth">
                    <p className='font-bold btn btn-ghost hover:bg-red-50'>Login</p>
                </Link>
                <Link href="/auth/register">
                    <button className='btn font-bold btn-ghost border border-red-300 hover:bg-red-50'>Resigter</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar