import Nav from "../components/nav"

function Layout({ children }) {
  return (
    <div className='container max-w-screen-2xl mx-auto'>
      <Nav />
      {children}
    </div>
  )
}

export default Layout