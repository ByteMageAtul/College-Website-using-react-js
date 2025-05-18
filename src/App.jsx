import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Professors from "./pages/Professors";
import ProfessorDetails from "./pages/ProfessorDetails";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./components/CourseDetail";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import Submissions from "./pages/Submission";
import AdminLogin from "./pages/AdminLogin";
import Faculties from "./pages/Faculties";

import FacultyOfEngineering from './faculty-details/FacultyOfEngineering';
import FacultyOfLaw from './faculty-details/FacultyOfLaw';
import FacultyOfScience from './faculty-details/FacultyOfScience';
import FacultyOfComputerScience from './faculty-details/FacultyOfComputerScience';
import FacultyOfEconomics from './faculty-details/FacultyOfEconomics';
import FacultyOfArtsHumanities from './faculty-details/FacultyOfArtsHumanities';
import FacultyOfEducation from './faculty-details/FacultyOfEducation';
import FacultyOfMedicine from './faculty-details/FacultyOfMedicine';

function App() {
  return (
    <div>
      <Header />
     
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="research" element={<Research />} />
        <Route path="/professor/:id" element={<ProfessorDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faculty-details/FacultyOfEngineering" element={<FacultyOfEngineering />} />
        <Route path="/faculty-details/FacultyOfLaw" element={<FacultyOfLaw />} />
        <Route path="/faculty-details/FacultyOfScience" element={<FacultyOfScience />} />
        <Route path="/faculty-details/FacultyOfComputerScience" element={<FacultyOfComputerScience />} />
        <Route path="/faculty-details/FacultyOfEconomics" element={<FacultyOfEconomics />} />
        <Route path="/faculty-details/FacultyOfArtsHumanities" element={<FacultyOfArtsHumanities />} />
        <Route path="/faculty-details/FacultyOfEducation" element={<FacultyOfEducation />} />
        <Route path="/faculty-details/FacultyOfMedicine" element={<FacultyOfMedicine />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
