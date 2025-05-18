import { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const coursesData = [
  {
    id: 1,
    title: "Computer Science & Engineering",
    description: "Learn programming, data structures, and algorithms with hands-on projects.",
    branches: ["Software", "AI", "Networks"],
    image: "/courses/1.jpeg",
  },
  {
    id: 2,
    title: "Mechanical Engineering",
    description: "Explore thermodynamics, robotics, and machine design with industry experts.",
    branches: ["Automobile", "Robotics", "Thermal"],
    image: "/courses/2.jpeg",
  },
  {
    id: 3,
    title: "Business Administration",
    description: "Master business strategies, marketing, and financial management.",
    branches: ["Marketing", "Finance", "HR"],
    image: "/courses/3.jpeg",
  },
  {
    id: 4,
    title: "Artificial Intelligence & ML",
    description: "Dive into deep learning, NLP, and AI applications.",
    branches: ["Machine Learning", "NLP", "Vision"],
    image: "/courses/4.jpeg",
  },
  {
    id: 5,
    title: "Civil Engineering",
    description: "Learn structural design, construction techniques, and urban planning.",
    branches: ["Structural", "Urban", "Geotech"],
    image: "/courses/5.jpeg",
  },
  {
    id: 6,
    title: "Electrical Engineering",
    description: "Study power systems, electronics, and control engineering.",
    branches: ["Power", "Electronics", "Control"],
    image: "/courses/6.jpeg",
  },
  {
    id: 7,
    title: "Electronics & Communication",
    description: "Learn circuits, communication systems, and microcontrollers.",
    branches: ["VLSI", "Embedded", "Signal Processing"],
    image: "/courses/7.jpeg",
  },
  {
    id: 8,
    title: "Data Science",
    description: "Master data analysis, visualization, and predictive modeling.",
    branches: ["Data Analysis", "Big Data", "Statistics"],
    image: "/courses/8.jpeg",
  },
  {
    id: 9,
    title: "Information Technology",
    description: "Develop skills in software systems, web tech, and IT management.",
    branches: ["Web Dev", "Networking", "Cloud"],
    image: "/courses/9.jpeg",
  },
  {
    id: 10,
    title: "Cybersecurity",
    description: "Protect digital systems and networks from cyber threats.",
    branches: ["Network Security", "Forensics", "Ethical Hacking"],
    image: "/courses/10.jpeg",
  },
  {
    id: 11,
    title: "Animation & VFX",
    description: "Learn animation principles, 3D modeling, and visual effects.",
    branches: ["2D", "3D", "Motion Graphics"],
    image: "/courses/11.jpeg",
  },
  {
    id: 12,
    title: "Interior Design",
    description: "Design spaces that are functional, stylish, and sustainable.",
    branches: ["Residential", "Commercial", "Green Design"],
    image: "/courses/12.jpeg",
  },
  {
    id: 13,
    title: "Architecture",
    description: "Blend design, construction, and creativity in structural design.",
    branches: ["Landscape", "Urban", "Sustainable"],
    image: "/courses/13.jpg",
  },
  {
    id: 14,
    title: "Graphic Design",
    description: "Learn typography, branding, and digital media.",
    branches: ["Branding", "UI/UX", "Print Media"],
    image: "/courses/14.jpeg",
  },
  {
    id: 15,
    title: "Journalism & Mass Communication",
    description: "Master media writing, broadcasting, and public relations.",
    branches: ["TV", "Radio", "Digital Media"],
    image: "/courses/15.jpeg",
  },
  {
    id: 16,
    title: "Biotechnology",
    description: "Explore genetic engineering, molecular biology, and bioprocessing.",
    branches: ["Genetics", "Pharma", "Microbiology"],
    image: "/courses/16.jpeg",
  },
  {
    id: 17,
    title: "Pharmacy",
    description: "Understand drug development, pharmacology, and clinical research.",
    branches: ["Clinical", "Pharmacology", "Pharma Tech"],
    image: "/courses/17.jpeg",
  },
  {
    id: 18,
    title: "Hotel Management",
    description: "Gain skills in hospitality, food & beverage, and tourism.",
    branches: ["Catering", "Travel", "Hospitality"],
    image: "/courses/18.jpeg",
  },
  {
    id: 19,
    title: "Fashion Design",
    description: "Create stylish apparel through fabric knowledge and trend study.",
    branches: ["Apparel", "Merchandising", "Textiles"],
    image: "/courses/19.jpeg",
  },
  {
    id: 20,
    title: "Law",
    description: "Learn legal systems, ethics, and constitutional law.",
    branches: ["Corporate", "Criminal", "Civil"],
    image: "/courses/20.jpeg",
  },
];

// Extract all unique branches
const allBranches = ["All", ...new Set(coursesData.flatMap(c => c.branches))];

function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("All");

  // Filter logic
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBranch = selectedBranch === "All" || course.branches.includes(selectedBranch);
    return matchesSearch && matchesBranch;
  });

  return (
    <div className="relative mt-18 min-h-screen px-6 py-10 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-gradient blur-2xl opacity-30"></div>

      <div className="relative z-10">
        
        <motion.h2
          className="text-5xl font-bold text-center bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Courses
        </motion.h2>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by course name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="px-4 py-2 rounded-lg text-black bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {allBranches.map((branch, index) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{course.description}</p>
                <Link to={`/course/${course.id}`}>
                  <motion.button
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-pink-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
