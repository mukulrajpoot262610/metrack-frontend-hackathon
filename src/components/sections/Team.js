import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaStackOverflow, FaGlobe, FaFacebookF, FaMediumM, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa'

const Team = () => {
    return (
        <main className='flex flex-col justify-center items-center rounded-3xl p-10'>
            <section className="body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-3xl mb-4 lg:text-5xl font-bold text-center">
                            Our Team 😎
                        </h1>
                        <p className="font-medium text-lg text-center">
                            This platform is built for linode-hashnode hackathon 1 JUN - 30 JUN by these crazy hackers.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center -m-4">
                        <div className="p-4 lg:w-1/4 w-full">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/73209159?v=4" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg textWhite">Mukul Rajpoot</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    <p className="mb-4">Friendly neighborhood developer.
                                        Helping people turn their ideas into sites & apps that work.</p>
                                    <span className="flex flex-wrap justify-center items-center gap-2 text-xl">
                                        <a href='https://github.com/mukulrajpoot262610' target="_blan">
                                            <FaGithub />
                                        </a>
                                        <a href='https://www.linkedin.com/in/mukul-rajpoot-262610/' target="_blan">
                                            <FaLinkedinIn />
                                        </a>
                                        <a href='https://twitter.com/mukul_eth' target="_blan">
                                            <FaTwitter />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 w-full">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://cdn.discordapp.com/attachments/987256512118399026/991299914699112538/CodiSource_2.png" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg textWhite">Amit</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    <p className="mb-4">I built more than 10 websites and web apps, most of which are live, serving thousands of people on the internet.</p>
                                    <span className="flex flex-wrap justify-center items-center gap-2 text-xl">
                                        <a href='https://github.com/alsoamit' target="_blan">
                                            <FaGithub />
                                        </a>
                                        <a href='https://www.linkedin.com/in/alsoamit/' target="_blan">
                                            <FaLinkedinIn />
                                        </a>
                                        <a href='https://twitter.com/_alsoamit_' target="_blan">
                                            <FaTwitter />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Team