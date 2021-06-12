import styles from '../../styles/Houses.module.scss'

const Traits = (props) => {

	const houseTraits = props.traits ? props.traits.map((element, idx) => {
		return (
			<span key={idx}>{element}</span>
		)
	}) : null
	return (
		<div>
			<h4>House Traits:</h4>
			<div className={styles.traitList}>
				{houseTraits}
			</div>
		</div>

	)
}

export default Traits
