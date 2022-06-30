import { createContext, useState } from "react";

export const EditorStateContext = createContext(null);

export function EditorStateContextProvider({ children }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  return (
    <EditorStateContext.Provider value={{ start, end, setStart, setEnd }}>
      {children}
    </EditorStateContext.Provider>
  );
}
