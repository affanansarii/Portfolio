import styles from "./About.module.css";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="se=w2iting with a laptop"
          className={styles.aboutImg}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="cursor-icon" />

            <div className={styles.aboutItemText}>
              <h2>Summary</h2>

              <p>
                Passionate full-stack developer certified from Masai. 1200 hours
                of hands-on experience to develop many websites/applications.
                Have a wide range of front-end and back-end skills like HTML,
                CSS, JAVA, and JavaScript. Build 3+ projects from scratch.
                Solved more than 400 data structure questions
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="cursor-icon" />

            <div className={styles.aboutItemText}>
              <h2>March 2023 - January 2024</h2>

              <h3>Full Stack Development</h3>

              <p>
                MASAI SCHOOL • Masai School is a 11 to 11 coding school. • I
                Learned coding, DSA, and professional etiquette from Masai.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="cursor-icon" />

            <div className={styles.aboutItemText}>
              <h2>June 2018 - August 2021</h2>

              <h3>Diploma in Computer Engineering</h3>

              <p>MSBTE, MUMBAI • I have my Diploma from MSBTE</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
