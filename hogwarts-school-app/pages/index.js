import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import IntroSection from '../components/introSection'
import HousesGrid from '../components/home/housesgrid'
import RowTwo from '../components/home/rowTwo'

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
        <HousesGrid />
        <br />
        <hr className={styles.whiteLine} />
        <RowTwo />
      </main >
    </div >
    
  )
}
