import { useState, createContext } from "react";

export const AuthContext = createContext(false);

export function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
