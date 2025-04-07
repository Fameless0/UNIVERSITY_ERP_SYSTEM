const EventsPlacement = () => {
    const events = [
      { id: 1, title: "Tech Fest 2025", date: "2025-04-15", location: "Main Auditorium", type: "Event" },
      { id: 2, title: "Google Campus Drive", date: "2025-04-20", location: "Placement Hall", type: "Placement" },
      { id: 3, title: "AI Workshop", date: "2025-04-25", location: "Lab 3", type: "Event" },
      { id: 4, title: "Microsoft Internship Interviews", date: "2025-05-01", location: "Placement Office", type: "Placement" }
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Events & Placement</h2>
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border border-gray-600">Title</th>
              <th className="p-3 border border-gray-600">Date</th>
              <th className="p-3 border border-gray-600">Location</th>
              <th className="p-3 border border-gray-600">Type</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="text-center bg-gray-900 text-white">
                <td className="p-3 border border-gray-600">{event.title}</td>
                <td className="p-3 border border-gray-600">{event.date}</td>
                <td className="p-3 border border-gray-600">{event.location}</td>
                <td
                  className={`p-3 border border-gray-600 ${
                    event.type === "Event" ? "text-blue-400" : "text-green-400"
                  }`}
                >
                  {event.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default EventsPlacement;
  