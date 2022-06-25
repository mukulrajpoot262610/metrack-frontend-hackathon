import React from "react";
import Submission from "./Submission";

export default function Project({ course }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        submit your project
      </button>
      <Submission isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
