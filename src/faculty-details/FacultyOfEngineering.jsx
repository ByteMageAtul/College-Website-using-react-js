// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FacultyOfEngineering = () => {
  return (
    <div className="bg-purple-100 mt-18 py-16 px-6  mx-auto">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h2
          className="text-5xl font-bold text-center text-indigo-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Faculty of Engineering at Cambridge University
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-10 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/img/eng.jpg"
            alt="Faculty of Engineering"
            className="w-full h-150 md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <p className="text-lg text-justify text-gray-700 leading-relaxed md:w-1/2">
            The Faculty of Engineering at the University of Cambridge stands as
            a global leader in engineering education, research, and innovation.
            With a proud history of producing pioneering engineers and
            inventors, the faculty has consistently pushed the boundaries of
            technological advancement and interdisciplinary exploration. It is
            renowned for fostering a dynamic learning environment where
            theoretical excellence meets practical application. The faculty
            spans a wide range of engineering disciplines, including civil,
            mechanical, electrical, aerospace, environmental, and biomedical
            engineering. Researchers and students are actively engaged in
            solving some of the world’s most pressing challenges — from building
            sustainable infrastructure and developing intelligent robotic
            systems to advancing renewable energy technologies and enhancing
            global connectivity through telecommunications. The faculty
            maintains close collaborations with industry leaders, government
            agencies, and international research institutions. These
            partnerships allow students to participate in real-world projects,
            contribute to impactful discoveries, and gain valuable experience in
            fields like artificial intelligence, autonomous systems,
            nanotechnology, and climate resilience. Through rigorous academic
            training, hands-on experimentation, and an unwavering commitment to
            innovation, the Faculty of Engineering prepares its graduates to
            become future-ready engineers, visionary leaders, and change-makers
            who are equipped to shape the technological landscape of tomorrow.
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
              src="/assets/img/deans/david.jpg"
              alt="Professor David Williams"
              className="rounded-t-4xl h-50 shadow-md mb-4"
            />
            <p className="text-lg text-justify text-gray-700">
              Professor Sir David Williams (1930–2009) was a distinguished
              British legal scholar and one of the most respected figures in
              public law. He served as the Rouse Ball Professor of English Law
              at the University of Cambridge and became the university’s first
              full-time Vice-Chancellor from 1989 to 1996. Renowned for his
              expertise in administrative and constitutional law, Sir David
              played a pivotal role in shaping modern legal education in the UK.
              His contributions extended beyond academia into public service and
              legal reform, where he advised on issues of governance and civil
              liberties. Throughout his career, he was committed to academic
              excellence, institutional development, and the global standing of
              British higher education. In recognition of his contributions, he
              was knighted and became an Honorary Queen’s Counsel (QC). His
              legacy continues through the Sir David Williams Professorship of
              Public Law and the Sir David Williams Lecture series at Cambridge,
              celebrating his enduring impact on the legal field.
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
              <li>
                World-leading research in artificial intelligence, robotics, and
                aerospace engineering
              </li>
              <li>
                Development of autonomous drones and smart infrastructure
                systems
              </li>
              <li>Alumni include CEOs and CTOs of major engineering firms</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-indigo-700 mb-2">
            Courses & Branches
          </h3>
          <div className="space-y-10 text-lg text-gray-700">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              
              <div>
                <strong>BEng in Mechanical Engineering:</strong> Provides
                students with a foundation in thermodynamics, design systems,
                manufacturing processes, and fluid mechanics. Strong focus on
                practical workshops and design innovation.
                <ul className="list-disc ml-4 mt-2">
                  <li>Automotive Systems</li>
                  <li>Thermal & Fluid Engineering</li>
                  <li>Product Design</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
             
              <div>
                <strong>MEng in Aerospace Engineering:</strong> Focuses on
                aerodynamics, avionics, propulsion systems, and spacecraft
                design. Integrates simulations and industry projects.
                <ul className="list-disc ml-4 mt-2">
                  <li>Aircraft Systems</li>
                  <li>Propulsion & Jet Engines</li>
                  <li>Space Technologies</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
             
              <div>
                <strong>PhD in Robotics:</strong> Research-based program
                focusing on autonomous systems, intelligent control, and AI
                integration in robotics.
                <ul className="list-disc ml-4 mt-2">
                  <li>Robot Perception & Vision</li>
                  <li>Machine Learning for Robotics</li>
                  <li>Biomechanics</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
             
              <div>
                <strong>MA in Electrical Engineering:</strong> In-depth
                curriculum on circuits, signal processing, embedded systems, and
                power electronics. Includes lab-intensive courses.
                <ul className="list-disc ml-4 mt-2">
                  <li>Digital Systems</li>
                  <li>Power Electronics</li>
                  <li>Embedded Technologies</li>
                </ul>
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

export default FacultyOfEngineering;
