import {FaSun, FaBars, FaMoon, FaCode, FaPaintBrush, FaHandSparkles, FaJoint, FaHome, FaBrush, FaStar} from 'react-icons/fa'
import {CgCardSpades} from 'react-icons/cg'
import Link from 'next/link'
import SideMenu from '../SideMenu/SideMenu';
import styles from '../../styles/HeaderPage.module.css'



const HeaderPage = () => {
    return (
        <navbar className={styles.navBlack}>
            <nav className={styles.menu}>
                <Link href="/" passHref><h3 className={styles.title}>Hiago <FaSun className="sun"/> Patrick</h3></Link>
                <button id="menuBtn" className={styles.show} ><FaBars/></button>
            </nav>
            <SideMenu id="aside"  />
        </navbar>
    );
};

export default HeaderPage;

