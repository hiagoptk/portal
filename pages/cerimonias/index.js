
import FooterPage from "../../components/FooterPages/FooterPage";
import { NavBar } from "../../components/HeaderPages/NavBar";
import styles from "../../styles/Cerimonia.module.css";
import { GiPentacle } from "react-icons/gi";
import { FormCerimonia } from "../../components/Form/FormCerimonia"
import { Description } from "../../components/Cerimonia/Description"
import { useState } from 'react';




const Bruxaria = () => {

    const [view, setView] = useState(false);

    const handleShowClick = () =>{
        setView(true);
    }

    const handleHideClick = () => {
        setView(false)
    }

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2 className={styles.title}>Cerimônias Publicas</h2>
                    
                        <Description />
                    
                    
                    
                  


                    <FormCerimonia />


                </div>


            </div>

            <FooterPage />
        </>
    );
}

export default Bruxaria;