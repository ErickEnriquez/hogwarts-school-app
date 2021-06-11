import styles from '../styles/Home.module.scss'
import IntroSection from '../components/IntroSection'
import HousesGrid from '../components/home/HousesGrid'
import RowTwo from '../components/home/RowTwo'
import Layout from '../components/Layout'

export default function Home () {
  return (
    <Layout >
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
    </Layout >
  )
}
