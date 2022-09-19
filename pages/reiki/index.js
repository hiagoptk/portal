import styles from '../../styles/Reiki.module.css';
import { NavBar } from '../../components/HeaderPages/NavBar'
import FooterPage from '../../components/FooterPages/FooterPage'
import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa"
import { ActionBtnPages } from '../../components/ActionBtnPages/ActionBtnPages';

const Reiki = () => {
    return (
        <> 
            <NavBar />
            <div className={styles.container}>
              
                <div className={styles.box}>
                        
                    <h1 className={styles.title}>Reiki</h1>
                    
                    <div className={styles.description}>
                        <p>Reiki é um sistema de harmonização energética desenvolvido por Mikao Usui no Japão.</p>
                        <br/>
                        <p>Com pouco menos de 1 século de existencia, esse sistema já vem sendo utilizando ao redor do mundo,
                        e até mesmo o Sistema Único de Saúde Brasileiro (SUS) reconhece o Reiki como boa prática de terapia
                        auxiliar no tratamento de paciêntes, reconhecendo não só a eficácia do reiki para tal,
                        como também a profissionalização do terapeuta reiki.</p>
                        <br/>
                        <p>Atualmente meu ensino de Reiki está passando por reformulações, e por isso não tenho previsão para 
                            abrir turmas num futuro próximo. Todavia, sigo com o envio de reiki a distância, tratamentos prolongados,
                            caixas de cura e cirurgias espirituais quando cabível.
                        </p>
                        <br/>
                        <p>Entre os tratamentos auxiliares de modo contínuo, temos tratamentos para problemas físicos, espirituais,
                            emocionais e energéticos. Para mais informações, utilize o botão abaixo e entre em contato comigo pelo whatsapp.
                        </p>
                    </div>
                    
                    <ActionBtnPages />
                    
                </div>
            </div>
            <FooterPage />
        </>
    );
};

export default Reiki;