
import styles from '../../styles/Home.module.scss'
import Card from './Card'

const data = [
	'muggle',
	'wizard',
	'alumni'
]

const RowTwo = () => {

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

export default RowTwo


