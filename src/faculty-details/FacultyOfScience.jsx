// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const FacultyScience = () => {
  const faculty = {
    title: "Faculty of Science",
    overview: `
      The Faculty of Science at the University of Cambridge is globally recognized for its
      pioneering research and outstanding contributions to the advancement of scientific
      knowledge. From unlocking the secrets of DNA to exploring the mysteries of quantum
      mechanics, this faculty continues to be at the forefront of discovery and innovation.

      The faculty brings together experts in physics, chemistry, biology, earth sciences,
      and environmental studies, fostering interdisciplinary collaboration and real-world
      problem-solving. Its commitment to excellence is reflected in the number of Nobel
      laureates, groundbreaking research centers, and influential scientific publications
      that emerge from this institution every year.

      Students here are equipped with a solid foundation in the scientific method, rigorous
      analytical training, and opportunities to engage in hands-on research. Whether tackling
      climate change, advancing medical science, or pushing the boundaries of theoretical
      physics, the Faculty of Science prepares its scholars to address the planet's most
      pressing challenges.
    `,
    image: "/assets/img/science.jpg",
    dean: "Professor Emily Taylor Dr. Emily Taylor is the Chief Research Technician and Lab Manager in the Department of Pharmacology at the University of Cambridge. Her research focuses primarily on the structure and function of calcium signaling pathways, specifically how cell surface receptors respond to external stimuli and regulate the release of intracellular Ca²⁺ stores. She obtained her BSc in Biological Sciences from the University of East Anglia and completed her PhD in Plant Pathology at the University of Nottingham. After postdoctoral research in Brazil, she held senior scientific positions at the National Institute of Agricultural Botany (NIAB) in Cambridge. In 2002, Dr. Taylor joined the University of Cambridge, where she now oversees lab operations, supports research projects, and specializes in molecular biology techniques, immunomethods, and high-throughput calcium signaling analysis.",

    achievements: [
      "Multiple Nobel Prizes in Physics and Chemistry",
      "Pioneering DNA structure discovery",
      "Breakthroughs in quantum computing and climate science",
      "Global collaborations with CERN and NASA",
    ],
    courses: [
      {
        name: "BSc in Chemistry",
        branches: [
          {
            name: "Organic Chemistry",
            description:
              "Focuses on the structure, properties, and reactions of organic compounds.",
          },
          {
            name: "Physical Chemistry",
            description:
              "Deals with the physical principles underlying chemical systems.",
          },
        ],
      },
      {
        name: "BSc in Biology",
        branches: [
          {
            name: "Cell and Molecular Biology",
            description: "Explores cellular processes and genetic mechanisms.",
          },
          {
            name: "Ecology and Evolution",
            description:
              "Studies organisms, their environments, and evolutionary dynamics.",
          },
        ],
      },
      {
        name: "MSc in Earth Sciences",
        branches: [
          {
            name: "Geology",
            description: "Examines Earth's materials, processes, and history.",
          },
          {
            name: "Geophysics",
            description:
              "Uses physics to study the Earth's interior and seismic activity.",
          },
        ],
      },
      {
        name: "PhD in Environmental Studies",
        branches: [
          {
            name: "Climate Science",
            description:
              "Research on climate systems, change, and mitigation strategies.",
          },
          {
            name: "Environmental Policy",
            description:
              "Focuses on regulation, sustainability, and ecological impacts.",
          },
        ],
      },
      {
        name: "MA in Physics",
        branches: [
          {
            name: "Theoretical Physics",
            description:
              "Covers fundamental physical laws and mathematical models.",
          },
          {
            name: "Experimental Physics",
            description: "Emphasizes hands-on experiments and lab techniques.",
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-purple-100 mt-18 py-16 px-6  mx-auto">
      {/* Faculty Title */}
      <motion.h1
        className="text-5xl font-bold mb-10 text-center text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {faculty.title}
      </motion.h1>

      {/* Overview and Banner Image */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 mb-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={faculty.image}
          alt={faculty.title}
          className="w-full h-110 md:w-1/2 rounded-lg shadow-md object-cover"
        />
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line md:w-1/2">
          {faculty.overview}
        </p>
      </motion.div>

      {/* Dean */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl text-justify font-semibold text-gray-800 mb-2">Dean</h2>
        <img
          src="/assets/img/deans/emily.jpg"
          alt="Professor Thomas Anderson"
          className="rounded-t-4xl h-50 shadow-md mb-4"
        />
        <p className="text-gray-700 text-justify-lg">{faculty.dean}</p>
      </motion.div>

      {/* Achievements */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          {faculty.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </motion.div>

      {/* Courses and Branches */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Courses and Branches
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {faculty.courses.map((course, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                {course.name}
              </h3>
              <div className="space-y-4">
                {course.branches.map((branch, idx) => (
                  <div key={idx}>
                    <h4 className="text-lg font-semibold">{branch.name}</h4>
                    <p className="text-gray-700">{branch.description}</p>
                    {branch.image && (
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="w-full mt-2 rounded-lg shadow-md object-cover h-48"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FacultyScience;
