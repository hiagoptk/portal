import { MdBuild } from "react-icons/md";
import FooterPage from "../../components/FooterPages/FooterPage";
import { NavBar } from "../../components/HeaderPages/NavBar";
import styles from "../../styles/Bruxaria.module.css";
const Bruxaria = () => {
    return (
        <>
        <NavBar />
        <div className={styles.container}>
            <div className={styles.box}>
                <p><MdBuild/></p>
                <br/>
                <h3>Página em Construção</h3>
            </div>
        </div>
        <FooterPage/>
        </>
    );
}

export default Bruxaria;