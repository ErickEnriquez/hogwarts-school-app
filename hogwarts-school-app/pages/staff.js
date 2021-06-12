import Layout from "../components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from '../styles/Staff.module.scss'
import Image from 'next/image'

const Staff = () => {

	const [staff, setStaff] = useState(null)

	const getStaffList = async () => {
		const url = `http://hp-api.herokuapp.com/api/characters/staff`
		const res = await axios.get(url)
		const { data } = res
		setStaff(data)
	}
	
	useEffect(() => {
		getStaffList()

	})

	const staffList = staff ? staff.map((person, index ) => {
		return (
			<div key={index}>
				<Image
					src={person.image}
					alt={`${person.name} portrait`}
					width="220"
					height="250"
				/>
					<h3>{person.name}</h3>
			</div>)
	}) :null

	return (
		<Layout>
			<main className={styles.container}>
				<h1>Our Staff</h1>
				<div className={styles.staffList}>
					{staffList}
				</div>
		</main>
		</Layout>
		
	)
}

export default Staff
