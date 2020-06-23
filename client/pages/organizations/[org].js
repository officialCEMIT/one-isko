import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    const { org } = router.query

    return <p>Organization: {org}</p>
}

