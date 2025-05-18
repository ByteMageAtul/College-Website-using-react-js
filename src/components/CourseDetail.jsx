import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const coursesData = {
  1: {
    title: "Computer Science & Engineering",
    description:
      "This course covers programming, data structures, algorithms, databases, and software development.",
    syllabus: [
      "Introduction to Programming",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
      "Cloud Computing & Cybersecurity",
    ],
    requirements: [
      "Basic understanding of Mathematics",
      "Logical thinking & problem-solving skills",
      "Interest in coding & technology",
    ],
    keySkills: [
      "Programming (Python, Java, C++)",
      "Data Analysis",
      "Problem Solving",
      "Software Development",
    ],
    careerOpportunities: [
      "Software Engineer",
      "Data Scientist",
      "Cybersecurity Analyst",
      "AI Engineer",
    ],
    duration: "4 Years",
    fees: "$8,000 - $12,000 per year",
    image:
      "https://media.istockphoto.com/id/2172166252/photo/a-software-developer-is-thinking-on-improving-the-efficiency-of-the-ai-system.jpg?s=2048x2048&w=is&k=20&c=tbPbWNyMrcx2Vk5DEng5ZBTW6xFEv-omJFWfrg43kUI=",
  },
  2: {
    title: "Mechanical Engineering",
    description:
      "Learn about thermodynamics, fluid mechanics, and manufacturing processes.",
    syllabus: [
      "Engineering Mechanics",
      "Thermodynamics",
      "Manufacturing Processes",
      "Fluid Mechanics",
      "Machine Design",
      "Automobile Engineering",
    ],
    requirements: [
      "Basic knowledge of Physics & Mathematics",
      "Understanding of mechanical systems",
      "Interest in designing and machinery",
    ],
    keySkills: [
      "Problem Solving",
      "Mechanical Design",
      "Computer-Aided Design (CAD)",
      "Project Management",
    ],
    careerOpportunities: [
      "Automotive Engineer",
      "Aerospace Engineer",
      "Manufacturing Engineer",
      "Robotics Engineer",
    ],
    duration: "4 Years",
    fees: "$7,500 - $11,000 per year",
    image: "/courses/2.jpeg",
  },
  3: {
    title: "Business Administration",
    description:
      "A comprehensive course on business strategy, finance, and leadership.",
    syllabus: [
      "Marketing Strategies",
      "Financial Management",
      "Human Resource Management",
      "Entrepreneurship",
      "Business Analytics",
      "Strategic Management",
    ],
    requirements: [
      "Good communication skills",
      "Interest in business and management",
      "Basic understanding of Economics",
    ],
    keySkills: [
      "Leadership",
      "Strategic Thinking",
      "Financial Planning",
      "Market Research",
    ],
    careerOpportunities: [
      "Business Analyst",
      "Marketing Manager",
      "Finance Consultant",
      "Entrepreneur",
    ],
    duration: "3 Years",
    fees: "$10,000 - $15,000 per year",
    image:
      "https://st2.depositphotos.com/3591429/7485/i/450/depositphotos_74851909-stock-photo-management-success-business-concept.jpg",
  },
  4: {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Learn AI fundamentals, neural networks, and deep learning techniques.",
    syllabus: [
      "Machine Learning Basics",
      "Deep Learning with Neural Networks",
      "Natural Language Processing (NLP)",
      "AI in Robotics",
      "Big Data & Analytics",
      "Computer Vision",
    ],
    requirements: [
      "Basic Python programming",
      "Understanding of Mathematics & Statistics",
      "Interest in AI technologies",
    ],
    keySkills: [
      "Machine Learning",
      "Data Science",
      "Deep Learning",
      "Statistical Analysis",
    ],
    careerOpportunities: [
      "AI Engineer",
      "Data Scientist",
      "Machine Learning Engineer",
      "AI Researcher",
    ],
    duration: "4 Years",
    fees: "$9,000 - $14,000 per year",
    image:
      "https://images.unsplash.com/photo-1695902173528-0b15104c4554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
  },
  5: {
    title: "Civil Engineering",
    description:
      "Learn structural design, urban planning, and construction techniques.",
    syllabus: [
      "Structural Engineering",
      "Urban Planning",
      "Construction Management",
      "Geotechnical Engineering",
      "Surveying & Mapping",
      "Environmental Engineering",
    ],
    requirements: [
      "Interest in construction & architecture",
      "Basic Physics knowledge",
      "Understanding of structural design",
    ],
    keySkills: [
      "Project Management",
      "Structural Analysis",
      "Construction Planning",
      "Environmental Impact Assessment",
    ],
    careerOpportunities: [
      "Civil Engineer",
      "Structural Engineer",
      "Urban Planner",
      "Environmental Engineer",
    ],
    duration: "4 Years",
    fees: "$8,500 - $12,000 per year",
    image:
      "https://img.freepik.com/premium-photo/innovative-architecture-civil-engineering-plan_31965-16213.jpg?w=1480",
  },
  6: {
    title: "Electrical Engineering",
    description: "Study power systems, electronics, and control engineering.",
    syllabus: [
      "Circuit Theory",
      "Power Systems",
      "Signal Processing",
      "Control Systems",
    ],
    requirements: ["Mathematics", "Physics", "Entrance Exam"],
    keySkills: ["Problem-solving", "MATLAB", "Circuit Analysis", "Teamwork"],
    careerOpportunities: [
      "Power Engineer",
      "Control Systems Engineer",
      "Electrical Consultant",
    ],
    duration: "4 Years",
    fees: "$45,000 per year",
    image: "/coursedetails/6.webp",
  },
  7: {
    title: "Electronics & Communication",
    description: "Learn circuits, communication systems, and microcontrollers.",
    syllabus: [
      "Analog Circuits",
      "VLSI Design",
      "Signal Processing",
      "Communication Systems",
    ],
    requirements: ["Maths", "Physics", "Entrance Test"],
    keySkills: [
      "Circuit Design",
      "Communication Protocols",
      "Embedded Systems",
    ],
    careerOpportunities: [
      "Telecom Engineer",
      "Embedded System Designer",
      "Network Analyst",
    ],
    duration: "4 Years",
    fees: "$44,000 per year",
    image: "/coursedetails/7.jpeg",
  },
  8: {
    title: "Data Science",
    description:
      "Master data analysis, visualization, and predictive modeling.",
    syllabus: ["Statistics", "Python", "Machine Learning", "Big Data Tools"],
    requirements: ["Maths", "Programming Basics"],
    keySkills: ["Data Analysis", "Python", "Machine Learning", "Visualization"],
    careerOpportunities: ["Data Scientist", "Data Analyst", "AI Researcher"],
    duration: "2 Years",
    fees: "$48,000 per year",
    image: "/coursedetails/8.avif",
  },
  9: {
    title: "Information Technology",
    description:
      "Develop skills in software systems, web tech, and IT management.",
    syllabus: [
      "Operating Systems",
      "Web Development",
      "Databases",
      "Cloud Computing",
    ],
    requirements: ["Maths", "Programming Experience"],
    keySkills: ["Software Development", "Web Tech", "System Admin", "Cloud"],
    careerOpportunities: [
      "IT Consultant",
      "Software Developer",
      "Network Admin",
    ],
    duration: "4 Years",
    fees: "$43,000 per year",
    image: "/coursedetails/9.avif",
  },
  10: {
    title: "Cybersecurity",
    description: "Protect digital systems and networks from cyber threats.",
    syllabus: [
      "Network Security",
      "Ethical Hacking",
      "Cryptography",
      "Forensics",
    ],
    requirements: ["CS Background", "Network Basics"],
    keySkills: ["Pen Testing", "Cryptography", "Risk Management"],
    careerOpportunities: [
      "Cybersecurity Analyst",
      "Ethical Hacker",
      "Security Architect",
    ],
    duration: "2 Years",
    fees: "$49,000 per year",
    image: "/coursedetails/10.avif",
  },
  11: {
    title: "Animation & VFX",
    description: [
      "Learn animation principles, 3D modeling, and visual effects.",
    ],
    syllabus: ["2D/3D Animation, Modeling, Texturing, Compositing."],
    requirements: ["Creativity, Design Portfolio."],
    keySkills: ["3D Modeling, VFX, Motion Graphics."],
    careerOpportunities: ["Animator, VFX Artist, Game Designer."],
    duration: ["3 Years"],
    fees: ["$38,000 per year"],
    image: "/coursedetails/11.avif",
  },
  12: {
    title: "Interior Design",
    description: "Design spaces that are functional, stylish, and sustainable.",
    syllabus: ["Design Theory", "CAD", "Materials", "Sustainable Design"],
    requirements: ["Portfolio", "Creativity Test"],
    keySkills: ["Space Planning", "CAD", "Visual Presentation"],
    careerOpportunities: [
      "Interior Designer",
      "Space Planner",
      "Decor Consultant",
    ],
    duration: "3 Years",
    fees: "$37,000 per year",
    image: "/coursedetails/12.avif",
  },
  13: {
    title: "Architecture",
    description:
      "Blend design, construction, and creativity in structural design.",
    syllabus: ["Architectural Design", "History", "Structures", "Environment"],
    requirements: ["Maths", "Drawing Test", "Entrance Exam"],
    keySkills: ["Design Thinking", "3D Software", "Building Codes"],
    careerOpportunities: [
      "Architect",
      "Urban Planner",
      "Structural Consultant",
    ],
    duration: "5 Years",
    fees: "$52,000 per year",
    image: "/coursedetails/13.avif",
  },
  14: {
    title: ["Graphic Design"],
    description: ["Learn typography, branding, and digital media."],
    syllabus: ["Design Principles, Typography, UI/UX, Photoshop, Illustrator."],
    requirements: ["Design Portfolio, Art Background."],
    keySkills: ["Branding, Layout, Adobe Suite."],
    careerOpportunities: [
      "Graphic Designer, UI/UX Designer, Creative Director.",
    ],
    duration: ["3 Years"],
    fees: ["$36,000 per year"],
    image: "/coursedetails/14.avif",
  },
  15: {
    id: 15,
    title: "Journalism & Mass Communication",
    description: "Master media writing, broadcasting, and public relations.",
    syllabus: ["Reporting", "Editing", "PR", "Media Law", "Digital Journalism"],
    requirements: ["Communication Skills", "English Proficiency"],
    keySkills: ["Writing", "Editing", "Broadcasting", "PR"],
    careerOpportunities: ["Journalist", "News Anchor", "Media Analyst"],
    duration: "3 Years",
    fees: "$39,000 per year",
    image: "/coursedetails/15.avif",
  },
  16: {
    id: 16,
    title: "Biotechnology",
    description:
      "Explore genetic engineering, molecular biology, and bioprocessing.",
    syllabus: [
      "Molecular Biology",
      "Biotech Techniques",
      "Genetics",
      "Bioinformatics",
    ],
    requirements: ["Biology", "Chemistry Background"],
    keySkills: ["Wet Lab", "Analysis", "Research Methodologies"],
    careerOpportunities: [
      "Biotech Researcher",
      "Clinical Lab Scientist",
      "Pharma Associate",
    ],
    duration: "4 Years",
    fees: "$42,000 per year",
    image: "/coursedetails/16.avif",
  },
  17: {
    id: 17,
    title: "Pharmacy",
    description:
      "Understand drug development, pharmacology, and clinical research.",
    syllabus: [
      "Pharmacology",
      "Pharmaceutics",
      "Chemistry",
      "Clinical Practice",
    ],
    requirements: ["Biology", "Chemistry", "Pre-Pharmacy Test"],
    keySkills: ["Drug Knowledge", "Research", "Communication"],
    careerOpportunities: ["Pharmacist", "Clinical Researcher", "Drug Analyst"],
    duration: "4 Years",
    fees: "$41,000 per year",
    image: "/coursedetails/17.avif",
  },
  18: {
    id: 18,
    title: "Hotel Management",
    description: "Gain skills in hospitality, food & beverage, and tourism.",
    syllabus: [
      "Hospitality",
      "Food Service",
      "Housekeeping",
      "Front Office",
      "Tourism",
    ],
    requirements: ["English", "Aptitude Test", "Interview"],
    keySkills: ["Customer Service", "Event Planning", "F&B Management"],
    careerOpportunities: [
      "Hotel Manager",
      "Event Coordinator",
      "Tourism Officer",
    ],
    duration: "3 Years",
    fees: "$35,000 per year",
    image: "/coursedetails/18.avif",
  },
  19: {
    id: 19,
    title: "Fashion Design",
    description:
      "Create stylish apparel through fabric knowledge and trend study.",
    syllabus: [
      "Fashion Illustration",
      "Garment Construction",
      "Textile Science",
      "Merchandising",
    ],
    requirements: ["Portfolio", "Design Aptitude Test"],
    keySkills: ["Creativity", "Trend Forecasting", "Fabric Knowledge"],
    careerOpportunities: ["Fashion Designer", "Stylist", "Merchandiser"],
    duration: "3 Years",
    fees: "$38,000 per year",
    image: "/coursedetails/19.avif",
  },
  20: {
    id: 20,
    title: "Law",
    description: "Learn legal systems, ethics, and constitutional law.",
    syllabus: [
      "Constitutional Law",
      "Criminal Law",
      "Civil Law",
      "Legal Writing",
    ],
    requirements: ["Entrance Exam", "English Proficiency"],
    keySkills: ["Legal Reasoning", "Research", "Communication"],
    careerOpportunities: ["Lawyer", "Legal Advisor", "Judge (with experience)"],
    duration: "3 or 5 Years (BA LLB)",
    fees: "$46,000 per year",
    image: "/coursedetails/20.avif",
  },
};

function CourseDetail() {
  const { id } = useParams();
  const course = coursesData[id];

  if (!course) {
    return (
      <motion.div
        className="p-10  text-center text-red-400 text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Course Not Found!
      </motion.div>
    );
  }

  return (
    <div className="relative mt-18 min-h-screen flex flex-col items-center justify-start overflow-hidden px-4 md:px-8 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#0f172a,_#1e293b,_#111827)] opacity-60"></div>

      <motion.div
        className="relative z-10 w-full max-w-5xl bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-gray-700 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Course Image */}
        <motion.img
          src={course.image}
          alt={course.title}
          className="w-full h-[300px] md:h-[400px] object-cover rounded-xl mb-8 border border-gray-600 shadow-md"
          whileHover={{ scale: 1.01 }}
        />

        {/* Course Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          {course.title}
        </h1>

        {/* Short Description */}
        <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          {course.description}
        </p>

        {/* Duration & Fees */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
          <div className="text-center">
            <p className="text-green-400 text-sm font-semibold">Duration</p>
            <p className="text-white text-2xl">{course.duration}</p>
          </div>
          <div className="text-center">
            <p className="text-blue-400 text-sm font-semibold">Fees</p>
            <p className="text-white text-2xl">{course.fees}</p>
          </div>
        </div>

        {/* About the Course */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            About the Course
          </h2>
          <p className="text-gray-300 leading-relaxed">{course.about}</p>
        </section>

        {/* Key Skills */}
        {course.keySkills && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              Key Skills You Will Learn
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {course.keySkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Career Opportunities */}
        {course.careerOpportunities && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              Career Opportunities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {course.careerOpportunities.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Syllabus Overview */}
        {course.syllabus && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              Syllabus Overview
            </h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-300">
              {course.syllabus.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition-all">
            Enroll Now
          </button>
          <button className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white font-semibold rounded-lg shadow-md transition-all">
            Download Brochure
          </button>
        </div>

        {/* Section Rendering Function */}
        {[
          {
            title: "📘 Syllabus",
            items: course.syllabus,
            color: "from-green-500 via-cyan-400 to-blue-500",
          },
          {
            title: "🔑 Requirements",
            items: course.requirements,
            color: "from-purple-400 via-pink-500 to-red-500",
          },
          {
            title: "💡 Key Skills",
            items: course.keySkills,
            color: "from-yellow-400 via-orange-500 to-red-500",
          },
          {
            title: "🚀 Career Opportunities",
            items: course.careerOpportunities,
            color: "from-blue-500 via-indigo-500 to-purple-500",
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="mt-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3
              className={`text-2xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent text-center`}
            >
              {section.title}:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-4 bg-black/30 border border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-xl"
                >
                  <p className="text-gray-300 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default CourseDetail;
