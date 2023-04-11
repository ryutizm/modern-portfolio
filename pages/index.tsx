import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
// import { animateScroll as scroll } from "react-scroll";

const Home: NextPage = () => {
  return (
    <div
      className="
      bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
      overflow-scroll z-0 scrollbar scrollbar-track--400/20 scrollbar-thumb-[#600f18]/80"
    >
      <Head>
        <title>ryutizm portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      {/* <Link href="#header">
        <div className="sticky bottom-5 cursor-pointer">
          <div className="flex items-center">
            <img
              className="h-10 w-10 ml-auto mr-4 rounded-full filter grayscale hover:grayscale-0"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
        </div>
      </Link> */}

      <footer>
        
      </footer>
    </div>
  );
};

export default Home;
