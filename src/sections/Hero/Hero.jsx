import styles from './HeroStyles.module.css';
import heroImg from  '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitterLight.svg'
function Hero() {
  return <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile Picture' />
    <img className={styles.colorMode} src={themeIcon} alt='Light/Dark Mode' />
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
    </span>
    </div>
  </section>
}

export default Hero
