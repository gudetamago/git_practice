import { motion } from "motion/react";
import { Link } from "react-router";
function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeIn", delay: 0.4 }}
    >
      <div className="content-container">
        <Link to="/">
          Git To <br />
          Better Living
        </Link>
      </div>
    </motion.footer>
  );
}

export default Footer;
