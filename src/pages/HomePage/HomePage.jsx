import Navbar from "../../Components/Navbar/Navbar.jsx";
import style from "./HomePage.module.css";
import My_pic from "../../assets/My_pic.jpg";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Circle from "../../Components/Circle/Circle";
import { useEffect, useRef } from "react";




function HomePage() {
  const glowRef1 = useRef(null);
const glowRef2 = useRef(null);
const glowRef3 = useRef(null);

useEffect(() => {
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2; // Range: -1 to 1
    const y = (e.clientY / innerHeight - 0.5) * 2;

    if (glowRef1.current) {
      glowRef1.current.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1)`;
    }
    if (glowRef2.current) {
      glowRef2.current.style.transform = `translate(${x * 35}px, ${y * 35}px) scale(1)`;
    }
    if (glowRef3.current) {
      glowRef3.current.style.transform = `translate(${x * 10}px, ${y * 10}px) scale(1)`;
    }
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className={style.hero_component}
      >
        <motion.div
          className={style.left_side}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={style.upper_text_style}>Hello, I'm Eleena</h1>

          <motion.h2
            className={style.typewriter_wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "UI/UX Enthusiast",
                  "Problem Solver",
                  "Tech Explorer",
                  "Open Source Contributor"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 1000
              }}
            />
          </motion.h2>

          <p className={style.detail_text}>
            Passionate and results-driven MERN Stack Developer, proficient in
            MongoDB, Express.js, React.js, and Node.js, with a solid grasp of
            HTML, CSS, and JavaScript. Skilled in building full-stack web
            applications with a strong focus on performance, scalability, and
            responsive design. I’m adept at translating complex requirements
            into functional, intuitive user interfaces. My growing expertise in
            UI/UX design enables me to craft visually appealing and user-centric
            experiences that are both accessible and engaging. 
          </p>

          <motion.div
            className={style.button_group}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0, 255, 170, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className={style.download_btn}
            >
              <a
                className="link_under_button"
                target="_blank"
                href="https://drive.google.com/file/d/1Z_Ch98IuiOtfLqvjf-K7LpW6Rg6qukph/view?usp=drive_link"
              >
                <i className="fa-solid fa-file-arrow-down" style={{ marginRight: "10px" }}></i>
                Download CV
              </a>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className={style.right_section}
        >
          <motion.div
            className={`${style.img_section} ${style.large_image}`}
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src={My_pic} alt="Eleena" className={style.hero_image} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
