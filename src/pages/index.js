import Layout from "../layout"
import Banner from "../components/Banner"
import Image from 'next/image'
import { Fragment } from 'react'

function Index({ products }) {
  return (
    <Layout>
      <Banner products={products} />
      <div className='mt-24 sm:mt-56 mb-12'>
        <BestSeller />
        <CardProducts products={products} />
        <BannerShoes />
        <Service />
        <Featured />
      </div>
    </Layout>
  )
}

function BestSeller() {
  return (
    <Fragment>
      <h1 className='text-center xs:text-xl text-3xl'>Best Seller</h1>
      <div className='w-full'>
        <ul className='flex justify-center xs:text-sm'>
          <li className='m-2 cursor-pointer text-lightblue-500'>
            All
        </li>
          <li className='m-2 cursor-pointer'>
            Bags
        </li>
          <li className='m-2 cursor-pointer'>
            Sneakers
        </li>
          <li className='m-2 cursor-pointer'>
            Belt
        </li>
          <li className='m-2 cursor-pointer'>
            Sunglasses
        </li>
        </ul>
      </div>
    </Fragment>
  )
}

function CardProducts({ products }) {
  return (
    <Fragment>
      <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6 xs:p-4 xs:gap-4 px-6 sm:px-6 md:px-10 xs:my-0 my-4'>
        {products.slice(0, 8).map(product => {
          return (
            <div className='w-full border-2 border-gray-100 bg-gray-100' key={product.product_id}>
              <Image loading='lazy' src={product?.src?.img} width={200} height={200} layout='responsive'></Image>
              <div className='bg-white p-4 text-center cursor-pointer'>
                <h3 className='xs:text-xs'>{product.name}</h3>
                <span className='xs:text-xs text-sm'>{product.price}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className='w-full text-center cursor-pointer'>
        <button className='text-lightblue-500 underline text-md md:text-xl'>Load More</button>
      </div>
    </Fragment>
  )
}

function BannerShoes() {
  return (
    <div className='w-full h-96 my-16 lg:my-32 bg-lightblue-500 relative'>
      <div className='w-full lg:w-1/2 h-full flex flex-col lg:p-24 sm:p-12 p-6 justify-center text-white'>
        <h2 className='text-4xl xs:text-3xl'>Adidas Men Running Sneakers</h2>
        <span className='mt-4 xs:text-sm'>performance and design. Taken right to the edge.</span>
        <button className='w-max text-md mt-2 underline xs:text-xs'>Shop Now</button>
      </div>
      <div className='absolute bg-banner-shoes hidden lg:block lg:w-1/2 bg-cover -top-60 lg:-top-44 bottom-0 lg:right-0 '></div>
    </div>
  )
}

function Service() {
  return (
    <div className='flex flex-wrap w-full h-auto justify-evenly text-center md:text-xl text-sm p-4'>
      <BoxService imageSrc="/icons/shipping.png" title="Free Shipping" paragraf="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, accusamus!" />
      <BoxService imageSrc="/icons/refund.png" title="100% Refund" paragraf="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, accusamus!" />
      <BoxService imageSrc="/icons/support.png" title="Support 24/7" paragraf="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, accusamus!" />
    </div>
  )
}

function BoxService({ imageSrc, title, paragraf }) {
  return (
    <div className='w-48 m-4'>
      <div className='md:w-20 w-12 m-auto'>
        <Image src={`${imageSrc}`} width={32} height={32} layout='responsive'></Image>
      </div>
      <span className='block mt-4'>{title}</span>
      <p className='text-xs text-center mt-2'>{paragraf}</p>
    </div>
  )
}

function Featured() {
  return (
    <Fragment>
      <h2 className='mt-12 text-xl text-center'>Featured Product</h2>
      <div className='flex flex-wrap justify-center'>
        <div className='flex mt-7 justify-center'>
          <div className='w-24 mr-4'>
            <Image src='/icons/Vector.png' width={100} height={100} layout='responsive'></Image>
          </div>
          <div className='flex flex-col justify-center w-3/5'>
            <span className=''>Blue Swade Nike Sneakers</span>
            <span className='text-sm'>Rp100.000</span>
          </div>
        </div>
        <div className='flex mt-7 justify-center'>
          <div className='w-24 mr-4'>
            <Image src='/icons/Vector.png' width={100} height={100} layout='responsive'></Image>
          </div>
          <div className='flex flex-col justify-center w-3/5'>
            <span className='w-3/5'>Blue Swade Nike Sneakers</span>
            <span className='text-sm'>Rp100.000</span>
          </div>
        </div>
        <div className='flex mt-7 justify-center'>
          <div className='w-24 mr-4'>
            <Image src='/icons/Vector.png' width={100} height={100} layout='responsive'></Image>
          </div>
          <div className='flex flex-col justify-center w-3/5'>
            <span className='w-3/5'>Blue Swade Nike Sneakers</span>
            <span className='text-sm'>Rp100.000</span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Index