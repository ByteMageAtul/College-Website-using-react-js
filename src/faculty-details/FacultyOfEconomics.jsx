// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FacultyOfEconomics = () => {
  return (
    <div className="bg-purple-100 mt-18 py-16 px-6  mx-auto">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h2
          className="text-5xl font-bold text-center text-indigo-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Faculty of Economics at Cambridge University
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-10 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/img/eco.jpg"
            alt="Faculty of Economics"
            className="w-full h-170 md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <p className="text-lg text-justify text-gray-700 leading-relaxed md:w-1/2">
            The Faculty of Economics at the University of Cambridge stands as a
            beacon of academic excellence, with a storied legacy rooted in the
            pioneering work of economists such as John Maynard Keynes. Over the
            decades, it has evolved into a globally influential institution,
            shaping economic thought, policy, and education at the highest
            levels. The faculty has played a central role in defining modern
            economic theory, with its alumni and scholars making lasting
            contributions to global finance, development economics, and public
            policy. This world-class faculty offers a rigorous curriculum that
            combines deep theoretical foundations with critical insights into
            practical economic challenges. Areas of expertise include
            macroeconomic and microeconomic theory, international trade,
            behavioral and experimental economics, econometrics, and development
            economics. Through research that spans both historical and
            contemporary issues, the faculty continues to inform decisions made
            by governments, financial institutions, and international
            organizations. Students benefit from an intellectually vibrant
            environment where they engage with leading economists, participate
            in cutting-edge research, and gain exposure to real-world economic
            modeling and policy analysis. The faculty’s graduates consistently
            go on to achieve distinction in academia, central banking,
            international development, and the private sector — many becoming
            influential advisors, Nobel Prize winners, and architects of global
            economic reform. At Cambridge, economics is not just studied — it is
            actively used to address the pressing questions of inequality,
            growth, sustainability, and global cooperation.
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
              src="/assets/img/deans/sara.png"
              alt="Professor Sarah White"
              className="rounded-t-4xl h-50 shadow-md mb-4"
            />
            <p className="text-lg text-justify text-gray-700">
              Professor Sarah White has served as the Dean of the Faculty of
              Economics at Cambridge for several years, playing a significant
              role in advancing the faculty’s reputation as a leader in economic
              thought and policy. Her research in global financial systems and
              development economics is recognized worldwide.
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
              <li>Multiple Nobel Prize winners among faculty and alumni</li>
              <li>Key contributions to modern macroeconomic theory</li>
              <li>Strong links with international financial institutions</li>
              <li>Influence on UK and global economic policies</li>
              <li>Home to leading research in behavioral economics</li>
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
              Macroeconomics
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Behavioral Economics
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              Development Economics
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">Finance</div>
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
                <strong>BA in Economics:</strong> This undergraduate program
                provides a strong foundation in economic theory and the
                understanding of global economic systems. Students will also
                explore areas such as international trade, economic policy, and
                market dynamics.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>MSc in Finance:</strong> A graduate program focusing on
                the complexities of global financial markets, investment
                strategies, and financial risk management.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>PhD in Behavioral Economics:</strong> A research-based
                program designed for those interested in understanding the
                psychological factors that influence economic decisions.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div>
                <strong>MA in Development Economics:</strong> A postgraduate
                course designed to explore economic development issues, poverty
                alleviation, and policy interventions across the globe.
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

export default FacultyOfEconomics;
