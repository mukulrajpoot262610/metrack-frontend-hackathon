import { format, formatDistance } from "date-fns";
import React, { useEffect, useState } from "react";

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
    <div className="space-y-4">
      {elements}
      {!elements.length ? (
        <>
          <div className="flex items-center justify-center text-sm text-blue-500 h-80">
            You have no project activities yet !
            <br />
            Browse courses and submit your projects.
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
