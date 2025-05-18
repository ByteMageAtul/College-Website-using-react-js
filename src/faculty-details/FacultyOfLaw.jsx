// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FacultyOfLaw = () => {
  return (
    <div className="bg-purple-100 mt-18 py-16 px-6  mx-auto">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h2
          className="text-5xl font-bold text-center text-indigo-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Faculty of Law at Cambridge University
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-10 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/img/law.jpg"
            alt="Faculty of Law"
            className="w-full h-130 md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <p className="text-lg text-justify text-gray-700 leading-relaxed md:w-1/2">
            The Cambridge Faculty of Law is globally renowned for its academic
            rigor, pioneering legal research, and influential contributions to
            both national and international legal systems. With a proud legacy
            spanning centuries, the faculty combines deep theoretical
            foundations with real-world applications, offering students a
            comprehensive understanding of legal principles across diverse
            fields such as constitutional law, international law, and commercial
            law. It fosters a dynamic academic environment where critical
            thinking, analytical reasoning, and ethical reflection are central
            to legal training. Faculty members are distinguished scholars and
            practitioners who actively contribute to policy reform, judicial
            processes, and global legal debates. Cambridge Law graduates have
            gone on to become Supreme Court justices, international arbitrators,
            human rights advocates, and legal advisors to world governments and
            global organizations. Through state-of-the-art resources,
            interdisciplinary research centers, and collaborations with
            institutions worldwide, the Faculty of Law continues to shape the
            future of law and justice. Its impact reaches beyond the classroom,
            influencing generations of legal thought and setting the benchmark
            for excellence in legal education.
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
              src="/assets/img/deans/thomas.jpg"
              alt="Professor Thomas Anderson"
              className="rounded-t-4xl h-50 shadow-md mb-4"
            />
            <p className="text-lg text-justify text-gray-700">
              Sir David Williams was a renowned British legal scholar,
              barrister, and academic who made significant contributions to
              legal education and the university system in the United Kingdom.
              Born on October 22, 1930, in Carmarthen, Wales, Sir David was
              recognized for his scholarly work in public law and his leadership
              in higher education. After completing his education at Cambridge,
              where he graduated with a first-class degree, Williams furthered
              his academic career as a Harkness Fellow at Berkeley and Harvard.
              In 1967, he joined the University of Cambridge, where he held
              various prestigious roles, including Reader in Public Law, Rouse
              Ball Professor of English Law, and ultimately, President of
              Wolfson College. His work at Cambridge, particularly in shaping
              the university's approach to legal studies, left a lasting impact.
              As the first full-time Vice-Chancellor of the University of
              Cambridge, a position he held from 1989 to 1996, Williams played a
              pivotal role in guiding the university through a period of
              substantial transformation. His leadership helped strengthen the
              institution's global reputation for academic excellence. In
              recognition of his contributions, the University of Cambridge
              established the Sir David Williams Professorship of Public Law in
              2016, continuing his legacy in the field of public law. His
              influence on the legal academic world and the development of
              Cambridge's legal education system remains profound. Williams'
              career was marked by his commitment to advancing the study and
              practice of law, producing highly regarded scholars and
              practitioners, many of whom have gone on to shape the legal
              landscape in various countries. His work and legacy continue to
              inspire students, educators, and legal professionals worldwide.
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
                Leading publications in constitutional and international law
              </li>
              <li>Alumni serving as judges in top courts worldwide</li>
              <li>Influence in shaping global legal policies</li>
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
                <strong>BA in Law:</strong> A comprehensive undergraduate degree
                that provides a solid foundation in legal principles,
                international law, and ethics.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>LLM in International Law:</strong> A postgraduate
                program focusing on global legal systems, international
                treaties, and cross-border issues.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>PhD in Commercial Law:</strong> A research-based degree
                focused on the legal frameworks surrounding business and trade
                across the globe.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>MPhil in Criminal Law:</strong> An advanced program
                exploring the complexities of criminal law and justice systems
                worldwide.
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

export default FacultyOfLaw;
