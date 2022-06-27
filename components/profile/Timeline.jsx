import React from "react";

export default function Timeline() {

  const data = [
    {
      title: "Enrolled in Blockchain Crash Course",
      order: 1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      order: 2,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      order: 3,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      order: 4,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  let blue = false;

  const elements = data.map((i, j) => {
    blue = !blue;
    return (
      <div key={j} className="relative h-full px-10 overflow-hidden wrap">
        <div className="absolute h-full border border-accent border-2-2 border-opacity-20"></div>
        <div className="flex items-center w-full mb-8 right-timeline">
          <div className="order-1"></div>
          <div
            className={`z-20 flex items-center order-1 w-8 h-8 transform -translate-x-1/2 rounded-full shadow-xl ${blue ? "bg-blue-500" : "bg-blue-500"
              }`}
          >
            <h1 className="mx-auto text-lg font-semibold text-white">
              {i?.order}
            </h1>
          </div>
          <div
            className={`order-1 w-full px-6 py-4 rounded-lg shadow ${blue ? "bg-blue-500" : "bg-blue-500"
              } bg-opacity-20`}
          >
            <h3 className="mb-3 text-lg font-bold text-gray-800">{i?.title}</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              {i?.desc}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container w-full h-full mx-auto my-10">{elements}</div>
  );
}
