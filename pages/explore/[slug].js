import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCourseDetail } from "services/api";
import CourseDetail from "components/course/CourseDetail";
import toast, { LoaderIcon } from "react-hot-toast";

const CourseDetailPage = () => {
  const router = useRouter();
  const id = router.query.slug;
  const [response, setResponse] = useState([]);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const { data } = await getCourseDetail(id);
        setResponse(data.data);
      } catch (err) {
        toast.error(err?.response?.data?.msg);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {response.length === 0 ? (
        <div className="flex items-center justify-center h-96">
          <LoaderIcon />
        </div>
      ) : (
        <CourseDetail course={response} />
      )}
    </>
  );
};

export default CourseDetailPage;
