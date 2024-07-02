import styles from  '../Skills/SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
function Skills() {
  return (
<section id = "skills" className={styles.container} >
    <h1 className='sectionTitle'>Skills</h1>
    <div className={styles.skillList}>
       <SkillList src={checkMarkIcon} skill="HTML"/>
       <SkillList src={checkMarkIcon} skill="CSS"/>
       <SkillList src={checkMarkIcon} skill="Javascript"/>
       <SkillList src={checkMarkIcon} skill="ReactJs"/>
       <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
    </div>
    <hr/>
    <div className={styles.skillList}>
       <SkillList src={checkMarkIcon} skill="NodeJs"/>
       <SkillList src={checkMarkIcon} skill="ExpressJs"/>
       <SkillList src={checkMarkIcon} skill="Python"/>
       <SkillList src={checkMarkIcon} skill="Flask"/>
    </div>
    <hr />
     
    <div className={styles.skillList}>
       <SkillList src={checkMarkIcon} skill="MySql"/>
       <SkillList src={checkMarkIcon} skill="MongoDB"/>
    </div> 
    <hr/>

    <div className={styles.skillList}>
       <SkillList src={checkMarkIcon} skill="Git"/>
       <SkillList src={checkMarkIcon} skill="Netlify"/>
       <SkillList src={checkMarkIcon} skill="GCP"/>
       <SkillList src={checkMarkIcon} skill="Vercel"/>
    </div>
</section>
  )
}

export default Skills