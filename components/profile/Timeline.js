import { format, formatDistance } from "date-fns";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Timeline({ projects, courses }) {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const arr1 = projects?.map((i) => {
      return { date: i.createdAt, message: i?.title };
    });
    setActivity((activity) => arr1);
  }, []);

  const elements = activity.map((i, j) => {
    return (
      <div key={j} className="flex p-4 rounded-lg custom-overlay">
        <p className="flex-1 text-xs">{i.message}</p>
        <p className="text-xs text-blue-500">
          submitted {formatDistance(new Date(i.date), Date.now())} ago
        </p>
      </div>
    );
  });

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-bold text-blue-400 uppercase">
        Submissions
      </h2>
      {elements}
      {!elements.length ? (
        <div className="flex flex-col items-center justify-center w-full h-full mt-8">
          <img src="/no-data.svg" className="h-40 mt-10" />
          <h1 className="mt-8 text-2xl font-bold">No Activities Found...</h1>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
