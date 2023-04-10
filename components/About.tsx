import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
      flex flex-col relative h-screen 
      text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto mt-20 items-center"
    >
      <h3
        className="
        absolute top-4 uppercase 
        tracking-[20px] text-gray-500 text-2xl"
      >
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://source.unsplash.com/random"
        className="
          -mb-20 md:mb-0 flex-shrink-0 
          w-56 h-56 rounded-full object-cover
          md:rounded-1g md:w-96 md:h-96 xl:w-[600px] xl:h-[600px]"
      />

      <div className="space-y-10 ps-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          this is a test text. don't need to read.this is a test text. don't
          need to read.this is a test text. don't need to read.this is a test
          text. don't need to read.this is a test text. don't need to read.this
          is a test text. don't need to read.this is a test text. don't need to
          read.this is a test text. don't need to read.this is a test text.
          don't need to read.this is a test text. don't need to read.this is a
          test text. don't need to read.this is a test text. don't need to
          read.this is a test text. don't need to read.this is a test text.
          don't need to read.this is a test text. don't need to read.this is a
          test text. don't need to read.this is a test text. don't need to read.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
