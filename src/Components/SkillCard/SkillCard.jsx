import React from "react";
import styles from "./SkillCard.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillIcons = {
  HTML: "fa-brands fa-html5",
  CSS: "fa-brands fa-css3-alt",
  JavaScript: "fa-brands fa-js",
  "React.js": "fa-brands fa-react",
  "Tailwind CSS": "fa-solid fa-wind",
  Java: "fa-brands fa-java",
  Python: "fa-brands fa-python",
  Postman: "fa-solid fa-paper-plane",
  Compass: "fa-solid fa-compass",
  Netlify: "fa-brands fa-neos", // fallback, no real Netlify icon
  Figma: "fa-brands fa-figma",
  DSA: "fa-solid fa-diagram-project",
  C: "fa-solid fa-c",
  "C++": "fa-solid fa-c",
  Pandas: "fa-solid fa-database",
};


function SkillCard({ skill_name, level }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const percent = (level / 5) * 100;
  const animatedControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animatedControls.start({
        strokeDashoffset: 100 - percent,
        transition: { duration: 1 },
      });
    }
  }, [inView, percent, animatedControls]);

  const experience =
    level >= 4 ? "2+ years" : level === 3 ? "1 year" : "Learning";
  const tools =
    skill_name === "React.js"
      ? "Hooks, JSX, SPA"
      : skill_name === "Tailwind CSS"
      ? "Utility-first design"
      : skill_name === "Git and GitHub"
      ? "Version control"
      : "Web fundamentals";

  const iconClass = skillIcons[skill_name] || "fa-solid fa-code";

  return (
    <motion.div
      className={styles.card_tooltip}
      ref={ref}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.icon_ring}>
        <svg className={styles.progress_ring}>
          <circle cx="50" cy="50" r="45" />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#00ffe0"
            strokeWidth="10"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset="100"
            animate={animatedControls}
          />
        </svg>
        <i className={`${iconClass} ${styles.icon}`}></i>
      </div>

      <h3 className={styles.skill_name}>{skill_name}</h3>
      <p className={styles.level_text}>{level} / 5</p>

      <div className={styles.tooltip}>
        <p><strong>Experience:</strong> {experience}</p>
        <p><strong>Tools:</strong> {tools}</p>
      </div>
    </motion.div>
  );
}

export default SkillCard;
