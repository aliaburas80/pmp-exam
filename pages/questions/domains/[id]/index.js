import { useRouter } from 'next/router'
import Link from 'next/link'

const Domain = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>Domain: {id}</h1>
    </>
  )
}

export default Domain
