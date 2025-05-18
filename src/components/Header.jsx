import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const exploreItems = [
    { name: "Professors", path: "/professors" },
    { name: "Research", path: "/research" },
    { name: "Courses", path: "/courses" },
    { name: "Faculties", path: "/faculties" },
    { name: "Events", path: "/events" }
  ];

  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-0 left-0 w-full bg-purple-200 z-50 shadow-md">
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img className="h-10 cursor-pointer" src="/logo.png" alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 mr-4">
            <Link
              to="/"
              className="hover:bg-black hover:text-white px-4 py-2 rounded transition-all text-black font-medium"
            >
              Home
            </Link>

            {/* Explore Dropdown */}
            <div className="relative group">
              <button className="hover:bg-black hover:text-white px-4 py-2 rounded transition-all text-black font-medium">
                Explore
              </button>
              <motion.div
                initial={{ opacity: 1, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 w-48 bg-purple-200 border rounded shadow-lg z-50 hidden group-hover:flex flex-col"
              >
                {exploreItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="px-4 py-2 hover:bg-gray-300 text-black"
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            </div>

            <Link
              to="/about"
              className="hover:bg-black hover:text-white px-4 py-2 rounded transition-all text-black font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:bg-black hover:text-white px-4 py-2 rounded transition-all text-black font-medium"
            >
              Contact
            </Link>

            {/* Admin Panel Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 text-black hover:bg-black  hover:text-white border-black rounded transition font-medium"
              >
                Admin Panel
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute right-0 mt-2 w-48 bg-purple-200 border rounded shadow-md flex flex-col z-50"
                  >
                    <Link
                      to="/admin-login"
                      className="px-4 py-2 hover:bg-gray-300 text-black"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Visitor Management Login
                    </Link>
                    <button
                      onClick={() => {
                        window.open("https://ems-react-learnx.netlify.app/", "_blank");
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-2 text-left hover:bg-gray-200 text-black"
                    >
                      Admin Login
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-black text-white flex flex-col items-center justify-center text-2xl space-y-8 z-40"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul className="flex flex-col items-center gap-8">
              <motion.li whileHover={{ scale: 1.1 }} onClick={() => setIsOpen(false)}>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </motion.li>

              {/* Explore Dropdown for Mobile */}
              <motion.li whileHover={{ scale: 1.1 }}>
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setIsExploreOpen(!isExploreOpen)}
                    className="px-6 py-2 bg-white text-black rounded-lg hover:bg-green-400 transition text-base"
                  >
                    Explore
                  </button>

                  <AnimatePresence>
                    {isExploreOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="mt-2 w-48 bg-white border rounded shadow-md flex flex-col text-black text-center"
                      >
                        {exploreItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="px-4 py-2 hover:bg-gray-200"
                            onClick={() => {
                              setIsExploreOpen(false);
                              setIsOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>

              <motion.li onClick={() => setIsOpen(false)}>
                <Link to="/about" className="hover:text-green-400 transition">
                  About
                </Link>
              </motion.li>

              <motion.li onClick={() => setIsOpen(false)}>
                <Link to="/contact" className="hover:text-green-400 transition">
                  Contact
                </Link>
              </motion.li>

              {/* Admin Panel Dropdown for Mobile */}
              <motion.li whileHover={{ scale: 1.05 }}>
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="px-6 py-2 bg-white text-black rounded-lg hover:bg-green-400 transition text-base"
                  >
                    Admin Panel
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="mt-2 w-48 bg-white border rounded shadow-md flex flex-col text-black text-center"
                      >
                        <Link
                          to="/admin-login"
                          className="px-4 py-2 hover:bg-gray-200"
                          onClick={() => {
                            setIsOpen(false);
                            setIsDropdownOpen(false);
                          }}
                        >
                          Visitor Management Login
                        </Link>
                        <button
                          onClick={() => {
                            window.open("https://ems-react-learnx.netlify.app/", "_blank");
                            setIsOpen(false);
                            setIsDropdownOpen(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-200"
                        >
                          Admin Login
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
