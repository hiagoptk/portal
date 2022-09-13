import Image from "next/image";
import styles from "../../styles/About.module.css";
import { NavBar } from "../../components/HeaderPages/NavBar";
import FooterPage from "../../components/FooterPages/FooterPage";
import Link from "next/link";

import { FiInstagram, FiGithub } from "react-icons/fi"



const About = () => {
    return (
        <>
        <NavBar />
        <div className={styles.container}>
            <div className={styles.box}>
                <h3 className={styles.title}>Hiago Patrick</h3>
                <Image 
                    src={"/perfil.jpg"} 
                    alt={"Foto de Perfil"} 
                    width={1000}
                    height={1000}
                    className={styles.imgPerfil}
                />
                <h4>27 anos | Rio de Janeiro - RJ</h4>
            </div>

            <div className={styles.description}>
                <p>
                No caminho da espíritualidade desde muito novo, aprendi cedo que essa 
                era a trilha que eu queria seguir pra minha vida. Lembro 
                de ainda muito criança já ter vontade de ser coroinha na igreja, de participar 
                do Johrei, de frequentar os centros de mesa branca com a minha mãe
                e fazer questão de participar dos grupos de criança na época. 
                </p><br/>

                <p>
                Obviamente o tempo foi passando e eu acabei firmando minha presença numa 
                casa de Candomblé com a minha mãe por volta dos 12 anos depois de muito pedir. 
                Aos 13 eu comecei a ler livros de bruxaria que eu encontrei numa livraria a 
                caminho da escola. Aos 14 anos fui iniciado no Candomblé. Nessa época eu já vinha 
                com algumas práticas pessoais de bruxaria, no entando fiquei até os 15 anos sem 
                praticar nada, apenas me dedicando ao meu orixá. Depois desse período minha pratica
                de bruxaria volta com força, forma e caminho. 
                </p><br/>

                <p>
                Daí então eu fui me embrenhando cada vez mais nesse meio espiritual, 
                e através de muitos processos e etapas, encontrei alguns dos muitos propósitos
                que eu escolhi assumir na vida. <i>Ensinar, propagar conhecimento, estimular rodas de 
                conversa, auxiliar quem procura através do tarot, ser um farol pra quem precisa
                de ajuda</i>. Minha Arte anseia por <b>tocar</b> a vida daqueles que me rodeiam. Hoje em 
                dia sou Bruxo, Mestre Reikiano e venho lidando com o Tarot de forma profissional 
                desde 2017.
                </p><br/>

                <p>
                Agora, já com meus 27 anos, num processo contínuo de autoconhecimento, digo que respiro magia. 
                Vivo magia constantemente, e me orgulho de dedicar o máximo de tempo
                possível pra atuar nesse meio. Me dedico a áreas muito específicas como uma espécie 
                de <b>serviço pra vida</b>, fazer o bem pro mundo através do que amo fazer e do que faço bem.
                </p><br/>

                <p>
                Como Mestre em Reiki, busco desenvolver trabalhos de autoconhecimento e desenvolvimento 
                das tecnicas e habilidades reikianas, e incentivo a criação de grupos de estudos. 
                Num curso extenso e complexo, busco proporcionar aos meus alunos uma terra fértil, 
                possibilitando uma transformação saudável de sí mesmo. 
                Como terapeuta reikiano, atuo com 60% do meu tempo 
                aplicado ao reiki de forma gratuita, numa rotina diária de orações e mentalizações para 
                envio de reiki e tratamentos específicos. 
                </p><br/>

                <p>
                No Tarot, atualmente, me limito ao processo de Leitura e Mentoria, onde busco auxiliar o 
                aluno de forma individual e sem turma, com preço de Mentoria Acessível. 
                Através dela, auxilio o aluno com Leituras e Magias utilizando o Tarot como instrumento mágiko.
                </p><br/>

                <p>
                Além de Bruxo, Tarotista, e todo o restante da minha, bastante aconchegante, colcha de retalhos, 
                eu também sou um Artista Plástico amador, produzindo telas e pinturas em aquarela. Tenho um 
                fascínio por pinturas de retrato, expressões faciais e iluminação. Obviamente, meu trabalho 
                reflete bastante a minha espiritualidade, não é muito difícil de encontrar pinturas minhas 
                representando Deusas e Deuses antigos, seres mitológicos e folclóricos. Se quiser conhecer 
                um pouco mais da minha arte, você pode acessar meu <b>Instagram</b> no final dessa página.
                </p>

            </div>

            <div className={styles.social}>
                <Link href={"https://www.instagram.com/azebeni/"} passHref>
                    <div className={styles.btnInsta} >
                        <FiInstagram/>
                    </div>
                </Link>

                <Link  href={"https://github.com/hiagoptk"} passHref>
                    <div className={styles.btnArte} >
                        <FiGithub />
                    </div>
                </Link>
            </div>

        </div>
        <FooterPage />
        </>
    );
}

export default About;