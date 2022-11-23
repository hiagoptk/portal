import styles from '../../styles/Tarot.module.css'
import { NavBar } from '../../components/HeaderPages/NavBar';
import FooterPage from "../../components/FooterPages/FooterPage";
import { ActionBtnPages } from '../../components/ActionBtnPages/ActionBtnPages';

const Tarot = () => {
    return (
        <>
            <NavBar />

            <div className={styles.container}>

                <div className={styles.box}>

                    <h2 className={styles.title}>
                        TAROT
                    </h2>

                    <div className={styles.description}>

                        <p>
                            Atualmente atendo clientes para diversos trabalhos e consultas com o Tarot.

                        </p><br></br>

                        <p>
                            Atendo consultas relacionadas a <i>amor, trabalho, saúde e espiritualidade</i>.Através do tarot é possível observar e analisar qualquer aspecto de sua vida, e com essa análise em mãos, o tarot te mostra como é possível vc se tornar <b>o Maestro</b> da Orquestra de sua <b>própria vida</b>.

                        </p><br></br>

                        <p>
                            Além do Atendimento com o Tarot, atualmente também tenho um trabalho de <b>Mentoria para Aprendizado de Tarot</b>, envolvendo o processo de <i>Leitura e Magia</i>.

                        </p><br></br>

                        <p>
                            A mentoria tem o propósito de guiar o estudante no processo de aprendizagem, acompanhando, propondo exercícios, discuções e trabalhos.

                        </p><br></br>

                        <p>
                            Na parte da magia, o foco principal é ajudar o estudante a compreender, descobrir e desenvolver tecnologias próprias para atuar magicamente com o Tarot.

                        </p><br></br>


                        <p>
                            Em nenhum dos casos existirá qualquer ligação espiritual ou mágika com os envolvidos no processo, tampouco trata-se de um grupo, tradição, caminho ou clã de qualquer ordem que seja.

                        </p><br></br>

                        <p>
                            Utilize o Formulário abaixo para enviar um email solicitando maiores informações para o processo de mentoria, ou utilize o botão e entre em contato pelo whatsapp para agendar uma consulta.
                        </p>

                    </div>

                    

                </div>
                <ActionBtnPages />
            </div>

            <FooterPage />
        </>
    );
}

export default Tarot;