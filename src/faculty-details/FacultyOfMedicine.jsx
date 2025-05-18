// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FacultyOfMedicine = () => {
  return (
    <div className="bg-purple-100 mt-18 py-16 px-6  mx-auto">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-bold text-center text-indigo-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Faculty of Medicine at Cambridge University
        </motion.h2>

        {/* Image + Overview */}
        <motion.div
          className="flex flex-col md:flex-row gap-10 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/img/medicin.jpg"
            alt="Faculty of Medicine"
            className="w-full h-195 text-justify md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <p className="text-lg text-gray-700 leading-relaxed md:w-1/2">
            The Faculty of Medicine at Cambridge University stands as a global
            leader in clinical, biomedical, and healthcare research, continually
            pushing the boundaries of medical knowledge. Renowned for its
            innovative approach to medical education and research, the faculty
            has made significant strides in transforming healthcare systems,
            medical technologies, and treatment protocols. This prestigious
            faculty is at the forefront of groundbreaking medical research,
            contributing to the advancement of medical science across numerous
            fields, from genetics and cancer treatments to infectious diseases
            and regenerative medicine. With its strong focus on both theoretical
            and practical learning, the faculty trains future doctors,
            researchers, and health professionals who will shape the course of
            global healthcare in the coming decades. Through its extensive
            partnerships with the NHS, as well as leading pharmaceutical and
            biotechnology companies, Cambridge ensures that its students are
            exposed to real-world challenges and opportunities. The faculty
            offers its students invaluable hands-on experience in
            state-of-the-art laboratories, hospitals, and healthcare facilities,
            allowing them to apply their theoretical knowledge in practical
            settings. In addition to its clinical excellence, the Faculty of
            Medicine has a distinguished history of producing pioneering
            research that influences public health policies and medical
            practices worldwide. The faculty’s commitment to addressing major
            global health challenges, such as chronic diseases, mental health,
            and environmental health, underpins its role as a hub for medical
            innovation and education. With its global collaborations,
            cutting-edge research, and world-class facilities, the Faculty of
            Medicine at Cambridge University continues to inspire and educate
            the next generation of leaders in medicine, biomedical research, and
            healthcare policy, ensuring a healthier future for communities
            around the globe.
          </p>
        </motion.div>

        {/* Dean & Achievements */}
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
              src="/assets/img/deans/mich.jpg"
              alt="Professor Thomas Anderson"
              className="rounded-t-4xl h-50 shadow-md mb-4"
            />
            <p className="text-lg text-justify text-gray-700">
              Professor Michael Reed is the Dean of the Faculty of Medicine.
              With a distinguished background in clinical medicine and
              biomedical research, he leads the faculty in advancing medical
              education and global health. His research focuses on innovative
              medical treatments, particularly in cancer and drug development.
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
            <p className="text-lg text-gray-700">
              The Faculty of Medicine has been at the forefront of medical
              discoveries, including Nobel Prize-winning research in medicine.
              Its clinicians and researchers have pioneered advances in cancer
              treatments, cardiovascular medicine, and infectious diseases. The
              faculty's collaborative approach to research with global health
              organizations and the pharmaceutical industry has led to
              significant improvements in public health.
            </p>
          </motion.div>
        </div>

        {/* Branches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-indigo-700 mb-2">
            Branches
          </h3>
          <ul className="list-disc ml-6 text-lg text-gray-700 space-y-1">
            <li>Clinical Medicine</li>
            <li>Biomedical Research</li>
            <li>Public Health</li>
            <li>Pharmaceutical Sciences</li>
          </ul>
        </motion.div>

        {/* Courses Offered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-indigo-700 mb-2">
            Courses Offered
          </h3>
          <ul className="list-disc ml-6 text-lg text-gray-700 space-y-1">
            <li>MBBS in Medicine</li>
            <li>MSc in Biomedical Sciences</li>
            <li>PhD in Public Health</li>
            <li>MD in Pharmaceutical Sciences</li>
          </ul>
        </motion.div>

        {/* Course Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-indigo-700 mb-4">
            Course Details
          </h3>
          <div className="space-y-6 text-lg text-gray-700">
            <div>
              <strong>MBBS in Medicine:</strong> Prepares students to become
              medical doctors with training in anatomy, physiology, pathology,
              pharmacology, and clinical practice. Includes hands-on hospital
              training.
            </div>
            <div>
              <strong>MSc in Biomedical Sciences:</strong> Focuses on advanced
              research in genetics, immunology, and cellular biology with
              lab-based training for careers in health and research industries.
            </div>
            <div>
              <strong>PhD in Public Health:</strong> Doctoral program for global
              health challenges, including epidemiology and health policy.
              Research targets infectious diseases and inequality.
            </div>
            <div>
              <strong>MD in Pharmaceutical Sciences:</strong> Prepares experts
              in drug development and regulatory science through partnerships
              with pharmaceutical companies and real-world projects.
            </div>
          </div>
        </motion.div>

        {/* Back to Faculties */}
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

export default FacultyOfMedicine;
