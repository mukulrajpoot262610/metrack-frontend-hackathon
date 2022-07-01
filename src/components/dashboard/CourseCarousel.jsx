import React from "react";
import Carousel from "./Carousel";
import CourseCard from "components/common/CourseCard";
import Link from "next/link";

export default function CourseCarousel({ data }) {
  const cards = data.map((i) => {
    return (
      <div key={i._id} className="max-w-sm carousel-item">
        <CourseCard data={i} />
      </div>
    );
  });
  return (
    <Carousel>
      {cards.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full h-full mt-8">
          <img alt="no-data" src="/no-data.svg" className="h-64" />
          <h1 className="mt-8 text-2xl font-bold">No Courses Found...</h1>
          <p className="my-2">Try Enrolling in some courses.</p>
          <Link href="/explore">
            <button className="mt-6 border border-blue-300 btn btn-ghost hover:bg-blue-50">
              Explore Courses
            </button>
          </Link>
        </div>
      ) : (
        cards
      )}
    </Carousel>
  );
}
