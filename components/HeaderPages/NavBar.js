import {FaSun, FaBars, FaBroom, FaMoon, FaCode, FaPaintBrush, FaHandSparkles, FaJoint, FaHome, FaBrush, FaStar} from 'react-icons/fa'
import {CgCardSpades} from 'react-icons/cg'
import Link from 'next/link'

import styles from '../../styles/NavBar.module.css'
import { useState } from 'react';



const NavBar = () => {

    const [sideMenu, setSideMenu] = useState(false);

    const handleHideClick = () => {
        setSideMenu(false);
    };

    const handleShowClick = () => {
        setSideMenu(true);
    }

    return (
        <nav className={styles.navBlack}>
            <div className={styles.menu}>
                <Link href="/" passHref><h3 className={styles.title}>Hiago <FaSun className={styles.sun}/> Patrick</h3></Link>
                <button id="menuBtn" onClick={handleShowClick} className={styles.show} ><FaBars/></button>
            </div>

            <div className={sideMenu ? styles.show : styles.hide }>
                <div id="sideMenu" className={styles.asideMenu}>
                    <button onClick={handleHideClick} className={styles.closebtn} >&times;</button>
                    <p className={styles.itemMenu}><Link href="/" passHref > Home </Link> <FaHome /></p>
                    <p className={styles.itemMenu}><Link href="/tarot"passHref > Tarot  </Link><CgCardSpades/></p>
                    <p className={styles.itemMenu}><Link href="/reiki"passHref>Reiki </Link> <FaHandSparkles /> </p>
                    <p className={styles.itemMenu}><Link href="/bruxaria" passHref>Bruxaria </Link> <FaBroom /> </p>
                    <p className={styles.itemMenu}><Link href="/about" passHref>Sobre Mim</Link> <FaCode /></p>
                </div>
            </div>

        </nav>
    );
};

export {NavBar};