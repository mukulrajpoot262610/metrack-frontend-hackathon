import React from 'react'

const CourseDetail = ({ course }) => {

    console.log(course)

    return (
        <div className='min-h-screen flex-col flex items-start justify-center pb-10'>
            <div className='flex w-full'>
                <div className='w-3/4'>
                    <div className='video-container'>
                        <iframe src={course?.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <h1 className='font-bold text-xl'>{course?.name}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <img src={course?.channelImage} className="h-12 w-12 rounded-full" />
                        <div className='justify-between items-center flex w-full'>
                            <h1 className='font-medium text-gray-500 text-lg'>{course?.channel}</h1>
                            <button className='btn btn-sm btn-ghost border border-blue-300 hover:bg-blue-200'>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-gray-200 w-full my-4 mb-0' />

            <div className='px-4 h-16 flex justify-between items-center w-full'>
                <div className='flex justify-center items-center gap-6'>
                    <h3 className='font-bold border-b border-blue-300 cursor-pointer text-sm uppercase bg-blue-50 text-blue-300'>About</h3>
                    <h3 className={`font-bold  border-blue-300 cursor-pointer hover:border-b text-sm uppercase`}>Discussions</h3>
                    <h3 className={`font-bold border-blue-300 cursor-pointer hover:border-b text-sm uppercase`}>Projects & Resources</h3>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <button className='btn btn-sm btn-ghost border border-blue-300 hover:bg-blue-200'>Enroll Now</button>
                    <button className='btn btn-sm btn-ghost border border-blue-300 hover:bg-blue-200'>Save for later</button>
                    <button className='btn btn-sm btn-ghost border border-blue-300 hover:bg-blue-200'>Share</button>
                </div>
            </div>

            <hr className='border-gray-200 w-full my-4 mt-0' />

            <div className='p-6'>
                <h2 className='font-bold'>About this Course</h2>
                <p>Become the singer you’ve always wanted to be with the vocal coach to the stars—Valerie Morehouse.</p>
            </div>
        </div>
    )
}

export default CourseDetail