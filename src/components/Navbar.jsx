import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-400 p-3  md:py-5 md:px-10 flex justify-between font-bold ">
      <p
        className="cursor-pointer text-black animate-pulse"
        onClick={() => navigate("/")}
      >
        Dashboard
      </p>

      <div className="flex gap-5">
        <NavLink
          to="/employee"
          style={({ isActive }) => {
            return {
              color: isActive ? "chartreuse" : "black",
            };
          }}
        >
          Employees
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return {
              color: isActive ? "chartreuse" : "black",
            };
          }}
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
