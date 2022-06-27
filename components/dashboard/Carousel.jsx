import React from "react";

export default function Carousel({ children }) {
  return (
    <div className="space-x-4 carousel carousel-center rounded-box">
      {children}
    </div>
  );
}
