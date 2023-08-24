import React from "react";
import ParseMarkdown from "markdown/ParseMarkdown";

const About = ({ profile }) => {
  return (
    <div className="px-4 py-2 custom-overlay w-full">
      <h2 className="py-2 font-bold text-blue-500 border-b uppercase">About Me</h2>
      <div className="py-2 !text-sm">
        <ParseMarkdown>
          {profile?.about || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
        </ParseMarkdown>
      </div>
    </div>
  );
};

export default About;
