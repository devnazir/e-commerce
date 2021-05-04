import Nav from "../components/nav"

function Layout({ children, hiddenNav }) {
  return (
    <div className='container max-w-screen-2xl mx-auto'>
      {hiddenNav ? '' : <Nav />}
      {children}
    </div>
  )
}

export default Layout