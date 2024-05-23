/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxios from "../service/useAxios";
const Progress = () => {
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

  console.log("data :>> ", data);
  const TABLE_HEAD = [
    "Assigned To",
    "Description",
    "Due_Date",
    "Status",
    "Title",
  ];
  const TABLE_ROWS = data?.in_progress_courses || [];

  return (
    <div className="p-3    md:py-5 md:px-5 ">
      <h1 className="md:text-3xl font-bold text-red-600">Progress Courses</h1>

      <div className="flex justify-center mt-20 md:mt-8">
        <Card className="h-full w-full overflow-auto border-2 border-black rounded-md">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-500 bg-blue-300 p-4"
                  >
                    <Typography
                      variant="small"
                      color="red"
                      className="font-normal  leading-none "
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  { assigned_to, description, due_date, status, title },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={assigned_to}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue"
                          className="font-normal "
                        >
                          {assigned_to}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {description}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {due_date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {status}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {title}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
