import Link from 'next/link'
import { Fragment } from 'react'

function Nav() {
  return (
    <Fragment>
      <nav className='flex flex-col p-6 relative'>
        <div className='flex items-center'>
          <div className='flex'>
            <div className='bg-logo w-6 h-6 bg-cover mr-3'></div>
            <h1 className='font-semibold text-xl'>E-Comm</h1>
          </div>
          <div className='w-2/5'>
            <ul className='hidden md:flex justify-evenly'>
              <li>
                <Link href='/'>
                  <a className='text-lightblue-500'>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/bags'>
                  <a>Bags</a>
                </Link>
              </li>
              <li>
                <Link href='/sneakers'>
                  <a>Sneaker</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex text-sm cursor-pointer absolute right-8'>
            <div className='bg-profile w-6 h-6 bg-no-repeat' ></div>
            <span className='hidden md:block'>My Profile</span>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Nav