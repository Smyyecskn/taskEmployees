import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
const Score = () => {
  const chartSetting = {
    yAxis: [
      {
        label: "Score",
      },
    ],

    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-10px, 0)",
      },
    },
  };
  return (
    <div className="p-3  md:py-5 md:px-2 ">
      <h1 className="md:text-3xl font-bold text-red-600">
        {" "}
        Average Employee Score{" "}
      </h1>
      <div className="flex justify-center">
        <BarChart
          xAxis={[{ scaleType: "band", data: ["Average Employee Score"] }]}
          series={[{ data: [4.3], color: "yellow" }]}
          width={300}
          height={430}
          {...chartSetting}
        />
      </div>
    </div>
  );
};

export default Score;
