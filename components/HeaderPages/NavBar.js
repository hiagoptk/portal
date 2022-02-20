import styles from '../../styles/NavBar.module.css'


const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.txt}>
                <h1>Hiago Patrick</h1>
                <div className={styles.menu}>
                    <h4>Home</h4>
                    <h4>Sobre</h4>
                    <h4>Depoimentos</h4>
                    <h4>Agendar</h4>
                </div>
            </div>
        </nav>
    )
}

export {NavBar}