import { Link, useParams } from "react-router";
import dataExports from "../../utils/dataBuilder";
import Footer from "../../components/Footer";
import { motion } from "motion/react";

const UserPage = () => {
  const { id } = useParams(); // Get the dynamic `id` from the URL
  const item = dataExports.find((data) => data.id === id); // Find the object by `id`

  if (!item || item === undefined) {
    return (
      <>
        <motion.header
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          className="hero"
        >
          <div className="content-container">
            <h1>User not found</h1>
          </div>
        </motion.header>
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
          className="user-page"
        >
          <div className="content-container">
            <Link to="/">Go home</Link>
          </div>
        </motion.section>
      </>
    );
  }

  const { name, caption, bio, coverImageUrl, objectFit, objectPosition } = item;
  return (
    <>
      <motion.header
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -8, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="hero"
      >
        <div className="content-container">
          <h1>{name}</h1>
        </div>
      </motion.header>
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
        className="user-page"
        style={{
          "--object-fit": objectFit ? objectFit : "cover",
          "--object-position": objectPosition ? objectPosition : "center",
        }}
      >
        <div className="content-container">
          <div className="caption">
            <p>{caption}</p>
            <Link to="/">Back</Link>
          </div>
          <img src={coverImageUrl} alt="" />

          <p className="text">{bio}</p>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default UserPage;
