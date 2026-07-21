import { Background } from "../components/layout";
import { Navbar } from "../components/navigation";

import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Skills from "../components/sections/skills";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="relative overflow-hidden">

        <Hero />

        <About />

        <Skills />

      </main>
    </>
  );
}