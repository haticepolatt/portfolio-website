import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSkills from "../components/AboutSkills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, {threshold:0.1});
    sections.forEach(section=>observer.observe(section));
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSkills/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
