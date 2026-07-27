import { Background } from "../components/layout";
import { Navbar } from "../components/navigation";

import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Skills from "../components/sections/skills";
import Experience from "../components/sections/experience";
import Projects from "../components/sections/projects";

export default function Home() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="relative overflow-hidden">
        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />
      </main>
    </>
  );
}