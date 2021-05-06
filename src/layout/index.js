import Footer from "../components/Homepage/Footer"
import Nav from "../components/Homepage/Nav"

function Layout({ children, hiddenNav, hiddenFooter }) {
  return (
    <div className='container max-w-screen-2xl mx-auto'>
      {hiddenNav ? '' : <Nav />}
      {children}
      {hiddenFooter ? '' : <Footer />}
    </div>
  )
}

export default Layout