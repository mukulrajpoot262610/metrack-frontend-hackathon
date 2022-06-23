import React from 'react'

const CourseDetailPage = () => {
    return (
        <div className='min-h-screen flex-col flex items-start justify-center pt-20 pb-10'>

            <div className='flex w-full'>
                <div className='w-3/4'>
                    <div className='video-container'>
                        <iframe src='https://www.youtube.com/embed/3HNyXCPDQ7Q' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <h1 className='font-bold text-xl'>Build and Deploy a Fullstack Responsive Portfolio Website | ULTIMATE Step By Step Tutorial 2022</h1>
                    <div className='flex items-center gap-2'>
                        <img src='https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s48-c-k-c0x00ffffff-no-rj' className="h-10 border rounded-full" />
                        <div className='justify-between items-center flex w-full'>
                            <h1 className='font-medium text-gray-500'>Javascript Mastery</h1>
                            <button className='btn btn-sm btn-ghost border border-red-300 hover:bg-red-200'>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-gray-200 w-full my-4 mb-0' />

            <div className='px-4 h-16 flex justify-between items-center w-full'>
                <div className='flex justify-center items-center gap-6'>
                    <h3 className='font-bold border-b border-red-300 cursor-pointer text-sm uppercase bg-red-50 text-red-300'>About</h3>
                    <h3 className={`font-bold  border-red-300 cursor-pointer hover:border-b text-sm uppercase`}>Discussions</h3>
                    <h3 className={`font-bold border-red-300 cursor-pointer hover:border-b text-sm uppercase`}>Projects & Resources</h3>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <button className='btn btn-sm btn-ghost border border-red-300 hover:bg-red-200'>Enroll Now</button>
                    <button className='btn btn-sm btn-ghost border border-red-300 hover:bg-red-200'>Save for later</button>
                    <button className='btn btn-sm btn-ghost border border-red-300 hover:bg-red-200'>Share</button>
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

export default CourseDetailPage