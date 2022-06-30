import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "redux/authSlice";

export function useLoadingWithRefresh() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/refresh`,
          {
            withCredentials: true,
          }
        );
        dispatch(setAuth(data));
        setLoading(false);
      } catch (err) {
        console.warn(err.message);
        setLoading(false);
      }
    })();
  }, [dispatch]);

  return { loading };
}
