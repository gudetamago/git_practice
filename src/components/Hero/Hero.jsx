import { motion } from "motion/react";

function Hero() {
  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -8, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className="hero"
    >
      <div className="content-container">
        <h1>
          Git To <br />
          Better Living
        </h1>
      </div>
    </motion.header>
  );
}

export default Hero;
