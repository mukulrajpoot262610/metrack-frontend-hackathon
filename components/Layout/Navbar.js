import React from 'react'
import Link from 'next/dist/client/link'
import { useSelector } from 'react-redux'
import { FaAngleDown } from 'react-icons/fa'
import { MdOutlineDashboard } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'

const Navbar = () => {

    const { isAuth } = useSelector(state => state.auth)

    return (
        <nav className='fixed h-16 top-0 z-50 bg-white w-full flex justify-between items-center'>
            <div className='flex justify-between items-center mx-auto w-11/12 lg:w-10/12  '>
                <div>
                    <Link href='/'>
                        <h1 className='cursor-pointer text-xl font-bold'><span className='text-[#ECB3A0]'>100</span>Tube</h1>
                    </Link>
                </div>
                {
                    !isAuth ? <div className='flex items-center gap-4'>
                        <Link href="/">
                            <button className='btn font-bold btn-ghost border border-red-300 hover:bg-red-50 btn-sm text-xs'>Profile</button>
                        </Link>
                        <div className='dropdown dropdown-hover dropdown-end'>
                            <div tabIndex="0" className='flex justify-center items-center gap-2'>
                                <div className="avatar cursor-pointer">
                                    <div className="w-10 rounded-full ring-1 ring-red-400 ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=47449" />
                                    </div>
                                </div>
                                <FaAngleDown className='cursor-pointer' />
                            </div>
                            <ul tabIndex="0" className="dropdown-content menu p-6 shadow-lg bg-white rounded-box w-96 ">
                                <div className='flex gap-4 items-center'>
                                    <div className="avatar cursor-pointer">
                                        <div className="w-20 rounded-full ring-1 ring-red-400 ring-offset-base-100 ring-offset-2">
                                            <img src="https://api.lorem.space/image/face?hash=47449" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold'>Mukul Rajpoot</h2>
                                        <h3 className='font-semibold text-sm'>mukul@gmail.com</h3>
                                    </div>
                                </div>
                                <hr className='my-4' />
                                <li className='text-sm'><a className='hover:bg-red-50 active:bg-red-300'><MdOutlineDashboard className='font-bold text-base' />Dashboard </a></li>
                                <li className='text-sm'><a className='hover:bg-red-50 active:bg-red-300'><TbLogout className='font-bold text-base' />Logout</a></li>
                            </ul>
                        </div>
                    </div> : <div className='flex items-center gap-4'>
                        <Link href="/auth">
                            <p className='font-bold btn btn-ghost hover:bg-red-50'>Login</p>
                        </Link>
                        <Link href="/auth/register">
                            <button className='btn font-bold btn-ghost border border-red-300 hover:bg-red-50'>Resigter</button>
                        </Link>
                    </div>
                }

            </div>
        </nav>
    )
}

export default Navbar