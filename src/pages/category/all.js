import { useRouter } from 'next/router'

function AllCategory() {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h1>All</h1>
    </div>
  )
}

export default AllCategory