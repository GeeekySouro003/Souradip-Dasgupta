import styles from '../Projects/ProjectsStyles.module.css';
import ChatNet from  '../../assets/chatnet.png';
import InsightPulse from '../../assets/InsightPulse.png';
import Weather from '../../assets/Weather.png';
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer} >
         <ProjectCard src={ChatNet} link='https://github.com/GeeekySouro003/ChatNet' h2='ChatNet' p='Real Time Communication App'/>
       
         <ProjectCard src={InsightPulse} link='https://github.com/GeeekySouro003/InsightPulse' h2='InsightPulse' p='Customized Feedback System'/>
        
         <ProjectCard src={Weather} link='https://github.com/GeeekySouro003/Weather-App' h2='Weather-App' p='Weather Forecasting App'/>
        </div>
    </section>
  )
  
}

export default Projects
