import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/1.jpg", "/2.jpg", "/3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-purple-100 ">
      <div className="relative mt-18">
        <img
          src={images[currentImage]}
          alt="Cambridge University"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute  top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
          About Cambridge University
        </div>
      </div>

      <motion.section
        className="max-w-7xl  mx-auto px-6 md:px-12 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center">
          Our Legacy of Academic Excellence
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-20 text-center max-w-3xl mx-auto">
          Since 1209, the University of Cambridge has built a legacy of
          innovation, leadership, and learning that spans centuries and
          continues to shape the world today.
        </p>

        <div className="space-y-24 ">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="/about/role in.jpg"
              alt="World War Contributions"
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2 ">
              <h3 className="text-3xl font-semibold text-blue-800 mb-4">
                Role in World Wars
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                During both World Wars, Cambridge played a pivotal role by
                contributing groundbreaking research in cryptography, radar, and
                medicine. The University also honored numerous scholars who
                sacrificed their lives.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <img
              src="/about/post war.jpg"
              alt="Post-War Expansion"
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold text-blue-800 mb-4">
                Post-War Global Expansion
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Post-1945, Cambridge expanded globally with numerous
                collaborations, satellite campuses, and research centers
                worldwide. It evolved into a beacon of international education
                and influence.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="/about/embracing.jpg"
              alt="Diversity & Inclusion"
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold text-blue-800 mb-4">
                Embracing Diversity & Inclusion
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                In the 21st century, Cambridge has prioritized inclusivity by
                offering scholarships for underrepresented communities and
                fostering an environment of equality, equity, and global
                representation.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Sustainability Initiatives
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Cambridge is leading sustainability efforts through its green campus
            programs, carbon-neutral goals, and research in environmental
            sciences, renewable energy, and climate policy.
          </p>
          <img
            src="/about/intractive sus.webp"
            alt="Sustainability"
            className="mx-auto w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Global Partnerships
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Through partnerships with top institutions around the world,
            Cambridge extends its reach and impact, collaborating on research,
            faculty exchange, and student exchange programs.
          </p>
          <img
            src="https://www.strategic-partnerships.admin.cam.ac.uk/sites/default/files/styles/carousel/public/2024_iaru_full_group_3.jpg?itok=rhG4lllX"
            alt="Global Partnerships"
            className="mx-auto w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">
            Innovation & Startups
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Cambridge is home to a thriving startup ecosystem powered by
            university-led incubators, mentorship, and research
            commercialization that support next-gen entrepreneurs.
          </p>
          <img
            src="/about/innoation.jpg"
            alt="Innovation"
            className="mx-auto w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            To foster a world of knowledge, creativity, and impact by empowering
            individuals through education, innovation, and a deep sense of
            global responsibility.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            To advance society through education, research, and scholarship of
            the highest international standards, shaping future leaders and
            tackling global challenges with integrity and curiosity.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Major Achievements
          </h2>
          <ul className="text-left text-gray-700 text-lg space-y-4 max-w-3xl mx-auto list-disc list-inside">
            <li>
              121 affiliated Nobel Laureates in Science, Literature, and Peace.
            </li>
            <li>
              Development of fundamental technologies like the ARM processor.
            </li>
            <li>
              Top global rankings in sustainability, innovation, and academic
              excellence.
            </li>
            <li>
              Historic research contributions in genetics, physics, and
              mathematics.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-yellow-800 mb-10">
            What Our Alumni Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 text-left">
              <p className="text-gray-700 text-lg mb-4">
                “Cambridge didn’t just teach me science—it taught me how to
                think, how to question, and how to contribute meaningfully to
                the world.”
              </p>
              <p className="text-blue-900 font-semibold">
                — Dr. Ada Holmes, Biotech Innovator
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-left">
              <p className="text-gray-700 text-lg mb-4">
                “The environment of excellence and diversity at Cambridge helped
                me build both technical expertise and a global perspective.”
              </p>
              <p className="text-blue-900 font-semibold">
                — James Wen, AI Researcher & Entrepreneur
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
