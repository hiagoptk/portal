import {FaSun, FaBars, FaMoon, FaCode, FaPaintBrush, FaHandSparkles, FaJoint, FaHome, FaBrush, FaStar} from 'react-icons/fa'
import {CgCardSpades} from 'react-icons/cg'
import Link from 'next/link'

import styles from '../../styles/HeaderPage.module.css'
import { useState } from 'react';



const HeaderPage = () => {

    const [sideMenu, setSideMenu] = useState(false);

    const handleHideClick = () => {
        setSideMenu(false);
    };

    const handleShowClick = () => {
        setSideMenu(true);
    }

    return (
        <navbar className={styles.navBlack}>
            <nav className={styles.menu}>
                <Link href="/" passHref><h3 className={styles.title}>Hiago <FaSun className={styles.sun}/> Patrick</h3></Link>
                <button id="menuBtn" onClick={handleShowClick} className={styles.show} ><FaBars/></button>
            </nav>
            
            <div className={sideMenu ? styles.show : styles.hide }>
                <div id="sideMenu" className={styles.asideMenu}>
                    <button onClick={handleHideClick} className={styles.closebtn} >&times;</button>
                    <p className={styles.itemMenu}><Link href="/" passHref onClick={handleHideClick}> Home </Link> <FaHome /></p>
                    <p className={styles.itemMenu}><Link href="/tarot"passHref > Tarot  </Link><CgCardSpades/></p>
                    <p className={styles.itemMenu}><Link href="/" passHref>Artes </Link> <FaPaintBrush /> </p>
                    <p className={styles.itemMenu}><Link href="/reiki"passHref>Reiki </Link> <FaHandSparkles /> </p>
                    <p className={styles.itemMenu}><Link href="/bruxaria" passHref>Bruxaria </Link> <FaStar /> </p>
                    <p className={styles.itemMenu}><Link href="/portifolio" passHref>Portifolio</Link> <FaCode /></p>
                </div>
            </div>
             
        </navbar>
    );
};

export default HeaderPage;

