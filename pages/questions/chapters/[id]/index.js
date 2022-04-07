import { useRouter } from 'next/router'
import Link from 'next/link'

const Chapter = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>Chapter: {id}</h1>
    </>
  )
}

export default Chapter
