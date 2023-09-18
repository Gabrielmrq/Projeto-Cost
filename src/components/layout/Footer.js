import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
// import styles from './Footer.module.css'
import styles from '../../styles/stylesLayout/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaInstagram></FaInstagram></li>
                <li><FaLinkedin></FaLinkedin></li>
                <li><FaGithub></FaGithub></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2023 </p>
        </footer>
    )
}

export default Footer