import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"2017 - 2018"}
                  timeline_title={"High School "}
                  location={"Agarwalla Bidya Pitha,Balasore "}
                  details={
                    "Completed my High School Degree from State Board with 75%."
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.right_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2019 - 2021"}
                  timeline_title={"Senior Secondary (10+2)"}
                  location={"NIST Higher Seconday School,Balasore"}
                  details={
                    "Completed my Degree from State Board with 77% from NIST Higher Secondary School,Balasore."
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"2020 - 2022"}
                  timeline_title={"Bachlore of Computer Applications "}
                  location={"ABA College,Balasore"}
                  details={
                    "Pursued my BCA  with 8.24 cgpa from ABA College,Balasore."
                  }
                  img={
                    "https://www.gpkotdwar.org.in/images/gallery/l8THHpO6.jpg"
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.right_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2022 - 2025"}
                  timeline_title={"Masters of Computer Applications"}
                  location={"GIFT Autonomous, Bhubaneswar"}
                  details={
                    "Currently cpursuing my Masters of Computer Applications from GIFT Autonomous,Bhubaneswar"
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25wBcbXkIUAg1yyYvwNMT--QIk76V1QFkI0rIdt5Kw&s"
                  }
                />
              </div>
            </div>
          </div>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>Internship Experience</h1>
            <div className={style.timeline_box}>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"2022 - 2023"}
                  timeline_title={"Project Manger Trainee"}
                  location={"Learn And Build(Remote)"}
                  details={
                    "I have worked as a Project Manger Trainee at Learn And Build for 2 months "
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.right_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2024"}
                  timeline_title={"HR Intern "}
                  location={"HireHut"}
                  details={
                    "Worked as HR Intern at HireHut for 2 months(remote)"
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2025"}
                  timeline_title={"MERN Stack Developer Intern"}
                  location={"Qlith Innovatio pvt. Ltd, Bhubaneswar"}
                  details={
                    "Currently working as a MERN Stack Developer Intern at Qlith Innovatio pvt. Ltd, Bhubaneswar ."
                  }
                />
              </div>
             
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
