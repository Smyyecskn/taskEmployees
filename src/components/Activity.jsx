/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { useSelector } from "react-redux";

const Activity = () => {
  const { data } = useSelector((state) => state.data);

  const info = data?.activity_hours;

  const chartSetting = {
    yAxis: [
      {
        label: "Numbers",
      },
    ],

    width: 1200,
    height: 430,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-10px, 0)",
      },
    },
  };
  const dataset = info;

  return (
    <div className="p-3  md:py-5 md:px-2 ">
      <h1 className="md:text-3xl font-bold text-red-600">Activity Hours</h1>

      <div className="flex justify-center">
        <BarChart
          dataset={dataset || []}
          xAxis={[{ scaleType: "band", dataKey: "date" }]}
          series={[
            {
              dataKey: "exams_completed",
              label: "Exams Completed",
              color: "yellow",
            },
            { dataKey: "hours", label: "Hours", color: "blue" },
            { dataKey: "lessons_taken", label: "Lessons Taken", color: "red" },
          ]}
          {...chartSetting}
        />
      </div>
    </div>
  );
};

export default Activity;
