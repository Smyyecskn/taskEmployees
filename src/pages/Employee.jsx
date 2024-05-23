const Employee = () => {
  return (
    <div className="p-3  md:py-5 md:px-10 h-[calc(100vh-65px)]">
      <h1 className="md:text-3xl font-bold text-red-600">Employee</h1>

      <div className="bg-white p-6 m-4 rounded-lg shadow-md md:w-[700px] mx-auto">
        <div className="flex justify-between mb-4 border-b-[1px] border-gray-300 p-2">
          <span className="font-bold">Total Employees</span>
          <span className="text-red-600 font-bold">100</span>
        </div>
        <div className="flex justify-between mb-4 border-b-[1px] border-gray-300 p-2">
          <span className="font-bold">Total Completed Course</span>
          <span className="text-red-600 font-bold">14</span>
        </div>
      </div>
    </div>
  );
};

export default Employee;
