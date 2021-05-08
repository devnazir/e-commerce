import { useRouter } from 'next/router'
import Layout from '../../../layout/main'
import { Card, CardContainerGrid } from '../../../components/Card'
import { NavCategory } from '../../../components/Nav'
import { useTitle } from '../../../hook/useTitle'

function Category({ products }) {
  const router = useRouter()
  const category = router.query.name
  useTitle(`${category}`)

  console.log(router)

  return (
    <Layout>
      <NavCategory products={products} />
      <CardContainerGrid sm={3} md={4} lg={6}>
        <Card products={products} category={category} />
      </CardContainerGrid>
    </Layout>
  )
}

export default Category 