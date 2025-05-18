import { useState, useEffect } from "react";
import ProfessorCard from "../components/ProfessorCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Professors() {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    fetch("/professors.json")
      .then((res) => res.json())
      .then((data) => setProfessors(data));
  }, []);

  return (
    <div
      className="p-6 md:p-10 mt-18 min-h-screen bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: "url('/6.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60 "></div>

      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-white text-center mb-6 md:mb-8 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Professors
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {professors.map((prof) => (
          <motion.div
            key={prof.id}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="transition-all duration-300 ease-in-out"
          >
            <ProfessorCard professor={prof} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Professors;
