import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <main className="flex flex-col items-center justify-center p-10 rounded-3xl">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center">
            <h1 className="mb-4 text-3xl font-bold text-center lg:text-5xl">
              Our Team 😎
            </h1>
            <p className="text-lg font-medium text-center">
              This platform is built for linode-hashnode hackathon 21 JUN - 30
              JUN by these crazy hackers.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center -m-4">
            <div className="w-full p-4 lg:w-1/4">
              <div className="flex flex-col items-center h-full text-center">
                <img
                  alt="mukul-rajpoot"
                  className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                  src="https://avatars.githubusercontent.com/u/73209159?v=4"
                />
                <div className="w-full">
                  <h2 className="text-lg font-medium title-font textWhite">
                    Mukul Rajpoot
                  </h2>
                  <h3 className="mb-3 text-gray-500">Full-Stack Developer</h3>
                  <p className="mb-4">
                    Friendly neighborhood developer. Helping people turn their
                    ideas into sites & apps that work.
                  </p>
                  <span className="flex flex-wrap items-center justify-center gap-2 text-xl">
                    <a
                      href="https://github.com/mukulrajpoot262610"
                      target="_blan"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mukul-rajpoot-262610/"
                      target="_blan"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a href="https://twitter.com/mukul_eth" target="_blan">
                      <FaTwitter />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/4">
              <div className="flex flex-col items-center h-full text-center">
                <img
                  alt="amit-kumar"
                  className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                  src="https://cdn.discordapp.com/attachments/987256512118399026/991299914699112538/CodiSource_2.png"
                />
                <div className="w-full">
                  <h2 className="text-lg font-medium title-font textWhite">
                    Amit
                  </h2>
                  <h3 className="mb-3 text-gray-500">Full-Stack Developer</h3>
                  <p className="mb-4">
                    I built more than 10 websites and web apps, most of which
                    are live, serving thousands of people on the internet.
                  </p>
                  <span className="flex flex-wrap items-center justify-center gap-2 text-xl">
                    <a href="https://github.com/alsoamit" target="_blan">
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alsoamit/"
                      target="_blan"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a href="https://twitter.com/_alsoamit_" target="_blan">
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
  );
};

export default Team;
