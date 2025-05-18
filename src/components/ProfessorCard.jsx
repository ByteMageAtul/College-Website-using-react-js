import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function ProfessorCard({ professor }) {
  return (
    <motion.div
      className="bg-white  border p-3 md:p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-400"
      whileHover={{ scale: 0.90 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={professor.photo}
        alt={professor.name}
        className="w-full h-90 object-cover rounded-xl"
      />
      <h3 className="text-lg md:text-xl mt-2 font-semibold text-gray-800">
        {professor.name}
      </h3>
      <p className="text-gray-600 text-sm md:text-base">{professor.subject}</p>
      <Link
        to={`/professor/${professor.id}`}
        className="mt-2 inline-block text-white bg-blue-500 px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        View Details
      </Link>
    </motion.div>
  );
}

export default ProfessorCard;
