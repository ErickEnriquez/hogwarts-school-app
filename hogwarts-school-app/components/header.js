import React from 'react'
import Link from 'next/link'
import styles from '../styles/component-styles/header.module.scss'
import NavBar from '../components/navBar'
import Image from 'next/image'



class Header extends React.Component {
	render () {
		return (
			<>
				<section className={`${styles.row} ${styles.container}`}>
					<h6 className={styles.item_1}>
						Follow us on twitter, fb, insta
					</h6>
					<div className={styles.item_2}>
						<Image
							src='/images/school-crest.png'
							alt='school-crest'
							width='90'
							height='90'
						/>
						<h3>Hogwarts School for Witchcraft and Wizardry</h3>
					</div>
					<div className={styles.item_3}></div>
					<Link href="/contact-us">
						<a className={`${styles.button} ${styles.item_4}`}>
							Contact Us
							</a>
					</Link>
				</section>
				<NavBar />
			</>

		)
	}
}

export default Header