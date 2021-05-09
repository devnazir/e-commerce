import { useRouter } from 'next/router'
import Layout from '../../../layout/main'
import { Cards, CardContainerGrid } from '../../../components/Card'
import { NavCategory } from '../../../components/Nav'
import { useTitle } from '../../../hook/useTitle'

function Category({ products }) {
  const router = useRouter()
  const category = router.query.name
  useTitle(`${category}`)

  return (
    <Layout>
      <NavCategory products={products} />
      <CardContainerGrid sm={3} md={4} lg={6}>
        <Cards products={products} category={category} />
      </CardContainerGrid>
    </Layout>
  )
}

export default Category 