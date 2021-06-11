import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'


export const siteTitle = 'Hogwarts School Brochure App'

export default function Layout ({ children, home }) {
	return (
		<Head>
			<title>Hogwarts School Brochure</title>
			<meta name="Brochure APP" content="Created as brochure" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)
}