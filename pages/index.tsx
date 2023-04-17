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
import Footer from "@/components/Footer";


const Home: NextPage = () => {
  return (
    <div
      className="
      bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden
      overflow-scroll z-0"
    >
      <Head>
        <title>ryutizm portfolio</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}
      </Head>
{/*  */}
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
    </div>
  );
};

export default Home;
