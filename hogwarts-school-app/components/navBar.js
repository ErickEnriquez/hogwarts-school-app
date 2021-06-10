import React from 'react'
import styles from '../styles/component-styles/navBar.module.scss'
import Link from 'next/link'

class navBar extends React.Component {
	render () {
		return (
			<div className={styles.navbar}>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about-us">
					<a>About us</a>
				</Link>
				<div className={styles.dropdown}>
					<button className={styles.dropbtn}>Our Houses
					</button>
					<div className={styles.dropdownContent}>
						<Link href="/gryffindor">
							<a>Gryffindor</a>
						</Link>
						<Link href="/hufflepuff">
							<a>Hufflpuff</a>
						</Link>
						<Link href="/ravenclaw">
							<a>RavenClaw</a>
						</Link>
						<Link href="/slytherin">
							<a>Slytherin</a>
						</Link>
					</div>
				</div>
				<Link href="/gallery">
					<a>Gallery</a>
				</Link>
				<Link href="/faq">
					<a>FAQ's</a>
				</Link>
				<Link href="/contact-us">
					<a>Contact us</a>
				</Link>
			</div >
		)
	}
}

export default navBar