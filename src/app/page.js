import HomePage from "@/components/home";
import Project from "@/components/projects";
import Contact from "@/components/contact";
import Particles from "@/components/particles";
import About from "@/components/about"
import "./styles.css"
import Script from "next/script";

export default function Home() {
  return (
    <>
      <main className="bg-inherit" id="container">
        <div className="layer"><img src="rocket.gif" class="scroll"/></div>
        <section></section>
        <div className="text">
          <h2>Welcome To<br/><span>My Portfolio</span></h2>
        </div>
        <section className="sec2"></section>
        <Script id="scroll-layer">
          {`
            let layer = document.querySelector('.layer');
            window.addEventListener('scroll', function () {
              let value = window.scrollY;
              layer.style.left = value * 2 + 'px';
            });
          `}
        </Script>
        <Particles/>
        <HomePage/>
        <About/>
        <Project/>
        <Contact/>
      </main>
    </>
  );
}
