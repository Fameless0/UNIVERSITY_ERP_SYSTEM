const LibraryDetails = () => {
    const booksIssued = [
      { id: 1, title: "Operating Systems", issueDate: "2025-03-01", returnDate: "2025-03-30", status: "Returned" },
      { id: 2, title: "Data Structures & Algorithms", issueDate: "2025-03-05", returnDate: "2025-04-05", status: "Pending" },
      { id: 3, title: "Computer Networks", issueDate: "2025-03-10", returnDate: "2025-04-10", status: "Pending" }
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Library Details</h2>
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border border-gray-600">Book Title</th>
              <th className="p-3 border border-gray-600">Issue Date</th>
              <th className="p-3 border border-gray-600">Return Date</th>
              <th className="p-3 border border-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {booksIssued.map((book) => (
              <tr key={book.id} className="text-center bg-gray-900 text-white">
                <td className="p-3 border border-gray-600">{book.title}</td>
                <td className="p-3 border border-gray-600">{book.issueDate}</td>
                <td className="p-3 border border-gray-600">{book.returnDate}</td>
                <td
                  className={`p-3 border border-gray-600 ${
                    book.status === "Returned" ? "text-green-400" : "text-yellow-400"
                  }`}
                >
                  {book.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default LibraryDetails;
  