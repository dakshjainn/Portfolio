import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkdinLight from "../../assets/linkedin-light.svg";
import linkdinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggletheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkdinIcon = theme === "light" ? linkdinLight : linkdinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggletheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Daksh <br /> Jain
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="htttps://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="htttps://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="htttps://linkdin.com/" target="_blank">
            <img src={linkdinIcon} alt="linkdin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Computer Science undergraduate based in Bangalore, pursuing degrees
          from Scaler School of Technology, BITS Pilani, and WOOLF University.
          Passionate about technology and driven to build a career in the field.
        </p>
        <a href="" >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
