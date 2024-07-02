import styles from './ContactStyles.module.css';
function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Get in Touch with Me</h1>
        <form action=''>
            <div className='formGroup'>
                <label htmlFor='name' hidden>
                    Name
                </label>
                <input type='text' name='name' id='name' placeholder='Josh Pandit' required />
            </div>

            <div className='formGroup'>
                <label htmlFor='email' hidden>
                    Email
                </label>
                <input type='text' name='email' id='email' placeholder='jp44@xyz.com' required />
            </div>

            <div className='formGroup'>
                <label htmlFor='message' hidden>
                    Name
                </label>
                <textarea name='message' id='message' placeholder='Lets Connect?' required ></textarea>
            </div>
            <input className='hover btn' type='submit' value="Submit" />
        </form>
    </section>
 
  )
}

export default Contact
