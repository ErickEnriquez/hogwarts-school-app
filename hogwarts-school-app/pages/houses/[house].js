import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
const House = () => {
	const router = useRouter()
	const { house } = router.query
	
	return (
		<Layout>
			<p>House IS: {house}</p>
		</Layout>

	)
}

export default House