import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function UseRedirectOnAuth(route = "/", reverse = false) {
  // If reverse is true: redirects if user is loggedIn
  // If reverse is false: redirects if user is not loggedIn
  const { isAuth, user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (reverse) {
      isAuth ? router?.push(route) : null;
    } else {
      !isAuth ? router?.push(route) : null;
    }
  }, [isAuth]);

  return { isAuth, user };
}
