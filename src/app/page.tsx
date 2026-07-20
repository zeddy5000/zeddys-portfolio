import { Background } from "../components/layout"; 
import { Navbar } from "../components/navigation"; 
import Hero from "../components/sections/hero";

export default function Home() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="relative overflow-hidden">
        <Hero />
      </main>
    </>
  );
}