import { useRouter } from 'next/router'
import Layout from '../../../layout/main'
import {useTitle} from '../../../hook/useTitle'

function CategoryById() {
  const router = useRouter()
  console.log(router)
  return (
    <Layout>

    </Layout>
  )
}

export default CategoryById