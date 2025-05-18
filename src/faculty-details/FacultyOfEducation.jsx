// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FacultyOfEducation = () => {
  return (
    <div className="bg-purple-100 mt-18 py-16 px-6  mx-auto">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h2
          className="text-5xl font-bold text-center text-indigo-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Faculty of Education at Cambridge University
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-10 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/img/education.jpg"
            alt="Faculty of Education"
            className="w-full h-120 md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <p className="text-lg text-justify text-gray-700 leading-relaxed md:w-1/2">
            The Faculty of Education at Cambridge University stands as a global
            leader in advancing the understanding and improvement of education
            at every level. Through cutting-edge research and innovative
            teaching practices, the faculty addresses critical issues in child
            development, pedagogy, curriculum design, educational leadership,
            and international education policy. It fosters an environment where
            theory and practice are closely integrated, ensuring that its
            graduates are not only well-versed in educational frameworks but
            also equipped to apply them effectively in diverse classroom and
            policy settings. With a strong emphasis on inclusivity, equity, and
            lifelong learning, the faculty collaborates with schools,
            governments, and international organizations to reform education
            systems and promote access to quality education worldwide. From
            early childhood to higher education, it explores how learning
            occurs, how it can be improved, and how it can be adapted to meet
            the needs of rapidly changing societies. By training the next
            generation of teachers, researchers, and policy-makers, the Faculty
            of Education plays a vital role in shaping the future of education
            across the globe.
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
              src="/assets/img/deans/laura.jpg"
              alt="Professor Laura Clark"
              className="rounded-t-4xl h-50 shadow-md mb-4"
            />
            <p className="text-lg text-justify text-gray-700">
              Professor Laura Clark serves as the Dean of the Faculty of
              Education. With a background in educational psychology and
              international education policy, she leads a faculty that is
              renowned for its research-driven approach to education and its
              emphasis on global impact.
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
              <li>Pioneering research in child development and pedagogy</li>
              <li>Transformative contributions to global education policy</li>
              <li>
                Collaborations with international educational institutions
              </li>
              <li>Developed innovative curriculum design models</li>
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
              Child Development
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">Pedagogy</div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Educational Policy
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Curriculum Design
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
                <strong>BA in Education:</strong> This program offers a
                foundation in educational theory, curriculum development, and
                effective teaching methods.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>MSc in Educational Psychology:</strong> This graduate
                program focuses on child development, learning processes, and
                creating supportive learning environments.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>PhD in Pedagogy:</strong> Engage in advanced research on
                teaching methods, curriculum development, and educational
                practices.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>MA in Educational Leadership:</strong> Prepare for
                leadership roles with a focus on management, policy
                implementation, and leading educational teams.
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

export default FacultyOfEducation;
