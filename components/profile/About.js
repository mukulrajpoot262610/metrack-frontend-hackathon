import React from "react";
import ParseMarkdown from "../markdown/ParseMarkdown";

const About = ({ profile }) => {
  return (
    <div className="px-4 py-2 space-y-2 custom-overlay">
      <h2 className="py-2 text-xs text-blue-500 border-b uppercase font-bold">About Me</h2>
      <div className="p-3 text-sm font-medium">
        <ParseMarkdown>
          {profile?.about ||
            "Describe what you are good at. Update your profile."}
        </ParseMarkdown>
      </div>
    </div>
  );
};

export default About;
