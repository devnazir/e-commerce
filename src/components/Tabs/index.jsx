import { Fragment } from 'react'
import Links from './Links'

function Tabs({ setCategory }) {
  return (
    <Fragment>
      <h1 className='text-center xs:text-xl text-3xl'>Best Seller</h1>
      <Links setCategory={setCategory} />
    </Fragment>
  )
}

export default Tabs