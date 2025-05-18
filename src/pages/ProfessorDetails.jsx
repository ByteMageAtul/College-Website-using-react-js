import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Download } from "lucide-react";

function ProfessorDetails() {
  const { id } = useParams();
  const [professor, setProfessor] = useState(null);

  useEffect(() => {
    fetch("/professors.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProfessor = data.find(
          (prof) => prof.id.toString() === id
        );
        setProfessor(selectedProfessor);
      });
  }, [id]);

  if (!professor)
    return (
      <motion.p
        className="p-10 text-center text-white text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading...
      </motion.p>
    );

  return (
    <div className="relative mt-18 min-h-screen flex flex-col items-center justify-center px-4 py-10 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 bg-black/50 blur-sm"></div>

      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-5xl w-full border border-white/20"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={professor.photo}
          alt={professor.name}
          className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-4 border-purple-500 shadow-lg mx-auto"
          whileHover={{ scale: 1.05 }}
        />

        <h2 className="text-4xl font-bold text-center mt-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {professor.name}
        </h2>

        <p className="text-lg text-center text-gray-300 mt-1">
          {professor.field}
        </p>
        <p className="text-lg text-justify text-gray-400 mb-4">
          {professor.experience} years of experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-sm text-gray-200">
          <div className="bg-purple-700/30 p-4 rounded-xl shadow">
            <strong>Contact:</strong> {professor.contact}
          </div>
          <div className="bg-purple-700/30 p-4 rounded-xl shadow">
            <strong>Office Hours:</strong> {professor.office_hours}
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-purple-400">Biography</h3>
            <p className="mt-2 text-justify">{professor.biography.early_life}</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-purple-400">Universities</h4>
            <ul className="list-disc text-justify ml-5">
              {professor.universities.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-purple-400">Education</h4>
            <ul className="list-disc text-justify ml-5">
              {professor.biography.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-purple-400">Career</h4>
            <p className="text-justify">{professor.biography.career}</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-purple-400">Achievements</h4>
            <ul className="list-disc text-justify ml-5">
              {professor.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-purple-400">
              Research Papers
            </h4>
            <ul className="space-y-3 mt-3">
              {professor.research_papers.slice(0, 10).map((paper, index) => (
                <li
                  key={index}
                  className="bg-white/10 p-3 rounded-lg flex justify-between items-center hover:bg-white/20 transition"
                >
                  <div>
                    <p className="text-blue-300 font-medium">{paper.title}</p>
                    <p className="text-sm text-gray-400">({paper.year})</p>
                  </div>
                  <a
  href={paper.link}
  download={`Research_Paper_${index + 1}.pdf`}
  className="flex items-center gap-2 text-purple-300 hover:text-white px-3 py-1 border border-purple-400 rounded-md transition"
>
  <Download className="w-4 h-4" />
  Download
</a>

                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-purple-400">Lectures</h4>
            <ul className="list-disc ml-5">
              {professor.lectures.map((lecture, index) => (
                <li key={index}>
                  <a
                    href={lecture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white"
                  >
                    {lecture.topic} ({lecture.platform})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProfessorDetails;
