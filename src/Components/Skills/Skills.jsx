import styles from "./Skills.module.css";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import react from "../../assets/skills/react.png";
import node from "../../assets/skills/node.png";
import mongo from "../../assets/skills/mongodb.png";
import redux from "../../assets/skills/redux.png";
import javaScript from "../../assets/skills/javascript1.png";
import java from "../../assets/skills/java.png";
import github from "../../assets/skills/github.png";
import history from "../../data/history.json";

export const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={html} alt="HTML" />
            </div>
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={css} alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={javaScript} alt="javascript" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={java} alt="java" />
            </div>
            <p>Java</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={react} alt="React" />
            </div>
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={redux} alt="Redux" />
            </div>
            <p>Redux</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={node} alt="node" />
            </div>
            <p>Node</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={mongo} alt="mongo" />
            </div>
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={github} alt="github" />
            </div>
            <p>Github</p>
          </div>
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* <img src="" alt="" /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{historyItem.role}</h3>

                  <p>{historyItem.description}</p>

                  <ul>
                    {historyItem.experiences.map((exp, id) => {
                      return <li key={id}>{exp}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
