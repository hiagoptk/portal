import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {NavBar} from '../components/HeaderPages/NavBar'
import FooterPage from '../components/FooterPages/FooterPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hiago Patrick </title>
        <meta name="description" content="Portal de Informações sobre Reiki, Tarot, Magia, Programação e Arte." />
        <meta charSet="utf-8"/>
      </Head>
 
      <NavBar />

      <div className={styles.container}>
        <div className={styles.box}> 
          
          <h1> Feliz encontro!</h1>
          <h3>Pressumo que esteja aqui pois tem desejos que quer realizar e dúvidas que precisa sanar. Farei o possível pra te ajudar!</h3>
          
        </div>

        <div className={styles.btnBox}>
          <Link href={"/tarot"} passHref>
            <div className={styles.btnYellow}>
              <h3>Tarot</h3>
            </div>
          </Link>
      
          <Link href={"/reiki"} passHref>
            <div className={styles.btnBlue}>
              <h3>Reiki</h3>
            </div>
          </Link>

        </div>
      </div>
      <FooterPage />
 
    </>
  )
}
