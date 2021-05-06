import { Fragment } from 'react'
import LinksTab from './Links'

function TabsCategory({ setCategory }) {
  return (
    <Fragment>
      <h1 className='text-center xs:text-xl text-3xl'>Best Seller</h1>
      <LinksTab setCategory={setCategory} />
    </Fragment>
  )
}

export default TabsCategory