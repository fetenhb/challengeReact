import Navmenu from './components/Navmenu';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';



import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

function App() {
  return (
    <div >
     <Navmenu />
     <AboutMe />
     <Projects />
     <ContactMe />
     <Footer />
    </div>
  );
}

export default App;
