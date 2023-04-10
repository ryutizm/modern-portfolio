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
      bg-[rgb(36,36,36)] text-white h-screen
      overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>ryutizm portfolio</title>
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <ContactMe />
      </section>

      <Link href="#header">
        <footer className="sticky bottom-5 cursor-pointer">
          <div className="flex items-center">
            <img
              className="h-10 w-10 ml-auto mr-4 rounded-full filter grayscale hover:grayscale-0"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
