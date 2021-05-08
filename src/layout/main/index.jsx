import Footer from "../../components/Footer"
import { NavMain } from '../../components/Nav'

function Layout({ children, hiddenNav, hiddenFooter }) {
  return (
    <div className='container max-w-screen-2xl mx-auto'>
      {hiddenNav ? '' : <NavMain />}
      {children}
      {hiddenFooter ? '' : <Footer />}
    </div>
  )
}

export default Layout