import { useRouter } from 'next/router'
import Link from 'next/link'

const Exams = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>exams: {id}</h1>
    </>
  )
}

export default Exams
