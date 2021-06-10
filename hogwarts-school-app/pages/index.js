import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import IntroSection from '../components/introSection'

export default function Home () {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Hogwarts School Brochure</title>
        <meta name="Brochure APP" content="Created as brochure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.heroImage}>
          <h1 className={styles.title}>
            Welcome to Hogwarts
        </h1>
        </div >
        <IntroSection />
        <hr className={styles.whiteLine} />
        this is another line
      </main >
    </div >
  )
}
