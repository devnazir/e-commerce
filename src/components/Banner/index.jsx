import Image from 'next/image'

function Banner({ products }) {

  const goToProductDetail = (productId, productCategory) => {
    window.open(`/category/${productCategory}/${productId}`, '_self')
  }

  return (
    <div className='relative'>
      <Image loading='lazy' src="/image/banner.png" layout='responsive' width={1600} height={700} quality={100}></Image>
      <h1 className='absolute top-0 md:w-2/5 flex sm:leading-normal h-full items-center p-12 text-white text-3xl sm:text-5xl font-semibold'>Super Flash Sale 50% Off</h1>
      <div className='p-12 flex w-full h-18 justify-center absolute -bottom-28 sm:-bottom-60'>
        {
          products.slice(0, 3).map(product => {
            return (
              <div className='flex flex-col border-0 sm:border-2 border-gray-100 m-4 w-24 sm:w-44 lg:w-80 bg-white' key={product.product_id} onClick={() => goToProductDetail(product.product_id, product.category)}>
                <Image
                  src={product.src?.img}
                  width={250}
                  height={250}
                  quality={100}
                />
                <div className='p-4 sm:block hidden cursor-pointer'>
                  <h3>{product.name}</h3>
                  <span className='text-sm'>{product.price}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function BannerShoes() {
  return (
    <div className='w-full h-96 my-16  bg-lightblue-500 relative'>
      <div className='w-full lg:w-1/2 h-full flex flex-col lg:p-24 sm:p-12 p-6 justify-center text-white'>
        <h2 className='text-4xl xs:text-3xl'>Adidas Men Running Sneakers</h2>
        <span className='mt-4 xs:text-sm'>performance and design. Taken right to the edge.</span>
        <a href='/category/all' className='w-max text-md mt-2 underline xs:text-xs'>Shop Now</a>
      </div>
      <div className='absolute bg-banner-shoes hidden lg:block lg:w-1/2 bg-cover -top-60 lg:-top-44 bottom-0 lg:right-0 '></div>
    </div>
  )
}

export {
  Banner,
  BannerShoes
}