import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Image from 'next/image'
import styles from '../../styles/Houses.module.scss'
import data from '../../../data/housesInfo'
import { useEffect, useState } from 'react'
import Traits from '../../components/houses/Traits'
import Bio from '../../components/houses/Bio'
import axios from 'axios'

const House = () => {
	const router = useRouter()
	const { house } = router.query

	const [houseActive, setHouse] = useState(false)
	const [characters, setCharacters] = useState(null)

	const getHouseInfo = async () => {
		//need to wait for data to be received from "data" object in data folder about houses
		const selectedHouse = await data.houses[house]
		setHouse(selectedHouse)
	}

	const getCharacters = async () => {
		const url = `http://hp-api.herokuapp.com/api/characters/house/${house}`
		const charactersList = await axios.get(url)
		setCharacters(charactersList.data)

	}
	//get house info after page load, since not doing this causes houseInfo to return undefined and break component
	useEffect(() => {
		getHouseInfo()
		getCharacters()
	})
	const notableCharacters = characters ? characters.map((item, index) => {
		return (
			<div key={index}>
				<Image
					src={item.image}
					alt={item.name}
					width="100"
					height="130"
				/>
				<p>{item.name}</p>
			</div>
		)
	}) : null

	return (
		<Layout>
			{houseActive ? (
				<main className={styles.container}>
					<div className={styles.content}>
						<h1 className={styles.title}>{houseActive.title}</h1>
						<Image
							src={houseActive.logo}
							alt={`${house} logo`}
							width="300"
							height="300"
						/>
						<p className={styles.motto}>Motto: <br />{houseActive.motto}</p>
						<Traits traits={houseActive.traits} />
						<br />
						<hr className={styles.whiteLine} />
						<Bio
							name={houseActive.founder.name}
							image={houseActive.founder.image}
							bio={houseActive.founder.bio}
							height={350}
							width={200}
							title={' House Founder'}
						/>
						<br />
						<hr className={styles.whiteLine} />
						<h3>Noteable Alumni</h3>
						<div className={styles.notableCharacters}>
							{notableCharacters}
						</div>
					</div>
				</main>
			) : null
			}
		</Layout>
	)
}
export default House