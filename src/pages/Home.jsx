import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  // Clear the interval when the component unmounts

  return (
    <div className="bg-purple-100 mt-18">
      {/* Animated Hero Section */}
      <div className="relative h-[26rem] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Hero Image ${currentImage}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5 }} // Animation duration of 1.5s for both enter and exit
          />
        </AnimatePresence>
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Cambridge University
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-2/3">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Welcome to the University of Cambridge
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Founded in <strong>1209</strong>, the University of Cambridge
              stands as a symbol of academic excellence and innovation. For over
              800 years, it has nurtured pioneers, Nobel laureates, global
              leaders, and visionaries across every discipline.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              With 31 historic colleges and more than 150 departments, Cambridge
              is a hub where tradition meets cutting-edge research. From{" "}
              <em>artificial intelligence and quantum physics</em> to{" "}
              <em>literature, law, and medicine</em>, it shapes the future with
              groundbreaking discoveries and world-changing ideas.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Join a global community of scholars driven by curiosity, powered
              by excellence, and united by purpose. At Cambridge, the pursuit of
              knowledge goes hand in hand with the drive to make a difference.
            </p>
          </div>

          {/* Optional Image */}
          <div className="hidden md:block md:w-1/3">
            <img
              src="banner.png"
              alt="University of Cambridge"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-12 bg-white px-6">
        <h3 className="text-4xl text-center font-bold mb-10">
          Research Highlights
        </h3>
        <div className="space-y-16">
          {[
            {
              title: "AI Research",
              description:
                "Artificial Intelligence research in collaboration with global institutions to push the boundaries of what machines can achieve. We aim to make AI ethical, powerful, and beneficial to humanity.",
              image: "/reseach/1.avif",
            },
            {
              title: "Quantum Computing",
              description:
                "Exploring the potential of quantum mechanics in computing to solve problems far beyond the capabilities of traditional systems.",
              image: "/reseach/2.jpg",
            },
            {
              title: "Genetic Engineering",
              description:
                "Pioneering the future of healthcare through advanced gene editing techniques to eliminate genetic disorders and enhance human potential.",
              image: "/reseach/3.jpg",
            },
            {
              title: "Sustainable Energy",
              description:
                "Focusing on clean and renewable energy solutions like solar, wind, and biofuels to tackle climate change and reduce dependence on fossil fuels.",
              image: "/reseach/4.jpg",
            },
            {
              title: "Space Exploration",
              description:
                "Partnering with international agencies to uncover the mysteries of the universe and support human presence beyond Earth.",
              image: "/reseach/5.jpg",
            },
            {
              title: "Neuroscience",
              description:
                "Delving into the complexities of the human brain to better understand mental health and neurological diseases.",
              image: "/reseach/6.jpg",
            },
            {
              title: "Robotics",
              description:
                "Building intelligent machines that assist in industries ranging from healthcare to manufacturing.",
              image: "/reseach/7.jpg",
            },
            {
              title: "Climate Change Solutions",
              description:
                "Innovating technologies and policies to reverse environmental degradation and ensure a livable planet.",
              image: "/reseach/8.jpg",
            },
            {
              title: "Nanotechnology",
              description:
                "Advancing nano-scale materials and devices that have enormous applications in medicine, energy, and electronics.",
              image: "/reseach/9.jpg",
            },
            {
              title: "Biomedical Engineering",
              description:
                "Designing sophisticated medical tools, implants, and diagnostic machines to save and improve lives.",
              image: "/reseach/10.jpg",
            },
            {
              title: "Machine Learning",
              description:
                "Creating adaptive algorithms that enable machines to make decisions and learn from real-time data.",
              image: "/reseach/11.avif",
            },
            {
              title: "Cybersecurity",
              description:
                "Safeguarding digital infrastructure with cutting-edge security protocols and research into emerging threats.",
              image: "/reseach/12.avif",
            },
            {
              title: "Materials Science",
              description:
                "Developing innovative materials with exceptional properties for use in everything from aerospace to electronics.",
              image: "/reseach/13.jpg",
            },
            {
              title: "Artificial Intelligence Ethics",
              description:
                "Ensuring that AI is transparent, fair, and used responsibly for societal good.",
              image: "/reseach/14.avif",
            },
            {
              title: "Medical Research",
              description:
                "Innovating new treatments and pharmaceutical breakthroughs for chronic and infectious diseases.",
              image: "/reseach/15.avif",
            },
            {
              title: "Blockchain Technology",
              description:
                "Exploring decentralized systems that offer secure and transparent recordkeeping for finance, supply chains, and governance.",
              image: "/reseach/16.jpg",
            },
            {
              title: "Robotic Surgery",
              description:
                "Using precision robotics to assist surgeons in complex procedures with minimal invasiveness.",
              image: "/reseach/17.jpg",
            },
            {
              title: "Smart Cities",
              description:
                "Creating cities of the future with integrated technology to improve infrastructure, transportation, and quality of life.",
              image: "/reseach/18.avif",
            },
            {
              title: "Educational Innovation",
              description:
                "Transforming teaching methods and curriculum to better equip students for the 21st-century world.",
              image: "/reseach/19.avif",
            },
            {
              title: "Oceanography",
              description:
                "Protecting marine ecosystems and advancing ocean exploration for sustainability and biodiversity.",
              image: "/reseach/20.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6 mb-10 px-4 md:px-12`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-2/5 max-h-64 object-cover rounded-xl shadow-md"
              />
              <div className="md:w-3/5">
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700 text-lg">{item.description}</p>
                <Link
                  to="/research"
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  Explore more in Research
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-gray-50 px-6">
        <h3 className="text-4xl text-center font-bold mb-10">
          Our Achievements
        </h3>
        <div className="space-y-16">
          {[
            {
              title: "Nobel Prize Winner",
              description:
                "Awarded for groundbreaking advancements in quantum physics, a testament to our pursuit of excellence.",
              image: "/achieve/1.jpg",
            },
            {
              title: "Global Ranking #1",
              description:
                "For five consecutive years, Cambridge leads in academic reputation and research quality.",
              image: "/achieve/2.jpg",
            },
            {
              title: "World-class Faculty",
              description:
                "Home to some of the most respected and cited academics in the world.",
              image: "/achieve/3.jpeg",
            },
            {
              title: "Innovative Research",
              description:
                "Breakthroughs that have transformed global industries and technologies.",
              image: "/achieve/4.jpeg",
            },
            {
              title: "Sustainability Leader",
              description:
                "Recognized globally for championing sustainable practices and green technologies.",
              image: "/achieve/5.jpeg",
            },
            {
              title: "Philanthropy Excellence",
              description:
                "Massive endowments helping fund critical research and scholarships.",
              image: "/achieve/6.jpeg",
            },
            {
              title: "Cutting-edge Technology",
              description:
                "Advanced labs and facilities driving next-gen discoveries.",
              image: "/achieve/7.jpeg",
            },
            {
              title: "Top Employers Ranking",
              description: "Producing highly sought-after graduates worldwide.",
              image: "/achieve/8.jpeg",
            },
            {
              title: "Global Partnerships",
              description:
                "Working with leading institutions across continents.",
              image: "/achieve/9.jpeg",
            },
            {
              title: "Record-breaking Endowments",
              description:
                "Unprecedented financial support powering innovations.",
              image: "/achieve/10.jpeg",
            },
            {
              title: "Cultural and Social Impact",
              description:
                "Advocating for diversity, inclusion, and social change.",
              image: "/achieve/11.jpeg",
            },
            {
              title: "Entrepreneurship Hub",
              description: "Incubating startups that tackle global challenges.",
              image: "/achieve/12.jpeg",
            },
            {
              title: "Breakthrough Discoveries",
              description:
                "From genetics to materials science, our research changes lives.",
              image: "/achieve/13.jpeg",
            },
            {
              title: "Global Conferences",
              description: "Hosting world leaders, thinkers, and pioneers.",
              image: "/achieve/14.jpeg",
            },
            {
              title: "Student Satisfaction",
              description:
                "Highly rated for student life and academic support.",
              image: "/achieve/15.jpeg",
            },
            {
              title: "Alumni Achievements",
              description:
                "Graduates making lasting contributions across sectors.",
              image: "/achieve/16.jpeg",
            },
            {
              title: "Award-winning Campus",
              description:
                "A stunning and sustainable place to live and learn.",
              image: "/achieve/17.jpeg",
            },
            {
              title: "Research Funding",
              description:
                "Billions secured to fuel scientific and social inquiry.",
              image: "/achieve/18.jpeg",
            },
            {
              title: "Global Recognition",
              description:
                "Renowned for thought leadership and transformative research.",
              image: "/achieve/19.jpeg",
            },
            {
              title: "Groundbreaking Medical Advancements",
              description: "Revolutionizing treatments, saving lives.",
              image: "/achieve/20.jpeg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6 mb-10 px-4 md:px-12`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-2/5 max-h-64 object-cover rounded-xl shadow-md"
              />
              <div className="md:w-3/5">
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700 text-lg">{item.description}</p>
                <Link
                  to="/research"
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  Learn more in Research
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-10 bg-white">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-6">
          College Highlights
        </h3>

        {/* Flash News Bar */}
        <div className="overflow-hidden bg-blue-100 border border-blue-300 rounded-lg py-3 px-5 mb-6 animate-pulse">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="6"
            className="text-blue-800 font-medium"
          >
            🎓 Admissions Open for 2025 | 💼 Placement Drive on 22nd April | 📢
            Hackathon 2025 Registrations Now Open | 🏆 Cambridge Ranked #1 in
            Innovation 2025
          </marquee>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition">
            <div className="text-4xl text-blue-600 font-bold">25K+</div>
            <p className="text-gray-700 mt-2">Students Enrolled</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition">
            <div className="text-4xl text-green-600 font-bold">120+</div>
            <p className="text-gray-700 mt-2">Courses Offered</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition">
            <div className="text-4xl text-purple-600 font-bold">98%</div>
            <p className="text-gray-700 mt-2">Placement Rate</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition">
            <div className="text-4xl text-red-600 font-bold">500+ Acres</div>
            <p className="text-gray-700 mt-2">Campus Size</p>
          </div>
        </div>

        {/* Campus Events Slider */}
        <div className="overflow-x-auto whitespace-nowrap py-4 px-2 space-x-4 flex scrollbar-hide">
          {[
            "https://img.freepik.com/free-photo/group-happy-diverse-graduates_53876-25169.jpg",
            "https://img.freepik.com/free-photo/conference-room-with-audience-listening-speaker_23-2148915730.jpg",
            "/5.jpg",
            "/reseach/21.avif",
            "https://img.freepik.com/free-photo/hackathon-event-coding_53876-25234.jpg",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Event ${index + 1}`}
              className="h-48 w-80 object-cover rounded-xl shadow-lg inline-block transform hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
