/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { useEffect, useState } from "react";
import useAxios from "../service/useAxios";

const Activity = () => {
  const [data, setData] = useState([]);
  const { axiosPublic } = useAxios();

  const info = data?.activity_hours;

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
