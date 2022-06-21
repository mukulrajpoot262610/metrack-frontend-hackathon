import React from "react";

const Header = () => {
  return (
    <header className="relative flex flex-col items-center justify-center w-full h-screen lg:gap-20 lg:flex-row">
      <div className="flex flex-col items-start justify-center w-full h-full lg:w-1/2">
        <h1 className="z-20 max-w-5xl text-4xl font-bold md:text-6xl">
          We increase your learning experience by{" "}
          <span className="text-6xl font-extrabold text-transparent md:text-9xl bg-clip-text bg-gradient-to-r from-red-200 to-red-300">
            100X
          </span>
        </h1>
        <p className="z-20 max-w-2xl mt-2 text-sm text-gray-400 md:text-lg">
          YouTube is great place to learn anything, but it does not offer a
          complete learning experience since it is designed for entertaining.
        </p>
        <p className="z-20 max-w-2xl mt-2 text-sm text-gray-400 md:text-lg">
          So, We combined amazing YouTube content with complete learning
          experience.
        </p>
        <button className="mt-8 bg-red-200 btn lg:mb-16 btn-ghost btn-wide hover:bg-red-100">
          Join Now
        </button>
      </div>
      <div className="relative w-full h-full p-2 md:w-11/12 lg:w-1/2">
        <img
          src="/overlay/react.webp"
          className="absolute h-40 -top-10 md:top-0 -left-10 md:-left-20"
        />
        <img
          src="/overlay/code.webp"
          className="absolute bottom-0 h-48 md:bottom-10 -right-10 md:-right-5"
        />
        <img
          src="/overlay/django.webp"
          className="absolute bottom-0 h-40 md:bottom-20 -left-10 md:-left-16"
        />
        <div className="w-full h-5/6 rounded-3xl bg-red-50">
          <img
            src="/hero.svg"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
