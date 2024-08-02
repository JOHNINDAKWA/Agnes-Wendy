import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import About from "../About/About";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Portfolio from "./../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Skills from "../Skills/Skills";
import Expereince from "../Experience/Expereince";
import Contact from "../Contact/Contact";
import Navbar from "../../components/Navbar/Navbar";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200 });
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Header />
        <About />
        <Services />
        <Resume />
        <Skills />
        <Expereince />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
