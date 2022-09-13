import styles from "../../styles/Form.module.css"
import { NavBar } from "../../components/HeaderPages/NavBar"
import FooterPage from "../../components/FooterPages/FooterPage"

const Contato = () => {
    return (
        <>
        <NavBar />
        <div className={styles.container}>
            <div className={styles.box}>
                <h3>Contato</h3>
                <p>
                    Utilize o formulário abaixo para enviar um email solicitando maiores informações sobre a <b> Mentoria de Aprendizado de Tarot</b> 
                    ou sobre os <b>Tratamentos de Reiki</b>, bem como minha agenda para <i>marcar consultas e avaliações.</i>
                </p> <br />
                <form id="fs-frm" name="department-contact-form" acceptCharset="utf-8" className={styles.form} action="https://formspree.io/f/mayagnrd" method="post">
                    <fieldset id="fs-frm-inputs">
                        <label htmlFor="full-name">Seu nome completo</label>
                        <input type="text" name="name" id="full-name" placeholder="Primeiro e Ultimo" required="" />
                        <br />
                        <label htmlFor="email-address">Email</label><br />
                        <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                        <br />
                        <label htmlFor="department"> Assunto</label><br />
                        <select name="department" id="department" required="">
                            <option value="Select" defaultValue disabled="">Selecione uma opção...</option>
                            <option value="Mentoria de Tarot">Mentoria de Tarot</option>
                            <option value="Tratamentos Reiki">Tratamentos Reiki</option>
                            <option value="Magia e Feitiçaria">Magia e Feitiçaria</option>
                            <option value="Outros">Outros</option>
                        </select>
                        <br />
                        <label htmlFor="message">Message</label><br />
                        <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
                    </fieldset>
                    <input className={styles.btnForm} type="submit" value="Send Message" />
                </form>
            </div>
        </div>
        <FooterPage />
        </>
    );
}

export default Contato;