import styles from "./Projects.module.css";
import quizProject from "../../assets/projects/quizProject.png";
import movixProject from "../../assets/projects/movixProject.png";
import autoPartsProject from "../../assets/projects/autoParts3.png";
import judiciousIncome from "../../assets/projects/judiciousIcome.png";
import pharmEasy from "../../assets/projects/pharmEasy.png";
import practiceProject from "../../assets/projects/practiceProject.png";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projects}>
        <div className={styles.content}>
          <img src={quizProject} alt="quiz-img" className={styles.img} />
          <h3 className={styles.contentText}>Quiz</h3>
          <p className={styles.description}>
            Hey Guys, This is the Quiz App where you can play the quiz game. It
            is based on a multiple choice questions application.
          </p>

          <ul className={styles.skills}>
            <li className={styles.skill}>MUI</li>
            <li className={styles.skill}>React</li>
            <li className={styles.skill}>Redux</li>
          </ul>

          <div className={styles.links}>
            <a
              href={"https://github.com/affanansarii/Quiz"}
              className={styles.link}
            >
              Github
            </a>
            <a
              href={"https://quiz-drab-beta-10.vercel.app/"}
              className={styles.link}
            >
              Demo
            </a>
          </div>
        </div>

        <div className={styles.content}>
          <img src={movixProject} alt="project-img" className={styles.img} />
          <h3 className={styles.contentText}>Movix Application</h3>
          <p className={styles.description}>
            Hey guys, i am sharing excited project that i build using React
            Redux-tools and it has amazing features like infinite
          </p>

          <ul className={styles.skills}>
            <li className={styles.skill}>React</li>
            <li className={styles.skill}>Redux</li>
            <li className={styles.skill}>SCSS</li>
          </ul>

          <div className={styles.links}>
            <a
              href={"https://github.com/SursaChauhan/Online-Auto-Part-shop"}
              className={styles.link}
            >
              Github
            </a>
            <a
              href={
                "https://656ece3a7830fc00a35560fa--delicate-eclair-7306e2.netlify.app/"
              }
              className={styles.link}
            >
              Demo
            </a>
          </div>
        </div>

        <div className={styles.content}>
          <img
            src={autoPartsProject}
            alt="project-img"
            className={styles.img}
          />
          <h3 className={styles.contentText}>Online Auto Parts Shop</h3>
          <p className={styles.description}>
            It is an Online Auto Parts Shop. Which provide any parts of your
            vehicles to your doorstep in a single click.
          </p>

          <ul className={styles.skills}>
            <li className={styles.skill}>HTML</li>
            <li className={styles.skill}>CSS</li>
            <li className={styles.skill}>JavaScript</li>
          </ul>

          <div className={styles.links}>
            <a
              href={"https://github.com/SursaChauhan/Online-Auto-Part-shop"}
              className={styles.link}
            >
              Github
            </a>
            <a
              href={
                "https://656ece3a7830fc00a35560fa--delicate-eclair-7306e2.netlify.app/"
              }
              className={styles.link}
            >
              Demo
            </a>
          </div>
        </div>

        <div className={styles.content}>
          <img src={judiciousIncome} alt="project-img" className={styles.img} />
          <h3 className={styles.contentText}>Judicious Income</h3>
          <p className={styles.description}>
            Greekbuying allows businesses to reach more clients and process more
            orders.Timely notifications.
          </p>

          <ul className={styles.skills}>
            <li className={styles.skill}>HTML</li>
            <li className={styles.skill}>CSS</li>
            <li className={styles.skill}>JavaScript</li>
          </ul>

          <div className={styles.links}>
            <a
              href={
                "https://github.com/harishpampana7/judicious-income-4437?tab=readme-ov-file"
              }
              className={styles.link}
            >
              Github
            </a>
            <a
              href={"https://greekbuying-5555.netlify.app/"}
              className={styles.link}
            >
              Demo
            </a>
          </div>
        </div>

        <div className={styles.content}>
          <img src={pharmEasy} alt="pharm-img" className={styles.img} />
          <h3 className={styles.contentText}>Pharm Easy</h3>
          <p className={styles.description}>
            It is a E-commerce based website where you can sign and login you
            can see filtering and sorting with categories.
          </p>

          <ul className={styles.skills}>
            <li className={styles.skill}>HTML</li>
            <li className={styles.skill}>CSS</li>
            <li className={styles.skill}>JavaScript</li>
          </ul>

          <div className={styles.links}>
            <a
              href={"https://github.com/srudhi6383/pharmeasy_clone"}
              className={styles.link}
            >
              Github
            </a>
            <a
              href={"https://magnificent-pie-033e94.netlify.app/"}
              className={styles.link}
            >
              Demo
            </a>
          </div>
        </div>

        <div className={styles.content}>
          <img src={practiceProject} alt="project-img" className={styles.img} />
          <h3 className={styles.contentText}>Judicious Income</h3>
          <p className={styles.description}>
            It's my first react project in this i created a basic react app
            where user can see the various options in navbar.
          </p>

          <ul className={styles.skills}>
            <li className={styles.skill}>HTML</li>
            <li className={styles.skill}>CSS</li>
            <li className={styles.skill}>React</li>
            <li className={styles.skill}>Redux</li>
          </ul>

          <div className={styles.links}>
            <a
              href={"https://github.com/affanansarii/reactProject"}
              className={styles.link}
            >
              Github
            </a>
            <a
              href={"https://react-project-sandy-one-49.vercel.app/"}
              className={styles.link}
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
