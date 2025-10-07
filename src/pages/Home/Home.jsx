import Card from "../../components/Card";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import dataExports from "../../utils/dataBuilder";
import { motion } from "motion/react";
function Home() {
  return (
    <>
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
      >
        <div className="content-container">
          <div className="card-container">
            {dataExports.map((user, index) => (
              <Card key={index} {...user} />
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}

export default Home;
