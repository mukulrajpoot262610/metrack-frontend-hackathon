// components/codeblock.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import CopyToClipboardBtn from "utils/CopyToClipboardBtn";

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        customStyle={{
          borderRadius: "8px",
          padding: 0,
          lineHeight: 1.6,
          background: "none",
          margin: 0,
        }}
        language={match[1]}
        PreTag="div"
        showLineNumbers={true}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default CodeBlock;
