/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";

const UpcomingCourse = () => {
  const { data } = useSelector((state) => state.data);
  return (
    <div className="p-3  md:py-5 md:px-2 ">
      <h1 className="md:text-3xl font-bold text-red-600">Upcoming Courses</h1>
      <div className="min-h-screen  flex items-center flex-wrap justify-center mt-14 md:mt-0">
        {data?.upcoming_courses?.map((item, index) => (
          <CourseCard key={index} course={item} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingCourse;
