import React from 'react'

const Explore = () => {
    return (
        <div className='min-h-screen flex items-start justify-center gap-10 pt-20 pb-10'>
            <div className='w-1/5 p-2 border-r'>
                <h2 className='font-semibold my-1 hover:bg-red-50 p-2 rounded-xl px-4 cursor-pointer'>All Classess</h2>
                <h2 className='font-semibold my-1 hover:bg-red-50 p-2 rounded-xl px-4 cursor-pointer'>Trending</h2>
                <h3 className='text-gray-400 uppercase font-bold text-xs mt-4'>Technologies</h3>
                <hr className='mb-4' />
                <h2 className='font-semibold my-1 hover:bg-red-50 p-2 rounded-xl px-4 cursor-pointer'>React</h2>
                <h2 className='font-semibold my-1 hover:bg-red-50 p-2 rounded-xl px-4 cursor-pointer'>Angular</h2>
                <h2 className='font-semibold my-1 hover:bg-red-50 p-2 rounded-xl px-4 cursor-pointer'>Vue</h2>
                <h2 className='font-semibold my-1 hover:bg-red-50 p-2 rounded-xl px-4 cursor-pointer'>Flutter</h2>
                <h2 className='font-semibold my-1 hover:bg-red-50 p-2 rounded-xl px-4 cursor-pointer'>Nodejs</h2>
                <h2 className='font-semibold my-1 hover:bg-red-50 p-2 rounded-xl px-4 cursor-pointer'>Django</h2>
            </div>
            <div className='w-4/5'>
                <div className='bg-red-50 h-96 rounded-3xl relative flex justify-end overflow-hidden'>
                    <h1 className='text-red-200 font-black text-9xl left-20 top-1/2 -translate-y-1/2 absolute uppercase'>React</h1>
                    <img src="/hero_2.svg" className='w-1/2' />
                </div>

                <div className='p-3 flex items-center justify-end'>
                    <p className='uppercase text-gray-400 text-xs font-bold'>Sort by:</p>
                    <select className="select select-sm select-bordered w-64 ml-4">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Explore