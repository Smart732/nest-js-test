import { useRouter } from 'next/router'
function page() {
    const router = useRouter()
    const { page } = router.query
  return (
    <div>{page}</div>
  )
}

export default page