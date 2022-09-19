import Link from "next/link"
import styles from '../../styles/ActionBtnPages.module.css'
import { FaWhatsapp, FaWpforms } from "react-icons/fa"
import { BiFoodMenu } from "react-icons/bi";


const ActionBtnPages = () => {
    return (
        <>
            <div className={styles.btnBox}>
                <Link href={"/contato"} passHref>
                    <div className={styles.btnForm}>
                        <FaWpforms />
                    </div>
                </Link>

                <Link href={"https://wa.me/message/A44ZFN477MOUL1"} passHref>
                    <div className={styles.btnWpp}>
                        <BiFoodMenu />
                    </div>
                </Link>

                <Link href={"https://wa.me/message/A44ZFN477MOUL1"} passHref>
                    <div className={styles.btnWpp}>
                        <FaWhatsapp />
                    </div>
                </Link>
            </div>
        </>
    );
}

export { ActionBtnPages }