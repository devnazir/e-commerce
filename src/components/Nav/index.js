import { Fragment } from 'react'

function Nav() {

  const handleClickLogin = () => {
    window.location.href = `${window.location.origin}/login`
  }

  return (
    <Fragment>
      <nav className='flex flex-col p-6 relative'>
        <div className='flex items-center'>
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
                <a href='/category/sneaker'>Sneaker</a>
              </li>
              <li>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='flex text-sm cursor-pointer absolute right-8' onClick={handleClickLogin}>
            <div className='bg-profile w-6 h-6 bg-no-repeat' ></div>
            <span className='hidden md:block'>My Profile</span>
          </div>
        </div>
      </nav>
    </Fragment >
  )
}

export default Nav