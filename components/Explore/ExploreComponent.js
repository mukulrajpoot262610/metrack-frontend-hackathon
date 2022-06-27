import React from 'react'
import CourseContent from '../Common/CourseContent'

import { SiHtml5, SiJavascript, SiReact, SiAngular, SiDjango, SiFlutter } from 'react-icons/si'
import { FaVuejs, FaNodeJs, FaPython } from 'react-icons/fa'

const COURSES = [
    {
        id: 0,
        name: 'HTML/CSS',
        logo: <SiHtml5 className="text-6xl sm:text-9xl z-30 text-blue-400" />,
    },
    {
        id: 1,
        name: 'Javascript',
        logo: <SiJavascript className="text-6xl sm:text-9xl z-30 text-blue-400" />,
    },
    {
        id: 2,
        name: 'React',
        logo: <SiReact className="text-6xl sm:text-9xl z-30 text-blue-400" />,
    },
    {
        id: 3,
        name: 'Vue.js',
        logo: <FaVuejs className="text-6xl sm:text-9xl z-30 text-blue-400" />,
    },
    {
        id: 4,
        name: 'Angular',
        logo: <SiAngular className="text-6xl sm:text-9xl z-30 text-blue-400" />,
    },
    {
        id: 5,
        name: 'Node.js',
        logo: <FaNodeJs className="text-6xl sm:text-9xl z-30 text-blue-400" />,
    },
    {
        id: 6,
        name: 'Python',
        logo: <FaPython className="text-6xl sm:text-9xl z-30 text-blue-400" />,
    },
    {
        id: 7,
        name: 'Django',
        logo: <SiDjango className="text-6xl sm:text-9xl z-30 text-blue-400" />,
    },
    {
        id: 8,
        name: 'Flutter',
        logo: <SiFlutter className="text-6xl sm:text-9xl z-30 text-blue-400" />,
    },
]




const ExploreComponent = ({ response, selected }) => {
    return (
        <section className="col-span-12 lg:col-span-9 mt-4">
            <div className="w-full space-y-4 rounded-xl">
                <div className="relative flex justify-end items-center overflow-hidden bg-blue-50 rounded-3xl gap-4 p-8">
                    <h1 className="font-black text-blue-200 uppercase text-4xl sm:text-7xl lg:text-8xl absolute left-8">
                        {COURSES[selected].name}
                    </h1>
                    {COURSES[selected].logo}
                </div>

                {/* <div className="flex items-center justify-end p-3">
                    <p className="text-xs font-bold text-gray-400 uppercase">Sort by:</p>
                    <select className="w-64 ml-4 select select-sm select-bordered">
                        <option disabled selected>
                            Who shot first?
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div> */}
                <hr />

                <CourseContent courses={response} />

            </div>
        </section>
    )
}

export default ExploreComponent