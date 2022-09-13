import {FaMoon} from 'react-icons/fa';
import styles from '../../styles/FooterPage.module.css';


const FooterPage = () => {
    return (
        <div className={styles.footer}>
            <p>Made with Love by Hiago Patrick <FaMoon className={styles.moon}/></p>
        </div>
    );
}

export default FooterPage; 