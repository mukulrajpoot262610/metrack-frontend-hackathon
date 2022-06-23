import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { verifyEmail } from "../../services/api";

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
      <div className="flex items-center justify-center h-80">
        <p>Email not verified !!</p>
      </div>
    );
  }

  if (!loading && verified) {
    return (
      <div className="flex items-center justify-center h-80">
        Email verified
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-80">
      Verifying your email
    </div>
  );
}
