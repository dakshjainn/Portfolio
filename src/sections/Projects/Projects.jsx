import styles from "./ProjectsStyles.module.css";
import chessIcon from "../../assets/chessIcon.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.ProjectsContainer}>
        <ProjectCard
          src={chessIcon}
          link={"https://github.com/dakshjainn/multiplayer_chess"}
          h3={"Multiplayer Chess"}
          p={"Play chess with your friends"}
        />
      </div>
    </section>
  );
}

export default Projects;
