import { Fragment } from "react";

function Links() {
  return (
    <Fragment>
      <div className='flex'>
        <div className='bg-logo w-6 h-6 bg-cover mr-3'></div>
        <h1 className='font-semibold text-xl'>
          <a href="/">E-Comm</a>
        </h1>
      </div>
      <div className='w-2/5'>
        <ul className='hidden md:flex justify-evenly'>
          <li>
            <a href='/' className='text-lightblue-500'>Home</a>
          </li>
          <li>
            <a href='/category/bags'>Bags</a>
          </li>
          <li>
            <a href='/category/sneakers'>Sneakers</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Links