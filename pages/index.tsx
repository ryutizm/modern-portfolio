import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home: any = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>ryutizm portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
