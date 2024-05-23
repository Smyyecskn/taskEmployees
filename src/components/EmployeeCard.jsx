/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmployeeCard = ({ data }) => {
  const chartData = {
    labels: [data.name],
    datasets: [
      {
        label: "Current Score",
        data: [data.current_score],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return (
    <div className="bg-white p-6 m-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{data.name}</h2>
      <p className="text-gray-700 mb-2">{data.title}</p>
      <p className="text-gray-500 mb-4">{data.email}</p>
      <div className="max-w-sm mx-auto">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default EmployeeCard;
