import React from 'react'
import Link from 'next/link'
import styles from '../styles/component-styles/header.module.scss'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faTwitter } from '@fortawesome/free-brands-svg-icons'
//import { faFacebook } from '@fortawesome/free-brands-svg-icons'
//import { faInstagram } from '@fortawesome/free-brands-svg-icons'
//import { config } from '@fortawesome/fontawesome-svg-core';
//config.autoAddCss = false; /* eslint-disable import/first */


class Header extends React.Component {
	render () {
		//const icons = (
		//<>
		//<FontAwesomeIcon icon={faTwitter} />
		//<FontAwesomeIcon icon={faFacebook} />
		//<FontAwesomeIcon icon={faInstagram} />
		//</>
		//)
		return (
			<section className={`${styles.row} ${styles.container}`}>
				<h6 className={styles.item_1}>Follow us on twitter, fb, insta

				</h6>
				<h3 className={styles.item_2}> Hogwarts School for Witchcraft and Wizardry</h3>
				<div className={styles.item_3}></div>
				<Link href="/contact-us">
					<a className={`${styles.button} ${styles.item_4}`} href='/contact-us'>
						Contact Us
							</a>
				</Link>
			</section>
		)
	}
}

export default Header