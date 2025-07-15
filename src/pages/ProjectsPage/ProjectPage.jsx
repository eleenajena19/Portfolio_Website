import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import upstash from "../../assets/upstash.png";
import Beauty from "../../assets/Beauty.png";
import samsung from '../../assets/samsung.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Crime from "../../assets/Crime.png"

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              // previewLink={"https://youtu.be/GLJCR6IoIjQ?si=TDubWvPu9k_6OHkN"}
              githubLink={"https://github.com/eleenajena19/Online-Crime-Management-System"}
              projectName={"Crime-File-Management System"}
              projectDetails={
  "Crime File Management System is a secure and efficient web application, designed to streamline the filing, tracking, and management of criminal cases. "
              }
              demoImage={Crime}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />

            <ProjectCard
              previewLink={"https://beautysaloonqlith.netlify.app/"}
              githubLink={"https://github.com/eleenajena19/MERN02M002/tree/main/june/week1/Day3"}
              projectName={"Beauty Salon Website"}
              projectDetails={
"Beauty Salon Website: Stylish and elegant salon website built with HTML and CSS. Showcases services, pricing, and booking options. Clean design, user-friendly, and perfect for beauty businesses!"
              }
              demoImage={Beauty}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://samsung-clone-qlith.netlify.app/"}
              githubLink={
                "https://github.com/eleenajena19/Qlith-Samsung-Website-clone-main"
              }
              projectName={"Samsung Clone Website"}
              projectDetails={
                "This is HTML, CSS, JS and Tailwind used Samsung India Clone website."
              }
              demoImage={samsung}
              skill_img={[

                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                
              ]}
            />

            <ProjectCard
              previewLink={"https://upstashblogclone.netlify.app/"}
              githubLink={"https://github.com/eleenajena19/MERN02M002/tree/main/june/week2/Day5"}
              projectName={"Upstash Blog Clone"}
              projectDetails={
                "A clone website of Upstash_Blog"
              }
              demoImage={upstash}
              key={"Team Trackr App"}
              skill_img={[
                
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                
              ]}
            />
           
           
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;
