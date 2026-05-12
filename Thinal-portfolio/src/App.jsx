import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  RainCanvas,
} from "./components";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <Navbar />
        
        <div className="relative z-0">
          <Hero />
          <StarsCanvas />
        </div>
        
        <div className="relative z-0">
          <About />
        </div>
        
        <div className="relative z-0">
          <Experience />
        </div>
        
        <div className="relative z-0">
          <Works />
        </div>
        
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
