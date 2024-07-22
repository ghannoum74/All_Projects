import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./utility/Navbar";
import About from "./components/About";
import Campus from "./components/Campus";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const data = {
    Fullname: useSelector((state) => state.fullData.Fullname),
    PhoneNumber: useSelector((state) => state.fullData.PhoneNumber),
    Email: useSelector((state) => state.fullData.Email),
    Details: useSelector((state) => state.fullData.Details),
  };
  console.log(data);

  const fetchData = async () => {
    await axios
      .get("http://localhost:5000/all-users")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
