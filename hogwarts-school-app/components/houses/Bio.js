
import styles from '../../styles/Houses.module.scss'
import Image from 'next/image'
const Bio = (props) => {
	return (
		<>
			{props.title ? <h2 >{props.title}</h2> : null}
			<section className={styles.bio}>
				<div className={styles.image}>
					<h3>{props.name}</h3>
					<Image
						src={props.image}
						alt={`${props.name} image`}
						height={props.height}
						width={props.width}
					/>
				</div>
				<p className={styles.bioPara}>{props.bio}</p>
			</section>
		</>
	)
}

export default Bio
