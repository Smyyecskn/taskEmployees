/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAxios from "../service/useAxios";
import CourseCard from "./CourseCard";

const UpcomingCourse = () => {
  const [data, setData] = useState([]);
  const { axiosPublic } = useAxios();

  const getData = async () => {
    try {
      const fetcedData = await axiosPublic();

      setData(fetcedData.data.data);
    } catch (error) {
      console.log("Data fetched error");
    }
  };

  useEffect(() => {
    getData();
  }, []);
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
