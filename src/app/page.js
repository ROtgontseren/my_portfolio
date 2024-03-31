import HomePage from "@/components/home";
import Project from "@/components/projects";
import Contact from "@/components/contact";
import Particles from "@/components/particles";
import About from "@/components/about"

export default function Home() {
  return (
    <main>
      <Particles/>
      <HomePage/>
      <About/>
      <Project/>
      <Contact/>
    </main>
  );
}
