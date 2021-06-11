import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Footer () {
	return (
		
		<footer className={styles.footer}>
			<Link href='/about-us' >
				<a>Contact Us</a>
			</Link>
			<Link href='/gallery' >
				<a>Gallery</a>
			</Link>
			<Link href='/contact-us' >
				<a>Employment</a>
			</Link>
			<Link href='/staff' >
				<a>Our Staff</a>
			</Link>
			<Link href='/contact-us' >
				<a>Contact Us</a>
			</Link>
		</footer>
	)
}