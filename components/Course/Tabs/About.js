import React from 'react'
import { BsYoutube } from 'react-icons/bs'

const About = ({ course }) => {
    return (
        <div className="flex flex-col w-full mx-auto">
            <section className="my-4 text-accent-content">
                <p className="font-bold">About the Channel</p>
                <p className="text-sm mt-1">Watch the video, ask question in discussion panel, share your learning by building project.</p>
                <div className='flex items-center gap-2 mt-3'>
                    <img src={course?.channelImage} className="rounded-full" />
                    <h1 className='my-2 font-bold text-3xl'>{course?.channel}</h1>
                </div>

                <p className='mt-2'>{course?.aboutChannel}</p>

                <a href={`https://youtube.com/${course?.channel}`} target="_blan">
                    <button className='btn flex items-center gap-2 mt-4 w-fit'><BsYoutube className='text-lg' />Visit Channel</button>
                </a>
            </section>
        </div>
    )
}

export default About