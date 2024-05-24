/* eslint-disable react-hooks/exhaustive-deps */
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { useSelector } from "react-redux";

const DevSkill = () => {
  const { data } = useSelector((state) => state.data);

  const skills = data?.skills_in_development?.map((item) => item.skill) || [];
  const employees =
    data?.skills_in_development?.map((item) => item.employees) || [];

  const chartSetting = {
    yAxis: [
      {
        label: "Number of Employees",
      },
    ],

    width: 1500,
    height: 430,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-10px, 0)",
      },
    },
  };

  return (
    <div className="p-3 md:py-5 md:px-2">
      <h1 className="md:text-3xl font-bold text-red-600">
        Skills in Development
      </h1>
      <div className="flex justify-center items-center">
        <BarChart
          xAxis={[{ scaleType: "band", data: skills }]}
          series={[{ data: employees, color: "purple" }]}
          width={1500}
          height={300}
          {...chartSetting}
        />
      </div>
    </div>
  );
};

export default DevSkill;
