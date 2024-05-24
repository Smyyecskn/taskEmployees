// TopEmployees.js
/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import EmployeeCard from "./EmployeeCard";

const TopEmployees = () => {
  const { data } = useSelector((state) => state.data);

  return (
    <div className="p-3  md:h-[500px]  md:px-2 ">
      <h1 className="md:text-3xl font-bold  text-red-600">Top Employees </h1>
      <div className="  flex flex-wrap mt-14 md:mt-10  justify-center ">
        {data?.top_employees?.map((item, index) => (
          <EmployeeCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopEmployees;
