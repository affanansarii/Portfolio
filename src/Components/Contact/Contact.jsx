import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedInIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import phoneIcon from "../../assets/contact/phoneIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>

        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="email-icon" />
          <a href="mailto:affanansarii7860@gmail.com" id="contact-email">
            affanansarii7860@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img src={linkedInIcon} alt="linkedin-icon" />
          <a href="https://www.linkedin.com/in/affan-ansari-702110237/">
            linkedin.com/affanansarii
          </a>
        </li>

        <li className={styles.link}>
          <img src={githubIcon} alt="github-icon" />
          <a href="https://github.com/affanansarii">github.com/affanansarii</a>
        </li>

        <li className={styles.link}>
          <img src={phoneIcon} alt="phone-icon" className={styles.phone}/>
          <a href="tel:+919021157687" id="contact-phone">
            Mobile +91 902115687
          </a>
        </li>
      </ul>
    </footer>
  );
};
