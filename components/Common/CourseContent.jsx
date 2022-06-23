import React from "react";

export default function CourseContent() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const elements = data.map((i, j) => {
    return (
      <div
        key={j}
        className="p-4 overflow-hidden shadow bg-base-100 rounded-xl"
      >
        <figure className="overflow-hidden rounded-md aspect-h-1 aspect-w-2">
          <img
            src="https://images.unsplash.com/photo-1644982654072-0b42e6636821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Shoes"
          />
        </figure>
        <section className="p-0 py-2 card-body">
          <h2 className="text-sm font-bold card-title">Title</h2>
          <div className="flex items-center gap-2">
            <img src="avatar.svg" className="h-10 border rounded-full" />
            <h1 className="text-sm font-medium text-gray-500">channel</h1>
          </div>
          <div className="flex items-center justify-between card-actions">
            <div className="flex items-center gap-1">
              <img src="/like.png" className="h-10" />
              <p className="font-semibold">4</p>
            </div>
            <button className="capitalize border border-red-200 btn btn-sm btn-ghost hover:bg-red-50">
              continue watching
            </button>
          </div>
        </section>
      </div>
    );
  });

  return (
    <section className="col-span-12 lg:col-span-9">
      <div className="w-full space-y-4 rounded-xl">
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-red-400">Enrolled Courses</h2>
          <div className="grid grid-cols-1 gap-4 z-20 sm:grid-cols-2 lg:grid-cols-3">
            {elements}
          </div>
        </div>
      </div>
    </section>
  );
}
