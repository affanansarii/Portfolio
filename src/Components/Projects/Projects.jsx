import styles from "./Projects.module.css";
import quizProject from "../../assets/projects/quizProject.png";
import movixProject from "../../assets/projects/movixProject.png";
import autoPartsProject from "../../assets/projects/autoParts3.png";
import carRental from "../../assets/projects/car-rental1.png";
import pharmEasy from "../../assets/projects/pharmEasy1.png";
import googleGemini from "../../assets/projects/googleGemini.png";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>

            <div className={styles.projects}>
                <div className={styles.content}>
                    <img
                        src={quizProject}
                        alt="quiz-img"
                        className={styles.img}
                    />
                    <h3 className={styles.contentText}>Quiz</h3>
                    <p className={styles.description}>
                        Hey Guys, This is the Quiz App where you can play the
                        quiz game. It is based on a multiple choice questions
                        application.
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
                    <img
                        src={movixProject}
                        alt="project-img"
                        className={styles.img}
                    />
                    <h3 className={styles.contentText}>Movix Application</h3>
                    <p className={styles.description}>
                        Hey guys, i am sharing excited project that i build
                        using React Redux-tools and it has amazing features like
                        infinite
                    </p>

                    <ul className={styles.skills}>
                        <li className={styles.skill}>React</li>
                        <li className={styles.skill}>Redux</li>
                        <li className={styles.skill}>SCSS</li>
                    </ul>

                    <div className={styles.links}>
                        <a
                            href={"https://github.com/affanansarii/Movix"}
                            className={styles.link}
                        >
                            Github
                        </a>
                        <a
                            href={"https://movix-jet-alpha.vercel.app/"}
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
                    <h3 className={styles.contentText}>
                        Online Auto Parts Shop
                    </h3>
                    <p className={styles.description}>
                        It is an Online Auto Parts Shop. Which provide any parts
                        of your vehicles to your doorstep in a single click.
                    </p>

                    <ul className={styles.skills}>
                        <li className={styles.skill}>HTML</li>
                        <li className={styles.skill}>CSS</li>
                        <li className={styles.skill}>JavaScript</li>
                    </ul>

                    <div className={styles.links}>
                        <a
                            href={
                                "https://github.com/SursaChauhan/Online-Auto-Part-shop"
                            }
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
                        src={carRental}
                        alt="project-img"
                        className={styles.img}
                    />
                    <h3 className={styles.contentText}>Car Rental</h3>
                    <p className={styles.description}>
                        Car Rental is a MERN-Vite app with a booking system and
                        admin dashboard for managing cars and users.
                    </p>

                    <ul className={styles.skills}>
                        <li className={styles.skill}>MongoDB</li>
                        <li className={styles.skill}>Express</li>
                        <li className={styles.skill}>React</li>
                        <li className={styles.skill}>Node</li>
                    </ul>

                    <div className={styles.links}>
                        <a
                            href={
                                "https://github.com/affanansarii/Car-Rental-fullstack"
                            }
                            className={styles.link}
                        >
                            Github
                        </a>
                        <a
                            href={"https://car-rental-kappa-rouge.vercel.app"}
                            className={styles.link}
                        >
                            Demo
                        </a>
                    </div>
                </div>

                <div className={styles.content}>
                    <img
                        src={pharmEasy}
                        alt="pharm-img"
                        className={styles.img}
                    />
                    <h3 className={styles.contentText}>Pharm Easy</h3>
                    <p className={styles.description}>
                        It is a E-commerce based website where you can sign and
                        login you can see filtering and sorting.
                    </p>

                    <ul className={styles.skills}>
                        <li className={styles.skill}>HTML</li>
                        <li className={styles.skill}>CSS</li>
                        <li className={styles.skill}>JavaScript</li>
                    </ul>

                    <div className={styles.links}>
                        <a
                            href={
                                "https://github.com/srudhi6383/pharmeasy_clone"
                            }
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
                    <img
                        src={googleGemini}
                        alt="project-img"
                        className={styles.img}
                    />
                    <h3 className={styles.contentText}>Google Gemini</h3>
                    <p className={styles.description}>
                        Google Gemini Clone is an AI-powered chatbot with
                        Gemini-style interface and smooth user experience.
                    </p>

                    <ul className={styles.skills}>
                        <li className={styles.skill}>Responsive UI</li>
                        <li className={styles.skill}>CSS</li>
                        <li className={styles.skill}>React</li>
                    </ul>

                    <div className={styles.links}>
                        <a
                            href={
                                "https://github.com/affanansarii/gemini-clone"
                            }
                            className={styles.link}
                        >
                            Github
                        </a>
                        <a
                            href={"https://gemini-clone-psi-three.vercel.app"}
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
