import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

class HouseCard extends React.Component {
	render () {
		const link = `/${this.props.houseName}`
		const image = `/images/${this.props.houseName}.png`
		const backgroundClass = styles[`${this.props.houseName}Background`]
		return (
			<Link href={link}>
				<a className={`${styles.card} ${backgroundClass}`}>
					<h2 className={styles.cardTitle}>{this.props.houseName}</h2>
					<Image
						src={image}
						alt={`${this.props.houseName} Crest`}
						width='100'
						height='100'
					/>
				</a>
			</Link>
		)
	}
}

export default HouseCard