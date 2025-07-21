import React, { useState } from "react";
import styles from "./Skills.module.css";
import SkillCard from "../../Components/SkillCard/SkillCard";
import Navbar from "../../Components/Navbar/Navbar";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Circle from "../../Components/Circle/Circle";
import { motion, AnimatePresence } from "framer-motion";

function Skill() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    { name: "C", level: 4, category: "Programming" },
    { name: "C++", level: 4, category: "Programming" },
    { name: "DSA", level: 4, category: "Programming" },
    { name: "JAVA", level: 4, category: "Programming" },
    { name: "Python", level: 3, category: "Programming" },
    { name: "Pandas", level: 3, category: "Programming" },

    { name: "Tailwind CSS", level: 3, category: "Styling" },
    { name: "Figma", level: 4, category: "Tools" },
    { name: "Postman", level: 4, category: "Tools" },
    { name: "Compass", level: 4, category: "Tools" },
    { name: "Netlify", level: 4, category: "Tools" },

    { name: "HTML", level: 5, category: "Frontend" },
    { name: "CSS", level: 5, category: "Styling" },
    { name: "JavaScript", level: 5, category: "Frontend" },
    { name: "React.js", level: 5, category: "Frontend" },
  ];

  const categories = ["All", "Frontend", "Styling", "Programming", "Tools"];

  const filteredSkills = skills.filter((skill) => {
    return activeCategory === "All" || skill.category === activeCategory;
  });

  return (
    <div className={styles.skills_page}>
      <Navbar />
      <Circle top={"18rem"} right={"-18rem"} />
      <MainContainer>
        <ComponentTitle title="My Skills" />

        {/* WRAPPER for Alignment */}
        <div className={styles.skills_wrapper}>

          {/* FILTER CONTROLS */}
          <div className={styles.controls}>
            <div className={styles.tabs}>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`${styles.tab_button} ${
                    activeCategory === category ? styles.active_tab : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.1, backgroundColor: "#00ffaa", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  title={`Show ${category} skills`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* SKILLS GRID */}
          <motion.div
            className={styles.skill_container}
            layout
            transition={{ layout: { duration: 0.5 } }}
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  title={`${skill.name} - Level ${skill.level}`}
                >
                  <SkillCard skill_name={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Skill;
