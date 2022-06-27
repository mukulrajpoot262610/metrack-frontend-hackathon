import React from "react";
import ParseMarkdown from "../markdown/ParseMarkdown";

const About = ({ profile }) => {
  return (
    <div className="px-4 py-2 space-y-6 custom-overlay">
      <h2 className="py-2 font-semibold text-blue-500 border-b">About Me</h2>
      <div>
        <ParseMarkdown>
          {profile?.about ||
            "Describe what you are good at. Update your profile."}
        </ParseMarkdown>
      </div>
    </div>
  );
};

export default About;
