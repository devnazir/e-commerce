import Layout from "../../../../layout/main"
import { useRouter } from 'next/router'

function Category() {
  const router = useRouter()
  console.log(router)
  return (
    <Layout>
      Detail
    </Layout>
  )
}

export default Category