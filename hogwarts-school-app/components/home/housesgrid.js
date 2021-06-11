import React from 'react'
import styles from '../../styles/Home.module.scss'
import HouseCard from './card'

let houses = [
	{ houseName: 'gryffindor' },
	{ houseName: 'hufflepuff' },
	{ houseName: 'ravenclaw' },
	{ houseName: 'slytherin' }
]
class HousesGrid extends React.Component {
	render () {

		const cards = houses.map((element, index) => {
			return (
				<HouseCard
					key={index}
					name={element.houseName}
					image={`/images/${element.houseName}.png`}

				/>
			)
		})

		return (
			<>
				<h2> Our houses, click for more info</h2>
				<div className={styles.grid}>
					{cards}
				</div>
			</>
		)
	}
}

export default HousesGrid