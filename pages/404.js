import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <h1 className="absolute font-black text-blue-100 text-9xl lg:text-10xl -z-10">
        404
      </h1>
      <h1 className="text-4xl font-black text-blue-500 lg:text-9xl">
        Not Found
      </h1>
      <Link href={"/"}>
        <button className="absolute mt-10 bg-blue-500 border-0 bottom-10 btn btn-wide hover:bg-blue-400">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
