import React from 'react'

const CourseCard = ({ data }) => {

    const { name, channel, thumbnail, image } = data;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={thumbnail} alt="Shoes" /></figure>
            <div className="card-body p-6">
                <h2 className="card-title font-bold">{name}</h2>
                <div className='flex items-center gap-2'>
                    <img src={image} className="h-10 border rounded-full" />
                    <h1 className='font-semibold'>{channel}</h1>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-ghost border border-red-200 hover:bg-red-50">Enroll</button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard