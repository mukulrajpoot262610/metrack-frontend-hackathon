import React from "react";
import Link from "next/link";

const VerifyEmail = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-20 pb-10">
      <div className="w-full p-6 lg:w-1/3">
        <h1 className="mb-10 text-3xl font-bold text-center uppercase">
          Check Your Mail
        </h1>
        <p className="my-4 text-center">
          We have sent a verification link to your email{" "}
        </p>

        <p className="my-4 text-center">
          If you have not received the verification link please check your
          &apos;Spam&apos; or &apos;Junk&apos; folder. Still don&apos;t see it?{" "}
          <br />{" "}
          <span className="font-bold text-blue-400 cursor-pointer hover:underline">
            Resend the verification link
          </span>
          .
        </p>

        <p className="text-center">
          Wrong email address?{" "}
          <span className="font-bold text-blue-400 cursor-pointer hover:underline">
            Change email{" "}
          </span>
        </p>

        <div className="flex items-center justify-center mt-6 ">
          <Link href="/auth">
            <button className="border border-blue-200 btn btn-ghost bg-blue-50 btn-wide hover:bg-blue-200">
              Go To Login
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden h-full lg:w-2/3">
        <div className="relative flex justify-center h-full overflow-hidden rounded-3xl bg-blue-50">
          <h1 className="absolute font-black text-blue-200 uppercase text-8xl top-12">
            Verification
          </h1>
          <img
            alt="email"
            src="/email.png"
            className="z-20 object-cover object-top w-10/12 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
