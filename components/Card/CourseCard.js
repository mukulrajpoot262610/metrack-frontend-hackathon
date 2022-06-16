import React from 'react'

const CourseCard = ({ data }) => {

    const { name, channel, thumbnail, image, respect } = data;

    return (
        <div className="card max-w-sm bg-base-100 shadow-xl cursor-pointer hover:-translate-y-3 duration-200">
            <figure><img src={thumbnail} alt="Shoes" /></figure>
            <div className="card-body p-6">
                <h2 className="card-title font-bold">{name}</h2>
                <div className='flex items-center gap-2'>
                    <img src={image} className="h-10 border rounded-full" />
                    <h1 className='font-medium text-gray-500'>{channel}</h1>
                </div>
                <div className="card-actions flex justify-between">
                    <div className='flex items-center gap-1'>
                        <img src='/like.png' className='h-10' />
                        <p className='font-semibold'>{respect}</p>
                    </div>
                    <button className="btn btn-ghost border border-red-200 hover:bg-red-50">Enroll</button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard