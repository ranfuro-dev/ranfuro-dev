import {Navbar} from "@/layout/Navbar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Experience} from "@/sections/Experience";
import {Testimonials} from "@/sections/Testimonials";
import {Contact} from "@/sections/Contact";
import {Footer} from "@/layout/Footer";
import {useState} from "react";
import {EntryGate} from "@/components/EntryGate";

function App() 
{
  const [hasEntered, setHasEntered] = useState(() => {
    try {
      return window.sessionStorage.getItem("dfth-portfolio-entered") === "true";
    } catch {
      return false;
    }
  });

  const enterPortfolio = () => {
    try {
      window.sessionStorage.setItem("dfth-portfolio-entered", "true");
    } catch {
      // The gate still opens if browser storage is unavailable.
    }
    setHasEntered(true);
  };

  return <div className="min-h-screen overflow-x-hidden">
    {<Navbar />}
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    {!hasEntered && <EntryGate onEnter={enterPortfolio} />}
  </div>
}

export default App
