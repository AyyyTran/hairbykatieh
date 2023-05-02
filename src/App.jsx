import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Education from './Pages/Education';
import Location from './Pages/Location';
import Footer from './Pages/Footer';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App m-0">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Location />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
