import styles from '../Projects/ProjectsStyles.module.css';
import ChatNet from  '../../assets/chatnet.png';
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer} >
            <a href='https://github.com/GeeekySouro003/ChatNet' target='_blank'>
            <img className='hover' src={ChatNet} alt='ChatNet logo' />
            <h2>ChatNet</h2>
            <p>Real Time Chat App</p>
        </a>
        </div>
    </section>
  )
  
}

export default Projects
