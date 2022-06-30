import React, { useState, useEffect, useRef, createContext } from "react";
import { PreviewBtn, FormattingBtns } from "./btns";
import ParseMarkdown from "markdown/ParseMarkdown";
import { HiOutlineLink } from "react-icons/hi";
import LinkHeader from "editor/components/LinkHeader";
import { useSelector } from "react-redux";

export const EditorStateContext = createContext(null);

export default function Editor({ data, setData }) {
  const { isAuth } = useSelector((state) => state.auth);
  const [count, setCount] = useState(0);
  const [preview, setPreview] = useState(false);
  const [showLinkHeader, setShowLinkHeader] = useState(false);
  const [link, setLink] = useState("https://");
  const [updateSelection, setUpdateSelection] = useState(false);
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef) return;
    const editor = editorRef.current;
    setCount(editor.textLength);
  }, [data]);

  useEffect(() => {
    if (!editorRef) return;
    const editor = editorRef.current;
    const { start, end } = updateSelection;
    editor.setSelectionRange(start, end, 0);
  }, [updateSelection]);

  return (
    <EditorStateContext.Provider
      value={{
        updateSelection,
        setUpdateSelection,
      }}
    >
      <div className="relative rounded-lg bg-base-200" id="editor">
        {isAuth && (
          <section className="relative flex items-center justify-between p-2 text-xs">
            <section id="toolbar" className="flex gap-x-1">
              {!preview ? (
                <>
                  <FormattingBtns
                    element={editorRef.current}
                    data={data}
                    setData={setData}
                  />
                  <div className="">
                    <div className="tooltip" data-tip="add link">
                      <button
                        className="btn btn-sm btn-ghost bg-base-300 border-base-content border-opacity-10 no-animation"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowLinkHeader(true);
                        }}
                      >
                        <HiOutlineLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </section>
            <div id="infobar" className="flex items-center justify-end gap-x-1">
              <span className="px-2">{count}</span>
              <PreviewBtn preview={preview} setPreview={setPreview} />
            </div>
            {showLinkHeader ? (
              <LinkHeader
                element={editorRef.current}
                data={data}
                setData={setData}
                link={link}
                setLink={setLink}
                setShowLinkHeader={setShowLinkHeader}
                setUpdateSelection={setUpdateSelection}
              />
            ) : null}
          </section>
        )}

        <section
          id="preview"
          className={`${preview ? "" : "hidden"} px-4 min-h-80`}
        >
          <ParseMarkdown>{data && data}</ParseMarkdown>
        </section>
        <section id="content" className="px-2">
          <textarea
            ref={editorRef}
            name=""
            className={`textarea w-full h-32 ${preview ? "hidden" : ""}`}
            id=""
            value={data}
            disabled={!isAuth}
            onChange={(e) => {
              if (e.keyCode == 13) {
                e.preventDefault();
                return false;
              }
              setData(e.target.value);
            }}
            cols="30"
            rows="10"
          ></textarea>
        </section>
        <section className="flex justify-end px-2" id="statusbar">
          <span className="px-2 text-xs"></span>
          <span className="px-2 text-xs"></span>
        </section>
      </div>
    </EditorStateContext.Provider>
  );
}
