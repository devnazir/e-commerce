import Layout from "../layout/layout"
import Banner from "../components/banner"

function Index({ products }) {
  return (
    <Layout>
      <Banner products={products}/>
      <div className='mt-56 mb-12'>
        <h1>Hello</h1>
      </div>
    </Layout>
  )
}

export default Index