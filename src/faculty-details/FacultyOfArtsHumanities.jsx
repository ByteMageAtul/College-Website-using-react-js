// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FacultyOfArtsHumanities = () => {
  return (
    <div className="bg-purple-100 mt-18 py-16 px-6  mx-auto">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h2
          className="text-5xl font-bold text-center text-indigo-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Faculty of Arts and Humanities at Cambridge University
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-10 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/img/arts.jpg"
            alt="Faculty of Arts and Humanities"
            className="w-full h-150 md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <p className="text-lg text-gray-700 leading-relaxed text-justify md:w-1/2">
            The Faculty of Arts and Humanities at the University of Cambridge is
            internationally acclaimed for its commitment to fostering critical
            thinking, historical inquiry, and cultural studies, alongside
            promoting artistic expression. This prestigious faculty is the
            birthplace of revolutionary ideas and intellectual movements, and it
            continues to be a global leader in the arts and humanities. Home to
            legendary departments such as Literature, History, Linguistics,
            Philosophy, and the Classics, the faculty offers an intellectually
            stimulating environment where students engage deeply with both the
            foundational texts and contemporary interpretations of human
            culture. The faculty is renowned for its rigorous academic
            standards, inspiring students to challenge prevailing perspectives
            and develop innovative approaches to understanding human experience
            across time and space. The Department of Literature provides a space
            for profound exploration of literary traditions, from classical to
            modern, encouraging students to examine the power of the written
            word and its role in shaping societies. Whether analyzing
            Shakespeare’s plays or postcolonial narratives, the department
            equips scholars with the tools to critically assess literature's
            impact on cultural and political landscapes. The Department of
            History is one of the most distinguished in the world, with a focus
            on both the global and the local. From ancient civilizations to
            modern global conflicts, historians here examine the complexities of
            human development.
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
              src="/assets/img/deans/john.jpg"
              alt="Professor John Smith"
              className="rounded-t-4xl h-50 shadow-md mb-4"
            />
            <p className="text-lg text-justify text-gray-700">
              Professor John Smith leads the faculty, advocating for
              interdisciplinary innovation and inclusive education. With
              expertise in 19th-century literature and modern intellectual
              thought, he actively collaborates with international institutions
              to expand the global impact of arts education.
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
              <li>Several Nobel laureates in Literature and Peace</li>
              <li>Top 5 globally for Humanities and Linguistics</li>
              <li>Leader in digitization of ancient manuscripts</li>
              <li>Influential work in feminist and postcolonial theory</li>
              <li>Partnerships with UNESCO and national museums</li>
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
              Philosophy
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Linguistics
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">History</div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">Classics</div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Literature
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Art History
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Cultural Studies
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
                <strong>BA in Philosophy:</strong> Dive deep into ethics, logic,
                political theory, and metaphysics through guided seminars,
                lectures, and debates.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>MA in History:</strong> Study ancient to contemporary
                periods with access to historical archives and global scholarly
                exchange programs.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>MPhil in Classical Studies:</strong> Engage with ancient
                texts, archaeology, and research on Greco-Roman civilizations.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>PhD in Literature:</strong> Conduct advanced research in
                comparative literature, theory, and cultural narratives,
                supervised by global scholars.
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

export default FacultyOfArtsHumanities;
