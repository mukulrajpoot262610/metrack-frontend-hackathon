import { HiOutlineEye, HiOutlinePencil } from "react-icons/hi";
import toast from "react-hot-toast";

import {
  addH2,
  addH3,
  formatBold,
  formatItalic,
  formatInlineCode,
} from "./actions";
import { useContext } from "react";
import { EditorStateContext } from ".";

export const PreviewBtn = ({ preview, setPreview }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setPreview((preview) => !preview);
  };
  return (
    <button
      onClick={handleClick}
      className="lowercase btn btn-sm border-base-content border-opacity-10 btn-square btn-ghost bg-base-300"
    >
      {!preview ? (
        <HiOutlineEye className="w-5 h-5 text-base-content" />
      ) : (
        <HiOutlinePencil className="w-5 h-5 text-base-content" />
      )}
    </button>
  );
};

export function FormattingBtns({ element, data, setData }) {
  const { setUpdateSelection } = useContext(EditorStateContext);

  const Button = ({ tooltip, onClick, children }) => {
    const handleClick = (e) => {
      e.preventDefault();
      if (!data || data === " " || data === "\n" || data === "\n\n") {
        return toast.error("no word selected");
      }
      onClick();
    };
    return (
      <div className="tooltip" data-tip={tooltip}>
        <button
          className="border btn btn-sm btn-ghost no-animation bg-base-300 border-base-content border-opacity-10"
          onClick={handleClick}
        >
          {children}
        </button>
      </div>
    );
  };

  return (
    <>
      <Button
        tooltip="heading level 2"
        onClick={() => addH2(element, data, setData, setUpdateSelection)}
      >
        H2
      </Button>
      <Button
        tooltip="heading level 3"
        onClick={() => addH3(element, data, setData, setUpdateSelection)}
      >
        H3
      </Button>
      <Button
        tooltip="bold"
        onClick={() => {
          formatBold(element, data, setData, setUpdateSelection);
        }}
      >
        <strong className="bold">B</strong>
      </Button>
      <Button
        tooltip="italic"
        onClick={() => {
          formatItalic(element, data, setData, setUpdateSelection);
        }}
      >
        <italic className="italic">I</italic>
      </Button>
      <Button
        tooltip="inline code"
        onClick={() => {
          formatInlineCode(element, data, setData, setUpdateSelection);
        }}
      >
        <span>{"<>"}</span>
      </Button>
    </>
  );
}
