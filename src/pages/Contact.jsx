import { useState, useEffect } from "react";
const courses = [
  "Computer Science",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Business Administration",
  "Data Science",
  "Artificial Intelligence",
  "Law",
  "Medicine",
  "Economics",
  "Physics",
  "Chemistry",
  "Mathematics",
  "Architecture",
  "Psychology",
];

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];

    const newSubmission = {
      name,
      email,
      mobile,
      age,
      gender,
      course,
      message,
      time: new Date().toLocaleString(),
    };

    localStorage.setItem("submissions", JSON.stringify([...oldSubmissions, newSubmission]));

    setName("");
    setEmail("");
    setMobile("");
    setAge("");
    setGender("");
    setCourse("");
    setMessage("");

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide message after 3 seconds
    }, 3000); // 3 seconds
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % 3);
    }, 3000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const backgroundImages = [
    "url('/4.jpg')",
    "url('/5.jpg')",
    "url('/6.jpg')",
  ];

  return (
    <div
      className="min-h-screen mt-18 flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: backgroundImages[backgroundIndex],
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-md"></div>

      {/* Success Message Popup */}
      {showSuccessMessage && (
        <div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg text-lg font-semibold"
          style={{
            opacity: showSuccessMessage ? 1 : 0,
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            transform: showSuccessMessage ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          ✅ Successfully Submitted!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="relative bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl w-full max-w-lg z-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-2 font-medium">Gender</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Course..."
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
              setFilteredCourses(
                courses.filter((c) =>
                  c.toLowerCase().includes(e.target.value.toLowerCase())
                )
              );
            }}
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          {course && (
            <div className="max-h-40 overflow-y-auto bg-white border rounded shadow-md">
              {filteredCourses.map((c, idx) => (
                <div
                  key={idx}
                  onClick={() => setCourse(c)}
                  className="p-2 hover:bg-purple-100 cursor-pointer"
                >
                  {c}
                </div>
              ))}
            </div>
          )}
        </div>

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full mb-6 p-2 border border-gray-300 rounded h-32"
        />

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition text-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
