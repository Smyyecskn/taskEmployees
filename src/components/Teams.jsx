/* eslint-disable react-hooks/exhaustive-deps */
import TeamTable from "./TeamTable";
import { useSelector } from "react-redux";
const Teams = () => {
  const { data } = useSelector((state) => state.data);
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
