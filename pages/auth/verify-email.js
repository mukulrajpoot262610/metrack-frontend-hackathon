import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { verifyEmail } from "services/api";
import Link from "next/dist/client/link";

export default function VerifyEmailTemplate() {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = router.query;

  useEffect(() => {}, [verified, loading]);

  useEffect(() => {
    if (!params?.token) return;
    (async () => {
      try {
        const res = await verifyEmail(params);
        setVerified(true);
      } catch (err) {
        setVerified(false);
        toast(err?.response?.data?.msg);
      } finally {
        setLoading(false);
      }
    })();
  }, [params]);

  if (!loading && !verified) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
        <img src="/auth/email-not-verified.svg" className="mt-10 h-60" />
        <h1 className="mt-8 text-2xl font-bold">Email NOT Verifed...</h1>

        <p className="my-1 text-center">
          We are Sorry your email is not verified. <br /> You can request again
          to verify email.
        </p>
        <button className="mt-4 border border-blue-300 btn btn-ghost hover:bg-blue-50">
          Request Email Verification
        </button>
      </div>
    );
  }

  if (!loading && verified) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
        <img src="/auth/email-verified.svg" className="mt-10 h-60" />
        <h1 className="mt-8 text-2xl font-bold">Your Email is Verifed...</h1>

        <p className="my-1 text-center">
          Thanks for your patience. <br /> You can Login Now
        </p>
        <Link href="/auth">
          <button className="mt-4 border border-blue-300 btn btn-ghost hover:bg-blue-50">
            Go To Login
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <img src="/auth/email-verifying.svg" className="mt-10 h-60" />
      <h1 className="mt-8 text-2xl font-bold">Verifying your Email...</h1>

      <p className="my-1 text-center">
        Be Patient. <br /> Do not close this window
      </p>
    </div>
  );
}
