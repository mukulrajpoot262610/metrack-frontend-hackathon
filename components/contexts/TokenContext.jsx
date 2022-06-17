import { useState, createContext } from "react";

export const tokenContext = createContext(null);

export function TokenContextProvider({ children }) {
  const [token, setToken] = useState(null);

  return (
    <>
      <tokenContext.Provider value={{ token, setToken }}>
        {children}
      </tokenContext.Provider>
    </>
  );
}
