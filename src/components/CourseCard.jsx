/* eslint-disable react/prop-types */
const CourseCard = ({ course }) => {
  return (
    <div className="p-6 m-4 rounded-lg shadow-md bg-white w-[500px] text-justify hover:bg-yellow-300 cursor-pointer">
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-700 mb-2 indent-4 md:indent-0">
        {course.description}
      </p>
      <p className="text-gray-500 mb-2">Assigned to: {course.assigned_to}</p>
      <p className="text-gray-500 mb-2">Due Date: {course.due_date}</p>
      <p className="text-gray-500">Status: {course.status}</p>
    </div>
  );
};

export default CourseCard;
