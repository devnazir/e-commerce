import Layout from "../../layout"
import { useRouter } from 'next/router'

function Category() {
  const router = useRouter()
  console.log(router)
  return (
    <Layout>
      Index
    </Layout>
  )
}

export default Category