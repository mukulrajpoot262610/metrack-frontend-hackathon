import React from 'react'
import CourseCard from '../Card/CourseCard'

const COURSES = [
    {
        id: 0,
        name: 'Build and Deploy a Fully Responsive Modern UI/UX Website in React JS',
        channel: 'Javascript Mastery',
        description: 'This video is perfect for you if you want to learn how to transform a Figma design into a fully functioning website, improve your CSS skills, and create modern and responsive #ReactJS websites.',
        thumbnail: 'https://img.youtube.com/vi/LMagNcngvcU/maxresdefault.jpg',
        video: 'https://www.youtube.com/watch?v=LMagNcngvcU',
        image: 'https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj-mo',
        respect: 0,
    },
    {
        id: 1,
        name: 'Build and Deploy a Modern Full Stack Social Media App | FULL COURSE',
        channel: 'Javascript Mastery',
        description: 'With all advanced Social Media features, such as Google Authentication, create, edit, delete and save posts, like and comment on other people\'s posts, search and filter images and much more, ShareMe is the best Image Sharing Social Media App that you can currently find on YouTube and on the entire internet.You\'ll also learn how to work with Sanity. Sanity.io is the platform for structured content. It allows you to manage text, images, and all other data using APIs.',
        thumbnail: 'https://img.youtube.com/vi/1RHDhtbqo94/maxresdefault.jpg',
        video: 'https://www.youtube.com/watch?v=1RHDhtbqo94',
        image: 'https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj-mo',
        respect: 0
    },
]

const Courses = () => {
    return (
        <div className='relative mt-20 gap-4 w-full min-h-screen flex justify-center items-center flex-col'>
            <h1 className='text-5xl font-bold text-center'>Trending courses of the month</h1>
            <p className='font-medium text-lg text-center'>These are the selected courses from YouTube to build your focus on learning rather than finding courses.</p>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    COURSES.map(e => <CourseCard key={e.id} data={e} />)
                }
            </div>
            <button className='btn btn-ghost bg-red-200 mt-10 hover:bg-red-100 shadow-lg'>View More</button>
        </div>
    )
}

export default Courses