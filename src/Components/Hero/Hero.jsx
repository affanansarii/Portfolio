import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/resumephoto1.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Affan</h1>

        <p className={styles.description}>
          As a Full Stack Web Developer, I bring a versatile skill set
          encompassing both frontend and backend technologies. Proficient in
          HTML, CSS, and JavaScript, I design and implement responsive,
          user-friendly interfaces. On the frontend, I leverage frameworks like
          React. With a commitment to clean code and an aptitude for
          problem-solving, I contribute to the development of scalable and
          efficient web applications.
        </p>

        <a
          className={styles.contactBtn}
          href="mailto:affanansarii7860@gmail.com"
        >
          Contact Me
        </a>
      </div>

      <img src={heroImage} alt="hero-image" className={styles.heroImg} />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
