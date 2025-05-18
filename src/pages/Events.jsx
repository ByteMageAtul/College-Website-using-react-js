import { useState } from "react";

function Events() {
  const allEvents = [
    {
      title: "TechFest 2025",
      date: "April 25, 2025",
      description: "Annual inter-college tech competition with coding, robotics, and AI challenges.",
      celebrity: "Ankit Fadia (Cybersecurity Expert)",
      type: "upcoming",
    },
    {
      title: "Cultural Fiesta",
      date: "March 10, 2025",
      description: "A colorful celebration of music, dance, and drama from various states of India.",
      celebrity: "Neha Kakkar (Singer)",
      type: "past",
    },
    {
      title: "Entrepreneurship Summit",
      date: "February 5, 2025",
      description: "Talks, workshops, and a startup pitch competition with industry leaders.",
      celebrity: "Peyush Bansal (CEO, Lenskart)",
      type: "past",
    },
    {
      title: "Sports Week",
      date: "May 15-20, 2025",
      description: "Athletics, football, basketball, cricket, and more with inter-departmental rivalry.",
      celebrity: "Sunil Chhetri (Football Captain)",
      type: "upcoming",
    },
    {
      title: "Hackathon X",
      date: "June 5-6, 2025",
      description: "24-hour hackathon to build solutions on AI, Blockchain, and Sustainability.",
      celebrity: "Tanmay Bhat (Comedian & Tech Enthusiast)",
      type: "upcoming",
    },
    {
      title: "Alumni Meet 2025",
      date: "January 15, 2025",
      description: "Reconnect with college alumni and celebrate their journey.",
      celebrity: "Alumni Panel Guests",
      type: "past",
    },
    {
      title: "Green Campus Drive",
      date: "April 5, 2025",
      description: "A tree plantation and campus cleanliness initiative.",
      celebrity: "Dia Mirza (Environmentalist)",
      type: "upcoming",
    },
    {
      title: "Women's Day Celebration",
      date: "March 8, 2025",
      description: "Panel discussions, performances, and awards celebrating women.",
      celebrity: "Lilly Singh (YouTuber & Activist)",
      type: "past",
    },
    {
      title: "Photography Exhibition",
      date: "December 12, 2024",
      description: "Student photography showcase on campus life and nature.",
      celebrity: "Raghu Rai (Photographer)",
      type: "past",
    },
    {
      title: "Innovation Day",
      date: "August 20, 2025",
      description: "Exhibition of student-built innovations and ideas for the future.",
      celebrity: "Dr. Kiran Bedi",
      type: "upcoming",
    },
    {
      title: "Literary Fest",
      date: "September 12-14, 2024",
      description: "Poetry slams, debates, and author talks by literary giants.",
      celebrity: "Chetan Bhagat",
      type: "past",
    },
    {
      title: "Annual Day 2024",
      date: "November 25, 2024",
      description: "Main college celebration with awards and cultural performances.",
      celebrity: "Amitabh Bachchan (Chief Guest)",
      type: "past",
    },
    {
      title: "Coding Marathon",
      date: "July 5, 2025",
      description: "6-hour programming challenge with real-world tasks.",
      celebrity: "Rohan Joshi (Host)",
      type: "upcoming",
    },
    {
      title: "Campus Fashion Show",
      date: "February 28, 2025",
      description: "A dazzling show of creativity and style by students.",
      celebrity: "Manish Malhotra (Fashion Designer)",
      type: "past",
    },
    {
      title: "Startup Mixer",
      date: "June 22, 2025",
      description: "Networking and pitching event for aspiring student entrepreneurs.",
      celebrity: "Nikhil Kamath (Zerodha)",
      type: "upcoming",
    },
    {
      title: "Music Night",
      date: "March 15, 2025",
      description: "Live band performances and DJ night under the stars.",
      celebrity: "DJ Chetas",
      type: "past",
    },
  ];
  
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = allEvents.filter((event) => {
    const matchesType = filter === "all" || event.type === filter;
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.celebrity.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="bg-gray-950 mt-18 text-white min-h-screen p-10">
      <h2 className="text-4xl font-bold text-center mb-4">College Events</h2>
      <p className="text-center text-gray-400 mb-10">Search, filter, and explore all our events</p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search events or celebrities..."
          className="w-full md:w-1/2 px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full md:w-48 px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Events</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-lg cursor-pointer transition-transform transform hover:scale-105 ${
                event.type === "upcoming"
                  ? "bg-gradient-to-br from-purple-700 to-indigo-800"
                  : "bg-gradient-to-br from-gray-800 to-gray-700"
              }`}
              onClick={() => setSelectedEvent(event)}
            >
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-medium text-white">Date:</span> {event.date}
              </p>
              <p className="text-sm text-gray-300 mb-1 truncate">
                <span className="font-medium text-white">Description:</span> {event.description}
              </p>
              <p className="text-sm text-gray-300 truncate">
                <span className="font-medium text-white">Guest:</span> {event.celebrity}
              </p>
              <div className="mt-4">
                <span
                  className={`inline-block px-3 py-1 text-xs rounded-full ${
                    event.type === "upcoming"
                      ? "bg-green-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {event.type === "upcoming" ? "Upcoming" : "Past Event"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-2">No events found.</p>
        )}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
              onClick={() => setSelectedEvent(null)}
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedEvent.title}</h3>
            <p className="mb-2">
              <strong>Date:</strong> {selectedEvent.date}
            </p>
            <p className="mb-2">
              <strong>Description:</strong> {selectedEvent.description}
            </p>
            <p className="mb-2">
              <strong>Celebrity Guest:</strong> {selectedEvent.celebrity}
            </p>
            <span
              className={`inline-block px-3 py-1 text-sm rounded-full mt-4 ${
                selectedEvent.type === "upcoming"
                  ? "bg-green-600 text-white"
                  : "bg-gray-600 text-white"
              }`}
            >
              {selectedEvent.type === "upcoming" ? "Upcoming" : "Past Event"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
