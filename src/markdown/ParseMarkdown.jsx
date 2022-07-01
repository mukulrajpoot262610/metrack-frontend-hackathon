import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

export default function ParseMarkdown({ children }) {
  return (
    <section
      id="code"
      className="prose prose-slate dark:prose-invert prose-img:rounded-md prose-a:text-blue-600 max-w-none"
    >
      <ReactMarkdown components={CodeBlock} remarkPlugins={[gfm]}>
        {children}
      </ReactMarkdown>
    </section>
  );
}
