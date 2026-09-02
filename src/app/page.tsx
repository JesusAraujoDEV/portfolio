import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import About from "@/components/About";
import StackWall from "@/components/StackWall";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <StackWall />
        <Projects />
        <Interests />
      </main>
      <Footer />
    </>
  );
}
