import React from "react";
import Project from "components/common/Project";
import Carousel from "./Carousel";

export default function ProjectCarousel({ data }) {
  // console.log({ data }, "the data");
  const cards = data.map((i) => {
    // console.log({ i });
    return (
      <div key={i._id} className="max-w-xs carousel-item">
        <Project project={i} />
      </div>
    );
  });
  return <Carousel>{cards}</Carousel>;
}
