/* eslint-disable react/prop-types */
const TeamTable = ({ data }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="mb-4 indent-8 text-justify capitalize">
        {data?.description}
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full overflow-scroll bg-gray-200">
          <thead className="bg-blue-400">
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                Current Score
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                Lessons Taken
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                Skills Being Developed
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.employees.map((employee, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-500">
                  {employee.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-500">
                  {employee.title}
                </td>
                <td className="px-6 py-4 border-b border-gray-500">
                  {employee.email}
                </td>
                <td className="px-6 py-4 border-b border-gray-500">
                  {employee.current_score}
                </td>
                <td className="px-6 py-4 border-b border-gray-500">
                  {employee.lessons_taken}
                </td>
                <td className="px-6 py-4 border-b border-gray-500">
                  <ul>
                    {employee.skills_being_developed.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamTable;
