import { useRouter } from 'next/router'
import Layout from '../../../layout/main'
import { Card } from '../../../components/Card'
import { useEffect, useState } from 'react'
import { useCart } from '../../../hook/useCart'

function CategoryById({ products }) {
  const router = useRouter()
  const productId = router.query.id
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState([])
  const [total, setTotal] = useState(1)
  const { setCart } = useCart()

  useEffect(() => {
    const filterProducts = products?.find(product => product.product_id == productId)
    document.title = filterProducts?.name

    setProduct(filterProducts)
    setLoading(false)
  }, [])

  const handleClickPlusMinus = (type) => {
    if (type === 'plus') {
      return setTotal(current => current + 1)
    } else {
      return setTotal(current => {
        if (current > 1) {
          return current - 1
        }
        return 1
      })
    }
  }

  const addProductToCart = (product) => {
    setCart(prev => {
      return {
        ...prev,
        product: [{ ...product, total }]
      }
    })
  }

  const goToProduct = () => {
    return false
  }

  if (loading) {
    return (
      <Layout>
        <div>Loading</div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className='flex xs:flex-col xs:p-0 p-10 w-full'>
        <div className='xs:w-full w-2/6 md:w-3/12'>
          <Card product={product} xs={true} goToProduct={goToProduct} />
        </div>
        <div className='xs:p-4 flex justify-between sm:w-1/6 p-4 items-center sm:items-end'>
          <div>
            <button className='px-2 bg-gray-200' onClick={() => handleClickPlusMinus('min')}>-</button>
            <span className='mx-2'>{total}</span>
            <button className='px-2 bg-gray-200' onClick={() => handleClickPlusMinus('plus')}>+</button>
          </div>
          <button className='bg-lightblue-500 text-white p-2' onClick={() => addProductToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </Layout>
  )
}

export default CategoryById