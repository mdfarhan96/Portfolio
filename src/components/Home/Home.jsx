import React from "react";

// SVG
import man from "../images/dev.svg";

// Animation
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

// CSS
import "./home.css";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const Home = () => {
  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h1>I’m S Mohammed Farhan</h1>
        <p> Full Stack Developer </p>
        <div className="social">
          {/* <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a> */}
          <a
            className="a1"
            href="https://www.linkedin.com/in/s-mohammed-farhan-10aa401a4"
            target={"blank"}
          >
            <FaLinkedin />
          </a>
          <a
            className="a2"
            href="https://github.com/mdfarhan96"
            target={"blank"}
          >
            <FaGithub />
          </a>
          {/* <a href="https://www.gmail.com/">
            <FaMailBulk />
          </a> */}
        </div>
        <Link
          className="home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          See My Work
        </Link>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={man} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default Home;
