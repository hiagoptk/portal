import styles from "../../styles/Cerimonia.module.css";

const FormCerimonia = () => {
    return (
        <div className={styles.container1}>
            <div className={styles.box1}>
                <div className={styles.formFieldset}>
                    <h2 className={styles.infoTitle}> Cerimônia Coletiva de Prosperidade 12/2022</h2>
                    <h4> Destravando o Caminho do Sucesso Financeiro</h4>
                    <br />

                    <h3>Pré-inscrição</h3>
                    <form id="fs-frm" name="form-cerimonia" acceptCharset="utf-8" action="https://formspree.io/f/xkneagkz" method="post">
                        <div className={styles.form}>
                            <label className={styles.frmName} htmlFor="full-name">Nome Completo<br />
                                <input type="text" name="name" id="full-name" placeholder="Sem abreviações" required=""></input>
                            </label> <br />

                            <label hmtlFor="data-nascimento">Data de Nascimento <br />
                                <input name="data-nascimento" id="data-nascimento" type="date" required=""></input> <br />
                            </label>

                            <label htmlFor="email-address">Email <br />
                                <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" /> <br />
                            </label>

                            <label htmlFor="cerimonia">Cerimônia <br />
                                <select name="cerimonia" id="cerimonia" required="">  <br />
                                    <option value="" selected="" disabled="">Qual cerimônia você teria interesse?</option>
                                    <option value="Prosperidade 2023">Prosperidade 2022</option>
                                    <option disabled value="Amor 2023">Amor 2023</option>
                                    <option disabled value="Proteção 2023">Proteção 2023</option>
                                    <option disabled value="Saúde 2023">Saúde 2023</option>
                                </select>
                            </label><br />

                            <label hmtlFor="Desconto">Código de Indicação <br />
                                <input type="text" name="desconto" id="desconto" placeholder="Foi indicado por um amigo?" />
                            </label>

                            <input type="hidden" name="_subject" id="email-subject" value="Department Contact Form Submission"></input>
                            <input className={styles.btnAgree} type="submit" value="Confirmar" />
                        </div> <br />

                    </form>

                </div>

            </div>
        </div>
    );
}

export { FormCerimonia };


