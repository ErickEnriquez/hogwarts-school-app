import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from './Header'
import Footer from './Footer'
export const siteTitle = 'Hogwarts School Brochure App'

export default function Layout ({ children, home }) {
	return (
		<div className={`${styles.container}`}>
			<Head>
				<title>{siteTitle}</title>
				<meta name="Brochure APP" content="Created as brochure" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div id="content-body">
				{children}
			</div>
			<Footer />
		</div >

	)
}