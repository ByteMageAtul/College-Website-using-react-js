// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FacultyOfComputerScience = () => {
  return (
    <div className="bg-purple-100 mt-18 py-16 px-6  mx-auto">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h2
          className="text-5xl font-bold text-center text-indigo-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Faculty of Computer Science and Technology at Cambridge University
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-10 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/img/computer.jpg"
            alt="Faculty of Computer Science"
            className="w-full h-115 md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <p className="text-lg text-gray-700 text-justify leading-relaxed md:w-1/2">
            The Faculty of Computer Science and Technology at the University of
            Cambridge is a globally esteemed hub for groundbreaking innovation,
            cutting-edge research, and exceptional education in the realm of
            computing. Renowned for its pivotal contributions to the development
            of modern computer science, the faculty offers an intellectually
            stimulating environment that nurtures both foundational knowledge
            and forward-looking exploration. From theoretical advancements in
            algorithms and computation to practical breakthroughs in artificial
            intelligence, machine learning, cybersecurity, and data science, the
            faculty plays a central role in shaping the technological future.
            Its interdisciplinary approach fosters collaboration with fields
            such as biology, engineering, and the humanities, enabling students
            and researchers to solve complex real-world problems through
            computational thinking. With access to state-of-the-art facilities,
            mentorship from world-leading scholars, and strong ties to global
            tech industries, the faculty empowers students to become innovators,
            entrepreneurs, and thought leaders driving the digital revolution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-indigo-700 mb-2">
              Dean
            </h3>
            <img
              src="/assets/img/deans/ford.jpg"
              alt="Professor Daniel Ford"
              className="rounded-t-4xl w-50 h-50 shadow-md mb-4"
            />
            <p className="text-lg text-gray-700 text-justify">
              Professor Daniel Ford, an expert in artificial intelligence and
              data systems, spearheads initiatives in ethical AI, academic
              partnerships, and digital transformation. His work bridges
              academia and tech industries globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-indigo-700 mb-2">
              Achievements
            </h3>
            <ul className="list-disc ml-6 text-lg text-gray-700 space-y-1">
              <li>World-class AI research recognized globally</li>
              <li>Ranked top 3 in Computer Science in Europe</li>
              <li>Developed foundational cybersecurity frameworks</li>
              <li>
                Strong industry collaborations with Google, ARM, Microsoft
              </li>
              <li>Alumni include tech startup founders and pioneers</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-indigo-700 mb-2">
            Branches
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-gray-700">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Machine Learning
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Cybersecurity
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Software Engineering
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Artificial Intelligence
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Data Science
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Human-Computer Interaction
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-indigo-700 mb-4">
            Courses & Highlights
          </h3>
          <div className="space-y-10 text-lg text-gray-700">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>BSc in Computer Science:</strong> Covers core principles
                like algorithms, data structures, and systems programming, with
                hands-on project experience.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>MSc in Artificial Intelligence:</strong> Focuses on deep
                learning, NLP, computer vision, and AI ethics through lab work
                and capstone projects.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>PhD in Cybersecurity:</strong> Advanced research program
                on encryption, network security, digital forensics, and ethical
                hacking.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>MEng in Software Engineering:</strong> Focuses on
                scalable systems, agile methods, and collaborative software
                development.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/faculties"
            className="inline-block text-indigo-600 hover:underline text-lg font-medium"
          >
            ← Back to all faculties
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FacultyOfComputerScience;
