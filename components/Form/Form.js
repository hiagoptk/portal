import styles from "../../styles/Form.module.css"

const FormTarot = () => {
    return (
        <div>
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
                        <option value="Select" defaultValue disabled="">Leitura...</option>
                        <option value="Leitura Geral">Leitura Geral</option>
                        <option value="Leituras de Amor">Leituras de Amor</option>
                        <option value="Mandala de Ano Novo">Mandala de Ano Novo</option>
                        <option value="Mandala Astrológica">Mandala Astrológica </option>
                    </select>
                    <br />
                    <label htmlFor="message">Message</label><br />
                    <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
                </fieldset>
                <input className={styles.btnForm} type="submit" value="Send Message" />
            </form>
        </div>
    );
}

const FormReiki = () => {
    return (
        <div>
            <form id="fs-frm" name="department-contact-form" acceptCharset="utf-8" className={styles.form} action="https://formspree.io/f/mayagqae" method="post">
                <fieldset id="fs-frm-inputs">
                    <label htmlFor="full-name">Seu nome completo</label>
                    <input type="text" name="name" id="full-name" placeholder="Primeiro e Ultimo" required="" />
                    <br />
                    <label htmlFor="email-address">Email</label><br />
                    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                    <br />
                    <label htmlFor="department"> Assunto</label><br />
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
                    <br />
                    <label htmlFor="message">Message</label><br />
                    <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
                </fieldset>
                <input className={styles.btnForm} type="submit" value="Send Message" />
            </form>
        </div>
    );
}

export default FormTarot;
