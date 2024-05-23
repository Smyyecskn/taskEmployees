/* eslint-disable react-hooks/exhaustive-deps */
import TeamTable from "./TeamTable";
import { useEffect, useState } from "react";
import useAxios from "../service/useAxios";
const Teams = () => {
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
  return (
    <div className="p-3  md:py-5 bg-white md:px-2 ">
      <h1 className="md:text-3xl   font-bold text-red-600">Teams Table</h1>

      <div className="mt-20 md:-mt-0">
        {data?.teams?.map((item) => (
          <TeamTable key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
