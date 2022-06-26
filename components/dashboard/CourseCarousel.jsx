import React from "react";
import Carousel from "./Carousel";
import CourseCard from "../Common/CourseCard";

export default function CourseCarousel({ data }) {
  console.log({ data }, "the data");
  const cards = data.map((i) => {
    console.log({ i });
    return (
      <div key={i._id} className="max-w-sm carousel-item">
        <CourseCard data={i} />
      </div>
    );
  });
  return <Carousel>{cards}</Carousel>;
}
