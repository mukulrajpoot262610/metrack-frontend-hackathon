import { useEffect, useState, createContext } from "react";

export const notifyContext = createContext(null);

export function NotifyContextProvider({ children }) {
  const [error, setError] = useState("");
  const [previousInterval, setPreviousInterval] = useState(null);
  const [errors, setErrors] = useState([]);
  // notify handler
  const notify = (msg, type = "default") => {
    setErrors([...errors, msg]);
  };
  // limit error array to 3
  useEffect(() => {
    if (errors.length > 3) {
      let errTemp = errors;
      errTemp.shift();
      setErrors([...errTemp]);
    }
    // set error
    setError(errors[errors.length - 1]);
    // clear previous interval
    if (previousInterval) {
      clearInterval(previousInterval);
    }
    // clear error after a fixed interval
    const interval = setInterval(() => {
      // clear previous interval
      setError("");
    }, 10000);
    // set interval value
    setPreviousInterval(interval);
  }, [errors]);

  return (
    <>
      <notifyContext.Provider value={{ notify, error }}>
        {children}
      </notifyContext.Provider>
    </>
  );
}
