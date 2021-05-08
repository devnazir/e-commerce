import Links from './Links'
import { Fragment } from 'react'

function NavMain() {
  const handleClickLogin = () => {
    window.location.href = `${window.location.origin}/login`
  }

  return (
    <Fragment>
      <nav className='flex flex-col p-6 relative'>
        <div className='flex items-center'>
          <Links />
          <div className='flex text-sm cursor-pointer absolute right-8' onClick={handleClickLogin}>
            <div className='bg-profile w-6 h-6 bg-no-repeat' ></div>
            <span className='hidden md:block'>My Profile</span>
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