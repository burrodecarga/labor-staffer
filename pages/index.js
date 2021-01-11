import Head from 'next/head'
import styles from '../styles/Home.module.css'
import botton from '../components/Button.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Labor Staffer</title>
        <link rel="icon" href="assets/logo/icon_laucher.png" />

      </Head>
      <main className={styles.main}>

        <h1 className={styles.title}>
          Labor-Staffer
        </h1>
         <button className={styles.button}>Login with linkdin</button>
        </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="assets/logo/ic_launcher.png" alt="Rokave-Henriquez" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
