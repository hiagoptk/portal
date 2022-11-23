import { MdBuild } from "react-icons/md";
import FooterPage from "../../components/FooterPages/FooterPage";
import { NavBar } from "../../components/HeaderPages/NavBar";
import styles from "../../styles/Bruxaria.module.css";
import { GiPentacle } from "react-icons/gi";
import { ActionBtnPages } from '../../components/ActionBtnPages/ActionBtnPages';




const Bruxaria = () => {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2 className={styles.title}>Bruxaria</h2>

                    <div className={styles.description}>
                        <p>
                            Praticante de Bruxaria e Feitiçaria desde cedo, atualmente presto serviços espirituais, executo
                            trabalhos na linha do Amor, da Saúde, da Proteção, Prosperidade e Espiritualidade num geral, abrindo
                            trancando dons, caminhos e situações diversas na vida daqueles que me procuram pedindo auxílio.
                        </p><br />

                        <p>
                            Entre as muitas técnicas e sistemas que utilizo, as principais procuras pra trabalhos espirituais
                            se concentram em Caixas Energéticas, Mandalas de Cristais, Magia de Velas, Magia com Ancestrais e
                            Espiritos Aliados, Caldeirão do Amor, Corte de Laços, e muitos outros.
                        </p><br />

                        <p>
                            Também executo mensalmente 4 Rituais Coletivos. Nesses ritos, é seguida uma vigília de 12 horas, entre orações,
                            encantamentos e oferendas, buscando trabalhar para o sucesso daqueles que me procuraram.
                            Os ritos são chamados de <b>Borbulha do Amor</b>, <b>Portal da Prosperidade</b>, <b>Chamas da Saúde</b> e
                            <b> Ninho de Proteção</b>.
                        </p><br />

                        <p>
                            Você pode acessar o catálogo de serviços que ofereço atualmente clicando no botão amarelo abaixo, na
                            sessão Feitiçaria.
                        </p>s
                    </div>
                </div>

                <ActionBtnPages />
            </div>
            <FooterPage />
        </>
    );
}

export default Bruxaria;