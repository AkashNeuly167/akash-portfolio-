import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MySkill from "./components/MySkill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeaturedProject from "./components/FeaturedProject";


function App() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <MySkill />
      <FeaturedProject />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
  


export default App;