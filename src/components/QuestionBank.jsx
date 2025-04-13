const QuestionBank = () => {
    const questionPapers = [
      { id: 1, subject: "Data Structures", year: "2024", downloadLink: "#" },
      { id: 2, subject: "Operating Systems", year: "2023", downloadLink: "#" },
      { id: 3, subject: "Computer Networks", year: "2024", downloadLink: "#" },
      { id: 4, subject: "Database Management", year: "2022", downloadLink: "#" }
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Question Bank</h2>
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border border-gray-600">Subject</th>
              <th className="p-3 border border-gray-600">Year</th>
              <th className="p-3 border border-gray-600">Download</th>
            </tr>
          </thead>
          <tbody>
            {questionPapers.map((paper) => (
              <tr key={paper.id} className="text-center bg-gray-900 text-white">
                <td className="p-3 border border-gray-600">{paper.subject}</td>
                <td className="p-3 border border-gray-600">{paper.year}</td>
                <td className="p-3 border border-gray-600">
                  <a href={paper.downloadLink} className="text-blue-400 underline">
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default QuestionBank;
  