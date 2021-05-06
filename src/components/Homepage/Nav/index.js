import { Fragment } from 'react'
import Links from './Links'

function Nav() {

  const handleClickLogin = () => {
    window.location.href = `${window.location.origin}/login`
  }

  return (
    <Fragment>
      <nav className='flex flex-col p-6 relative'>
        <div className='flex items-center'>
          <Links/>
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