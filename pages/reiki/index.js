import styles from '../../styles/Reiki.module.css';
import {NavBar} from '../../components/HeaderPages/NavBar'
import FooterPage from '../../components/FooterPages/FooterPage'


const Reiki = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.main}>
                <div className={styles.textBox}>
                    <h1 className={styles.title}>Reiki</h1>
                    <p className={styles.description}>
                    Reiki é um sistema de harmonização energética desenvolvido por Mikao Usui no Japão.  
                    Com pouyco menos de 1 século de existencia, esse sistema já vem sendo utilizando ao redor do mundo, 
                    e até mesmo o Sistema Único de Saúde Brasileiro (SUS) reconhece o Reiki como boa prática de terapia 
                    auxiliar no tratamento de paciêntes, reconhecendo não só a eficácia do reiki para tal, 
                    como também a profissionalização do terapeuta reiki.
                    </p>
                    <p className={styles.description}>
                    Em meu clã, tratamos o reiki como parte inicial do treinamento e desenvolvimento de novos membros. 
                    Reconhecemos no reiki a capacidade transformadora do self. Com isso, nosso primeiro estágio de 
                    treinamento, que visa compreender os fluxos energéticos do corpo, os muitos corpos que possúimos, e 
                    lidar com nossos aspectos psicológicos mais básicos, se inicia por meio desta ferramenta. Por tocar 
                    em todos esses pontos de fomra suscinta e gentil, escolhemos integrar-lo ao nosso corpo de prática.
                    </p>
                    <p className={styles.description}>
                    No entando, devido ao escopo do clã, nosso treinamento visa se aprofundar no trabalho com o reiki 
                    para além do convencional. Desenvolvemos técnicas, treinamentos e práticas que são exclusivas nossas, 
                    e apesar de serem totalmente integradas à pratica reikiana, reconhecemos que tais atos são exclusivos 
                    à nosso grupo.
                    </p>
                </div>
                <form id="fs-frm" name="department-contact-form" acceptCharset="utf-8" className={styles.form} action="https://formspree.io/f/mayagqae" method="post">
                    <fieldset id="fs-frm-inputs">
                        <label htmlFor="full-name">Seu nome completo</label>
                        <input type="text" name="name" id="full-name" placeholder="Primeiro e Ultimo" required=""/>
                        <br/>
                        <label htmlFor="email-address">Email</label><br/>
                        <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
                        <br/>
                        <label htmlFor="department"> Assunto</label><br/>
                            <select name="department" id="department" required="">
                                <option value="Select" defaultValue >Sessão...</option>
                                <option value="Sessão Geral">Sessão Geral</option>
                                <option value="Terapia para Casal">Terapia para Casal</option>
                                <option value="Problemas Físicos">Problemas Físicos</option>
                                <option value="Problemas Emocionais">Problemas Emocionais</option>
                                <option value="Problemas Espirituais">Problemas Espirituais</option>
                                <option value="Quero largar meu Vício">Quero largar meu Vício</option>
                                <option value="Terapia com cristais">Terapia com cristais</option>
                            </select>
                        <br/>
                        <label htmlFor="message">Message</label><br/>
                        <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
                    </fieldset>
                    <input className={styles.btnForm} type="submit" value="Send Message"/>
                </form>
            </div>
            <FooterPage />
        </div>
    );
};

export default Reiki;