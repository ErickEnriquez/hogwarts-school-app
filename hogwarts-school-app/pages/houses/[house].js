import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Image from 'next/image'
import styles from '../../styles/Houses.module.scss'
import data from '../../../data/housesInfo'
import { useEffect, useState } from 'react'

const House = () => {
	const router = useRouter()
	const { house } = router.query

	const [houseActive, setHouse] = useState(false)

	const getHouseInfo = async () => {
		//need to wait for data to be received from "data" object in data folder about houses
		const selectedHouse = await data.houses[house]
		setHouse(selectedHouse)
	}
	//get house info after page load, since not doing this causes houseInfo to return undefined and break component
	useEffect(() => {
		getHouseInfo()
	})

	return (
		<Layout>
			{houseActive ? (
				<main className={styles.container}>
					<div>
						<h1 className={styles.title}>{houseActive.title}</h1>
						<Image
							src={houseActive.logo}
							alt={`${house} logo`}
							width="400"
							height="400"
						/>
						<p>motto {houseActive.motto}</p>
					</div>
				</main>
			) : null
			}
		</Layout>
	)
}
export default House