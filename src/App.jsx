import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./utility/Navbar";
import About from "./components/About";
import Campus from "./components/Campus";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Cards />
        <About />
        <Campus />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
