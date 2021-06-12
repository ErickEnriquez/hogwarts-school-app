import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

export default function Card (props) {
	
	const link = props.link || `/${props.name}` 

	const backgroundClass = styles[`${props.name}Background`]

	return (
		<Link href={link}>
			<a className={`${styles.card} ${backgroundClass}`}>
				<h2 className={styles.cardTitle}>{props.name}</h2>
				{props.image ?
					(<Image
						src={props.image}
						alt={`${props.name} Crest`}
						width='100'
						height='100'
					/>
					) : null
				}
			</a>
		</Link>
	)
}
