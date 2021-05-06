import { useState } from 'react'
import Layout from "../layout"
import { BannerShoes, Banner } from "../components/Homepage/Banner"
import TabsCategory from '../components/Homepage/Tabs'
import CardProducts from '../components/Homepage/CardProducts'
import Service from '../components/Homepage/Service'
import Featured from '../components/Homepage/Featured'

function Index({ products }) {
  const [category, setCategory] = useState("all")

  return (
    <Layout>
      <Banner products={products} />
      <div className='mt-24 sm:mt-56 mb-12'>
        <TabsCategory setCategory={setCategory} />
        <CardProducts products={products} category={category} />
        <BannerShoes />
        <Service />
        <Featured products={products} />
      </div>
    </Layout>
  )
}

export default Index