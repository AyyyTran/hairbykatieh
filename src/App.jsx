import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Education from './Pages/Education';
import Location from './Pages/Location';
import Footer from './Pages/Footer';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Location />
      <Testimonials />
      {/* <Services/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
