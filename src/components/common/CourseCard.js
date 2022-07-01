import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { FaArrowAltCircleRight, FaUsers } from "react-icons/fa";

export default function CourseCard({ data }) {
  const router = useRouter();
  const path = router.pathname;

  let onDashboard = false;
  if (path === "/dashboard/courses" || path === "/dashboard") {
    onDashboard = true;
  }

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div
      key={data._id}
      className="max-w-sm duration-200 border border-t-0 border-black cursor-pointer hover:shadow-lg card bg-base-100"
    >
      <Link href={`/explore/${data._id}`}>
        <figure className="aspect-w-2 aspect-h-1">
          <img src={data?.thumbnail} alt="thumbnail" className="object-cover" />
        </figure>
      </Link>
      <div className="p-4 card-body">
        <Link href={`/explore/${data._id}`}>
          <h2 className="text-lg font-semibold leading-tight tracking-tight capitalize card-title hover:underline">
            {truncateString(data?.name, 50)}
          </h2>
        </Link>
        <p className="text-xs font-light text-gray-400">
          {truncateString(data?.description, 100)}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaUsers className="text-xl" />
            <p className="flex items-center gap-1 font-semibold">
              {data?.students?.length || 0}
              <span className="text-xs font-normal">students</span>
            </p>
          </div>
          {onDashboard ? (
            <Link
              href={`/explore/${data._id}`}
              className="text-xs border border-blue-200 btn btn-sm btn-ghost hover:bg-blue-50"
            >
              Continue
            </Link>
          ) : (
            <Link href={`/explore/${data._id}`}>
              <a className="flex items-center gap-2 text-base">
                View <FaArrowAltCircleRight />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
