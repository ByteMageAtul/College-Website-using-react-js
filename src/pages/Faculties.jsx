// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Faculties = () => {
  const faculties = [
    {
      title: "Faculty of Arts and Humanities",
      description:
        "The Faculty of Arts and Humanities at Cambridge is one of the world’s leading centers for the study of languages, literature, history, philosophy, and the arts. With rich historical resources and dynamic research communities, this faculty fosters critical thinking and creative exploration. The faculty has a long history of producing scholars who have significantly influenced the humanities, both in academia and in broader cultural contexts.",
      dean: "Professor John Smith",
      achievements:
        "Award-winning research in Philosophy, multiple Nobel laureates in Literature, and influential publications in History and Languages.",
      branches: ["Philosophy", "Linguistics", "History", "Classics", "Literature"],
      courses: [
        "BA in Philosophy",
        "BA in Linguistics",
        "MA in History",
        "PhD in Classical Studies",
        "MPhil in Literature",
      ],
      image: "/assets/img/arts.jpg",
      path: "/faculty-details/facultyOfArtsHumanities",
    },
    {
      title: "Faculty of Engineering",
      description:
        "Cambridge's Engineering faculty leads global research in aerospace, robotics, civil infrastructure, and AI. It blends deep theoretical knowledge with hands-on problem-solving and works closely with industries to deliver innovative solutions to complex engineering challenges. The faculty is instrumental in shaping global technologies, producing some of the brightest minds in the engineering world.",
      dean: "Professor David Williams",
      achievements:
        "World-leading research in AI, robotics, and aerospace. Alumni include CEOs of leading tech companies and innovators in the engineering field.",
      branches: ["Aerospace", "Civil Engineering", "Mechanical Engineering", "Robotics", "Electrical Engineering"],
      courses: [
        "BEng in Mechanical Engineering",
        "MEng in Aerospace Engineering",
        "PhD in Robotics",
        "MA in Electrical Engineering",
      ],
      image: "/assets/img/eng.jpg",
      path: "/faculty-details/facultyOfEngineering",
    },
    {
      title: "Faculty of Science",
      description:
        "Renowned for discoveries from DNA to quantum mechanics, Cambridge’s Science faculty promotes interdisciplinary learning across physics, biology, chemistry, earth sciences, and environmental studies, preparing students to tackle global scientific problems. The faculty hosts world-class research institutes and fosters collaborations with major scientific institutions worldwide.",
      dean: "Professor Emily Taylor",
      achievements:
        "Multiple Nobel Prizes in Physics and Chemistry, groundbreaking work in DNA sequencing and quantum computing.",
      branches: ["Physics", "Chemistry", "Biology", "Earth Sciences", "Environmental Science"],
      courses: [
        "BSc in Chemistry",
        "BSc in Biology",
        "MSc in Earth Sciences",
        "PhD in Environmental Studies",
        "MA in Physics",
      ],
      image: "/assets/img/science.jpg",
      path: "/faculty-details/facultyOfScience",
    },
    {
      title: "Faculty of Law",
      description:
        "The Cambridge Faculty of Law is globally esteemed for its rigorous curriculum and legal research excellence. It emphasizes both theoretical foundations and real-world applications, producing top legal scholars, practitioners, and policymakers. The faculty has a rich history of involvement in shaping global law, and its alumni include influential judges and legal advisors.",
      dean: "Professor Thomas Anderson",
      achievements:
        "Leading publications in constitutional and international law, alumni serving as judges in top courts worldwide.",
      branches: ["International Law", "Constitutional Law", "Commercial Law", "Criminal Law"],
      courses: [
        "BA in Law",
        "LLM in International Law",
        "PhD in Commercial Law",
        "MPhil in Criminal Law",
      ],
      image: "/assets/img/law.jpg",
      path: "/faculty-details/facultyOfLaw",
    },
    {
      title: "Faculty of Economics",
      description:
        "With roots tracing back to John Maynard Keynes, the Economics Faculty at Cambridge explores global finance, development, macroeconomic theory, and behavioral economics, training future leaders and Nobel laureates. This faculty has shaped global economic policy and continues to influence economics research across the world.",
      dean: "Professor Sarah White",
      achievements:
        "Multiple Nobel Prize winners in Economics, major contributions to global financial policy and theory.",
      branches: ["Macroeconomics", "Behavioral Economics", "Development Economics", "Finance"],
      courses: [
        "BA in Economics",
        "MSc in Finance",
        "PhD in Behavioral Economics",
        "MA in Development Economics",
      ],
      image: "/assets/img/eco.jpg",
      path: "/faculty-details/facultyOfEconomics",
    },
    {
      title: "Faculty of Computer Science and Technology",
      description:
        "A hub of innovation in algorithms, machine learning, cybersecurity, and software engineering. The faculty is deeply integrated with cutting-edge research, industry collaborations, and entrepreneurship. Cambridge's Computer Science department is known for shaping the future of technology and inspiring tech leaders worldwide.",
      dean: "Professor Daniel Ford",
      achievements:
        "Top-ranked in AI and Cybersecurity research, producing successful tech startups and tech industry leaders.",
      branches: ["Machine Learning", "Cybersecurity", "Software Engineering", "Artificial Intelligence"],
      courses: [
        "BSc in Computer Science",
        "MSc in Artificial Intelligence",
        "PhD in Cybersecurity",
        "MEng in Software Engineering",
      ],
      image: "/assets/img/computer.jpg",
      path: "/faculty-details/facultyOfComputerScience",
    },
    {
      title: "Faculty of Education",
      description:
        "Dedicated to transforming education, this faculty combines research in child development, pedagogy, and global educational policy to influence practice across schools and nations. It focuses on preparing educators to shape future generations and improve education systems worldwide.",
      dean: "Professor Laura Clark",
      achievements:
        "Pioneering work in educational psychology, curriculum design, and international educational policy.",
      branches: ["Child Development", "Pedagogy", "Educational Policy", "Curriculum Design"],
      courses: [
        "BA in Education",
        "MSc in Educational Psychology",
        "PhD in Pedagogy",
        "MA in Educational Leadership",
      ],
      image: "/assets/img/education.jpg",
      path: "/faculty-details/FacultyOfEducation",
    },
    {
      title: "Faculty of Medicine",
      description:
        "A world leader in clinical and biomedical research, the Faculty of Medicine trains doctors, scientists, and global health leaders while partnering with the NHS and pharmaceutical sectors to revolutionize medicine. Its faculty members include some of the world's foremost medical researchers, and its clinics lead in advanced medical practices.",
      dean: "Professor Michael Reed",
      achievements:
        "Nobel Prizes in Medicine, groundbreaking research in cancer treatments and drug development.",
      branches: ["Clinical Medicine", "Biomedical Research", "Public Health", "Pharmaceutical Sciences"],
      courses: [
        "MBBS in Medicine",
        "MSc in Biomedical Sciences",
        "PhD in Public Health",
        "MD in Pharmaceutical Sciences",
      ],
      image: "/assets/img/medicin.jpg",
      path: "/faculty-details/FacultyOfMedicine",
    },
  ];

  return (
    <div className="bg-purple-100 mt-18 py-16 px-6  mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-12">Faculties of Cambridge University</h2>
      {faculties.map((faculty, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-12`}
        >
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <img
              src={faculty.image}
              alt={faculty.title}
              className="w-full rounded-lg shadow-md object-cover"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <h3 className="text-3xl font-semibold mb-4">{faculty.title}</h3>
            <p className="text-lg text-gray-700 mb-4">{faculty.description}</p>
            <p className="font-semibold mb-2">Dean: {faculty.dean}</p>
            <p className="font-semibold mb-2">Achievements: {faculty.achievements}</p>
            <p className="font-semibold mb-2">Branches: {faculty.branches.join(", ")}</p>
            <p className="font-semibold mb-4">Courses Offered: {faculty.courses.join(", ")}</p>
            <Link to={faculty.path} className="text-blue-600 hover:underline">
  Learn more about this Faculty
</Link>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Faculties;
