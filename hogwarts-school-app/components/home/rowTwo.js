
import styles from '../../styles/Home.module.scss'
import Card from '../home/card'

const data = [
	'Muggle',
	'Wizard',
	'Alumni'
]

const rowTwo = () => {

	const cards = data.map(element => {
		return (
			<Card
				name={element}
				key={element}
			/>
		)
	})
	return (
		<>
			<h3>Information for New Families as well as Alumni</h3>
			<div className={styles.grid}>
				{cards}
			</div>
		</>
	)
}

export default rowTwo


