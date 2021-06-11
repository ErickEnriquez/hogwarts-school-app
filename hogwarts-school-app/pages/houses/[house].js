import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import data from '../../../data/housesInfo'
import { useEffect, useState } from 'react'

const House = () => {
	const router = useRouter()
	const { house } = router.query

	const [houseActive, setHouse] = useState(false)

	const getHouseInfo = async () => {
		//need to wait for data to be received from data object in data folder about houses
		const selectedHouse = await data.houses[house]
		setHouse(selectedHouse)
	}
	//get house info after page load, since not doing this causes houseInfo to return undefined and break component
	useEffect(() => {
		getHouseInfo()
	})

	return (
		<Layout>
			<main className={styles.container}>
				{houseActive ? (
					<Image
						src={houseActive.logo}
						alt={`${house} logo`}
						width="200"
						height="200"
					/>) :
					null
				}
				<p>motto {houseActive.motto}</p>
			</main>
		</Layout>
	)
}

export default House