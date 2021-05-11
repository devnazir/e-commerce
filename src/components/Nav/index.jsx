import Links from './Links'
import { Fragment, useEffect, useState } from 'react'
import { useCart } from '../../hook/useCart'

function NavMain() {
  const [totalProduct, setTotalProduct] = useState(0)
  const [elTotal, setElTotal] = useState(false)
  const { cart } = useCart()

  const handleClickLogin = () => {
    window.location.href = `${window.location.origin}/login`
  }

  useEffect(() => {
    if(cart.product) {
      let items = null
      if(localStorage.getItem('cart')) {
        items = JSON.parse(localStorage.getItem('cart'))
        items.product.push(...cart.product)
        setTotalProduct(items.product.length)
        
        return localStorage.setItem('cart', JSON.stringify(items))
      }
      
      localStorage.setItem('cart', JSON.stringify(cart))
      setElTotal(true)
    }
  }, [cart.product])

  return (
    <Fragment>
      <nav className='flex flex-col p-6 relative'>
        <div className='flex items-center'>
          <Links />
          <div className='flex text-sm cursor-pointer absolute right-12' onClick={handleClickLogin}>
            <div className='bg-profile w-6 h-6 bg-no-repeat hidden md:block' ></div>
            <span className='hidden md:block'>My Profile</span>
          </div>
          <div className='md:right-4 bg-cart w-6 h-6 bg-no-repeat absolute right-10'>
            <div className={`${elTotal ? 'w-4 h-4 bg-blue-200 rounded-full absolute -right-1 -top-1 flex justify-center items-center text-xs' : ''}`}>{elTotal ? totalProduct : ""}</div>
          </div>
        </div>
      </nav>
    </Fragment >
  )
}

function NavCategory({ products }) {
  const handleChangeSorting = (select) => {
    const value = select.target.value
    console.log(value)
  }

  return (
    <div className='flex justify-between w-full p-4 bg-gray-100'>
      <div>
        <span>{products.length} Items</span>
      </div>
      <div>
        <label htmlFor="sort-by" className='mr-4'>Sort By</label>
        <select id='sort-by' name='sorting' onChange={handleChangeSorting}>
          <option value="latest">Latest</option>
          <option value="cheaper">Cheaper</option>
          <option value="expensive">Expensive</option>
        </select>
      </div>
    </div>
  )
}

export { NavCategory, NavMain }