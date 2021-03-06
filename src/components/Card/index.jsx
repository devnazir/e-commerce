import Image from 'next/image'
import { Fragment } from 'react'

function Cards({ products, category, length }) {

  const goToProduct = (productId, productCategory) => {
    window.open(`/category/${productCategory}/${productId}`, '_self')
  }

  if (category !== "all") {
    return (
      <ProductByCategory products={products} category={category} goToProduct={goToProduct} />
    )
  }

  return (
    <Fragment>
      {products.slice(0, length ?? products.length).map(product => {
        return (
          <Card product={product} goToProduct={goToProduct} key={product.product_id}/>
        )
      })}
    </Fragment>
  )
}

function ProductByCategory({ products, category, goToProduct }) {

  const filterProduct = products.filter(product => product.category === category)

  if (filterProduct.length == 0) {
    return <div className='absolute inset-0 text-center text-red-300'>Product is not available</div>
  }

  return (
    <Fragment>
      {filterProduct.map(product => {
        return (
          <Card product={product} goToProduct={goToProduct} key={product.product_id}/>
        )
      })}
    </Fragment>
  )
}

function CardContainerGrid({ children, sm, md, lg }) {
  return (
    <div className={`relative grid grid-cols-2 ${sm && `sm:grid-cols-${sm}`} ${md && `md:grid-cols-${md}`} ${lg && `lg:grid-cols-${lg}`}  gap-6 xs:p-4 xs:gap-4 px-6 sm:px-6 md:px-10 xs:my-0 my-4`}>
      {children}
    </div>
  )
}

function Card({ product, xs = false, goToProduct }) {
  return (
    <div className={`${xs && 'xs:border-0 xs:bg-gray-100'} border-2 border-gray-100 bg-white`} onClick={() => goToProduct(product.product_id, product.category)}>
      <Image loading='lazy' src={product.src.img} width={200} height={200} layout='responsive'></Image>
      <div className={`${xs && 'xs:text-left'} bg-white p-4 text-center cursor-pointer`}>
        <h3 className={`${xs ? 'xs:text-xl' : 'xs:text-xs md:text-sm lg:text-md'}`}>{product.name}</h3>
        <span className={`${xs ? 'xs:text-sm' : 'xs:text-xs text-sm w-full block'}`}>{product.price}</span>
      </div>
    </div>
  )
}

export {
  Cards,
  Card,
  CardContainerGrid,
}