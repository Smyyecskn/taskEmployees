import { NavLink, Outlet } from "react-router-dom";
const Home = () => {
  const links = [
    { name: "Activity Hours", link: "/activity" },
    { name: "Avarage Score", link: "/score" },
    { name: "In Progress Course", link: "/progress" },
    { name: "Developing Skills", link: "/devskill" },
    { name: "Teams", link: "/teams" },
    { name: "Top Employees", link: "/topemployee" },
    { name: "Top Skills", link: "/topskill" },
    { name: "Upcoming Course", link: "/upcoming" },
  ];
  return (
    <div className="relative">
      <div className="flex gap-1 p-3  md:py-5 md:px-2 bg-blue-600  justify-center flex-wrap ">
        {links?.map((link) => (
          <NavLink
            key={link.name}
            to={link.link}
            className="bg-black  p-2 rounded-md font-bold w-[160px] text-center hover:bg-gray-800"
            style={({ isActive }) => {
              return {
                color: isActive ? "chartreuse" : "white",
              };
            }}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <Outlet />

      <div className=" absolute top-[13rem] right-[0.6rem]  md:top-[5.4rem]  md:right-10">
        <div className="flex gap-1 flex-col">
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
            Create New Team
          </button>
          <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
            Add New Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
