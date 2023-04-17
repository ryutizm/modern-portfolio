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


const Home: NextPage = () => {
  return (
    <div
      className="
      bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden
      overflow-scroll z-0"
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
