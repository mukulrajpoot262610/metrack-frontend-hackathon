import React from 'react'
import { BsYoutube } from 'react-icons/bs'

const Video = ({ course }) => {
    return (
        <div className="flex flex-col w-full mx-auto">
            <section className="my-4 text-accent-content">
                <p className="font-bold">Video</p>
                <p className="text-sm mt-1">Watch the video, ask question in discussion panel, share your learning by building project.</p>
            </section>

            <div className='video-container'>
                <iframe src={course.video} title="Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <a href={course.video} target="_blan">
                <button className='btn flex items-center gap-2 mt-4 w-fit'><BsYoutube className='text-lg' />Watch on YouTube</button>
            </a>

            <section className="my-4 text-accent-content">
                <p className="font-bold">Introduction</p>
                <p className="text-sm mt-1">DevProjects, we love alpacas! Its our mascot, and wed love for you to have your own alpaca profile photo. With that said, this project is not just about alpacas. Allowing users to generate and download avatars are common in many interactive websites. In this project, youll learn how to create an image generator website that allows users to generate, combine, and download images.</p>
            </section>

        </div>
    )
}

export default Video