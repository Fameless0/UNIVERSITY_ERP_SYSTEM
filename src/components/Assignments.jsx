const Assignments = () => {
    const assignments = [
      { id: 1, title: "Database Management Project", dueDate: "2025-04-10", status: "Pending" },
      { id: 2, title: "React.js UI Design", dueDate: "2025-04-15", status: "Completed" },
      { id: 3, title: "Operating Systems Research", dueDate: "2025-04-18", status: "Pending" }
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Assignments</h2>
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border border-gray-600">Title</th>
              <th className="p-3 border border-gray-600">Due Date</th>
              <th className="p-3 border border-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id} className="text-center bg-gray-900 text-white">
                <td className="p-3 border border-gray-600">{assignment.title}</td>
                <td className="p-3 border border-gray-600">{assignment.dueDate}</td>
                <td
                  className={`p-3 border border-gray-600 ${
                    assignment.status === "Completed" ? "text-green-400" : "text-yellow-400"
                  }`}
                >
                  {assignment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Assignments;
  