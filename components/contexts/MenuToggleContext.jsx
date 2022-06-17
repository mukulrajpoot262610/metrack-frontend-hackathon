import { useState, createContext } from "react";

export const MenuToggleContext = createContext(true);

export function MenuToggleContextProvider({ children }) {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <MenuToggleContext.Provider value={{ showNav, setShowNav }}>
        {children}
      </MenuToggleContext.Provider>
    </>
  );
}
