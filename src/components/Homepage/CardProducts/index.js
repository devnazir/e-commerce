import { useState, useRef, Fragment } from 'react'
import Image from 'next/image'

function CardProducts({ products, category }) {

  const [initEndSlice, setInitEndSlice] = useState(8)
  const refButtonMore = useRef()

  const loadMoreProduct = () => {
    if (initEndSlice > products.length) {
      refButtonMore.current.classList.add('hidden')
      return
    }
    setInitEndSlice(current => current + 8)
  }

  return (
    <Fragment>
      <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6 xs:p-4 xs:gap-4 px-6 sm:px-6 md:px-10 xs:my-0 my-4'>
        {products.slice(0, initEndSlice).map(product => {
          return (
            <Fragment key={product.product_id}>
              {product.category == category || category == "all" ? (
                <div className='w-full border-2 border-gray-100 bg-white' >
                  <Image loading='lazy' src={product?.src?.img} width={200} height={200} layout='responsive'></Image>
                  <div className='bg-white p-4 text-center cursor-pointer'>
                    <h3 className='xs:text-xs'>{product.name}</h3>
                    <span className='xs:text-xs text-sm'>{product.price}</span>
                  </div>
                </div>
              ) : (
                  <></>
                )
              }
            </Fragment>
          )
        })}
      </div>
      <div className='pl-10 '>
        <button ref={refButtonMore} className='text-lightblue-500 underline text-md md:text-xl cursor-pointer' onClick={loadMoreProduct}>Load More</button>
      </div>
    </Fragment>
  )
}

export default CardProducts