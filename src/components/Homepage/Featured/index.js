import { Fragment } from 'react'
import Image from 'next/image'

function Featured({ products }) {
  return (
    <Fragment>
      <h2 className='text-xl md:text-2xl mt-16 sm:mt-32 mb-8 text-center'>Featured Product</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6 xs:p-4 xs:gap-4 px-6 sm:px-6 md:px-10 xs:my-0 mb-32'>
        {products.slice(0, 4).map(product => {
          return (
            <div className='w-full border-2 border-gray-100 bg-white' key={product.product_id}>
              <Image loading='lazy' src={product?.src?.img} width={200} height={200} layout='responsive'></Image>
              <div className='bg-white p-4 text-center cursor-pointer'>
                <h3 className='xs:text-xs'>{product.name}</h3>
                <span className='xs:text-xs text-sm'>{product.price}</span>
              </div>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}

export default Featured