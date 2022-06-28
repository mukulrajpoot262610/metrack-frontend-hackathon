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
                <p className="text-sm mt-1">MeTrack is a website where you can find top-rated tech videos and tutorials in the form of a course.</p>
                <p className="text-sm mt-3">
                    This is how we solve this problem for our fellow developers who are learning to code.</p>

                <ul className='list-disc ml-8 text-sm mt-3 flex flex-col gap-2'>
                    <li>Hand-picked youtube tutorials for developers.</li>
                    <li>**Peer support**: *Realtime discussion panel *to ask your doubts.</li>
                    <li>See the projects others have built by following the tutorial.</li>
                    <li>**Building in public**: Upload your projects and get feedback from others.</li>
                    <li>**Proof of Work**: Show your profile to potential clients and recruiters to grab the opportunity.</li>
                </ul>
                <p className="text-sm mt-3">
                    In other words,

                    MeTrack helps you sail through the endless ocean of tech resources on YouTube. </p>
            </section>

        </div>
    )
}

export default Video