import { useState } from 'react'
import LayoutMain from "../layout/main"
import LayoutError from "../layout/error"
import { CardContainerGrid, Cards } from '../components/Card'
import { Banner, BannerShoes } from '../components/Banner'
import Tabs from '../components/Tabs'
import Service from '../components/Service'
import { useTitle } from '../hook/useTitle'

function Index({ products }) {

  useTitle('Homepage')

  if (!products) {
    return (
      <LayoutError>
        <h1 className='text-lg md:text-3xl m-auto'>Error Fetch API, please try again later or refresh</h1>
      </LayoutError>
    )
  }

  const [category, setCategory] = useState("all")

  return (
    <LayoutMain>
      <Banner products={products} />
      <div className='mt-24 sm:mt-56 mb-12'>
        <Tabs setCategory={setCategory} />
        <CardContainerGrid md={4}>
          <Cards products={products} category={category} length={8} />
        </CardContainerGrid>
        <BannerShoes />
        <Service />
      </div>
    </LayoutMain>
  )
}

export default Index