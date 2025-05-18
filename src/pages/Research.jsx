import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const research = [
  {
    
    title: "Artificial Intelligence Research",
    image: "/reseach/1.avif",
    pdf: "/reseach/AI Research.pdf",
    description: `
      Cambridge University has led AI research since the 1980s. Starting from neural networks and symbolic reasoning,
      our collaborations with MIT, DeepMind, and Stanford now focus on ethical AI, autonomous systems, and healthcare.

      Notable breakthroughs include AI for early disease detection, climate forecasting, and intelligent robotics. We're
      also pioneers in explainable AI—systems that not only learn but justify decisions transparently. Our future? A
      human-centric AI ecosystem.
    `,
  },
  {
    title: "Quantum Computing",
    image: "/reseach/2.jpg",
    pdf: "/reseach/quantum research.pdf",
    description: `
      Cambridge’s legacy in quantum theory began in the 1960s. We now lead hardware and software development for
      quantum systems with global partners like IBM and Microsoft Azure Quantum.

      Current research includes fault-tolerant processors, quantum cryptography, and ethics in quantum data handling.
      We're building tomorrow's unbreakable systems today.
    `,
  },
  {
    title: "Genetic Engineering",
    image: "/reseach/3.jpg",
    pdf: "/reseach/genetic research.pdf",
    description: `
      From decoding DNA to rewriting it, Cambridge is at the heart of genetic science. Our research shaped CRISPR
      technologies, personalized medicine, and synthetic biology.

      We're now working on gene therapies to treat inherited conditions, cancer, and rare diseases through global
      clinical trials and biotech startups.
    `,
  },
  {
    title: "Sustainable Energy",
    image: "/reseach/4.jpg",
    pdf: "/reseach/sustainable research.pdf",
    description: `
      Tackling climate change, Cambridge’s Sustainable Energy Research Center investigates solar, wind, hydrogen fuel,
      and next-gen batteries. 

      With EU and UN backing, we’ve launched smart-grid simulations and carbon-negative fuel cells. Our mission: Net
      Zero by 2040.
    `,
  },
  {
    title: "Space Exploration",
    image: "/reseach/5.jpg",
    pdf: "/reseach/space research.pdf",
    description: `
      From astrophysics to space propulsion, our work with NASA and ESA explores exoplanets, black holes, and Mars
      habitability.

      Cambridge’s CubeSat missions and zero-gravity biology labs are paving paths to commercial space and deep-universe
      discovery.
    `,
  },
  {
    title: "Neuroscience",
    image: "/reseach/6.jpg",
    pdf: "/reseach/neuroscience.pdf",
    description: `
      Exploring the human brain, Cambridge’s neuroscience division deciphers cognition, consciousness, and mental
      disorders. 

      We use brain-computer interfaces, VR simulations, and gene-mapping to fight dementia, depression, and PTSD. Our
      labs are global mental health pioneers.
    `,
  },
  {
    title: "Robotics",
    image: "/reseach/7.jpg",
    pdf: "/reseach/robotics.pdf",
    description: `
      Robotics at Cambridge blends AI, mechanical engineering, and human interaction. Our humanoid bots assist in elder
      care, surgery, and disaster response.

      With Sony and Boston Dynamics, we’re building robots that learn from people and evolve in real time.
    `,
  },
  {
    title: "Climate Change Solutions",
    image: "/reseach/8.jpg",
    pdf: "/reseach/climate.pdf",
    description: `
      Climate science here integrates oceanography, atmosphere simulation, and policy design. 

      Our Earth Institute helps shape the IPCC reports and hosts living labs in the Arctic and Amazon to analyze
      carbon feedback loops and reforestation strategies.
    `,
  },
  {
    title: "Nanotechnology",
    image: "/reseach/9.jpg",
    pdf: "/reseach/nano.pdf",
    description: `
      Nanoscience is transforming medicine, materials, and electronics. We synthesize molecules at atomic scales to
      deliver drugs, purify water, and build quantum transistors.

      Our labs engineered nano-sensors that detect viruses before symptoms even appear.
    `,
  },
  {
    title: "Biomedical Engineering",
    image: "/reseach/10.jpg",
    pdf: "/reseach/bio.pdf",
    description: `
      Bridging engineering and biology, we design prosthetics, artificial organs, and wearable biosensors.

      Our work powers remote surgery, cancer nanobots, and organ-on-chip testing, revolutionizing medical diagnostics
      and treatment.
    `,
  },
  {
    title: "Machine Learning",
    image: "/reseach/11.avif",
    pdf: "/reseach/ml.pdf",
    description: `
      ML research fuels every field—from finance to genomics. Our deep learning labs develop autonomous learning
      agents, large language models, and fairness protocols in AI.

      Cambridge ML is reshaping global automation and personalization technologies.
    `,
  },
  {
    title: "Cybersecurity",
    image: "/reseach/12.avif",
    pdf: "/reseach/cybersecurity.pdf",
    description: `
      Protecting the digital world, we craft encryption models, intrusion detection systems, and zero-trust
      architectures.

      Our white-hat teams consult for global banks and governments to block cyberattacks and secure critical
      infrastructure.
    `,
  },
  {
    title: "Materials Science",
    image: "/reseach/13.jpg",
    pdf: "/reseach/material science.pdf",
    description: `
      From superconductors to biodegradable plastics, Cambridge leads in designing smarter, sustainable materials.

      Our breakthroughs include graphene circuits, self-healing polymers, and next-gen batteries for EVs and satellites.
    `,
  },
  {
    title: "AI Ethics",
    image: "/reseach/14.avif",
    pdf: "/reseach/ai ethics.pdf",
    description: `
      As AI grows, so does our responsibility. We explore transparency, bias mitigation, digital rights, and algorithmic
      accountability.

      Our Ethics Lab collaborates with Google DeepMind, UNESCO, and the UN on global AI governance.
    `,
  },
  {
    title: "Medical Research",
    image: "/reseach/15.avif",
    pdf: "/reseach/medical science.pdf",
    description: `
      From vaccine design to epidemiology, our medical labs supported major COVID-19 responses and are leading
      long-COVID research.

      Cambridge partners with NHS and WHO to drive public health innovations and drug discovery.
    `,
  },
  {
    title: "Blockchain Technology",
    image: "/reseach/16.jpg",
    pdf: "/reseach/blockchain.pdf",
    description: `
      Blockchain goes beyond crypto—our researchers build trustless voting systems, smart contracts, and data ownership
      platforms.

      We collaborate with fintech leaders and regulators on decentralization that’s scalable and ethical.
    `,
  },
  {
    title: "Robotic Surgery",
    image: "/reseach/17.jpg",
    pdf: "/reseach/robotic surgery.pdf",
    description: `
      With precision and AI, our surgeons perform operations remotely using robotics. 

      Cambridge’s medtech combines 3D imaging, haptics, and real-time data for non-invasive, accurate treatment.
    `,
  },
  {
    title: "Smart Cities",
    image: "/reseach/18.avif",
    pdf: "/reseach/smart city.pdf",
    description: `
      Urban futures start here—IoT sensors, AI traffic flow, waste optimization, and green infrastructure.

      Our pilots in Cambridge, Singapore, and Amsterdam showcase sustainable city planning and AI-powered governance.
    `,
  },
  {
    title: "Educational Innovation",
    image: "/reseach/19.avif",
    pdf: "/reseach/innovation.pdf",
    description: `
      Reinventing education with edtech, VR classrooms, and adaptive learning platforms.

      Cambridge’s EdTech Lab works with UNESCO to improve access, equity, and personalization in global education.
    `,
  },
  {
    title: "Oceanography",
    image: "/reseach/20.jpg",
    pdf: "/reseach/oceanography.pdf",
    description: `
      Ocean currents, coral reef health, and undersea tectonics—our oceanography team collaborates with NOAA and WHOI.

      We're modeling climate-ocean interactions and developing AUVs to explore the unexplored ocean floor.
    `,
  },
];

const Research = () => {

  return (
    <div className="bg-gradient-to-b mt-18 from-white to-slate-100 min-h-screen px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-blue-900 mb-20 leading-tight">
          Explore Our Groundbreaking <span className="text-sky-600">Research</span>
        </h1>

        <div className="space-y-32">
          {research.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col-reverse lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.01 }}
            >
              <div className="lg:w-1/2 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-3xl shadow-xl object-cover w-full h-[400px]"
                />
                {item.pdf && (
                  <a
                    href={item.pdf}
                    download
                    className="absolute top-4 right-4 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-xl shadow-md transition"
                  >
                    Download PDF
                  </a>
                )}
              </div>

              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-l-4 border-sky-500 pl-4">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
                {item.pdf && (
                  <div className="mt-6">
                    <a
                      href={item.pdf}
                      download
                      className="inline-block bg-blue-600 text-white px-5 py-3 rounded-full shadow hover:bg-blue-700 transition"
                    >
                      Download Research PDF
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
