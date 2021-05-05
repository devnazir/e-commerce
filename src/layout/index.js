import Footer from "../components/Footer"
import Nav from "../components/Nav"

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