import Image from 'next/image'

function Banner({ products }) {

  return (
    <div className='relative'>
      <Image loading='lazy' src="/image/banner.png" layout='responsive' width={1600} height={700} quality={100}></Image>
      <h1 className='absolute top-0 md:w-2/5 flex sm:leading-normal h-full items-center p-12 text-white text-3xl sm:text-5xl font-semibold'>Super Flash Sale 50% Off</h1>
      <div className='p-12 flex w-full h-18 justify-center absolute -bottom-28 sm:-bottom-60'>
        {
          products.map(product => {
            return (
              <div className='flex flex-col border-0 sm:border-2 border-gray-100 m-4 w-24 sm:w-44 lg:w-80' key={product.product_id}>
                {/* <Image
                  src={product.src?.img}
                  width={250}
                  height={250}
                  quality={100}
                /> */}
                <div className='p-4 sm:block hidden'>
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

export default Banner