import styles from './HeroStyles.module.css';
import heroImg from  '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitterLight.svg';
import linkedlnIcon from '../../assets/linkedlnLight.svg';
import githubIcon from '../../assets/githubLight.svg';
import CV from '../../assets/Souradip_Dasgupta(CV) Swipe.pdf'
import { useTheme } from '../../common/ThemeContext';
function Hero() {
 const {theme,toggleTheme} =useTheme();


  return <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile Picture' />
    <img className={styles.colorMode} src={themeIcon} alt='Light/Dark Mode' onClick={toggleTheme} />
    </div>

    <div className={styles.info}>
      <h1>
        Souradip
        <br/>
        Dasgupta
        </h1>
    <h3>FullStack Developer</h3>  
    <span>
        <a href='https://twitter.com/' target='_blank'>
        <img src={twitterIcon} alt='Twitter icon' />
        </a>
        
        <a href='https://linkedln.com/' target='_blank'>
        <img src={linkedlnIcon} alt='Linkedln icon' />
        </a>

        <a href='https://github.com/' target='_blank'>
        <img src={githubIcon} alt='Github icon' />
        </a>
        
        
    </span>
    <p>
    From Pixels to Performance: A Full Stack Developer Journey from India
    </p>

    <a href={CV} download>
    <button className='hover'>
        Hire Me
    </button>
    </a>
    </div>
  </section>
}

export default Hero
