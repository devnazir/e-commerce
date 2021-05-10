import 'tailwindcss/tailwind.css'
import '../style/index.css'
import App from 'next/app'
import Cart from '../context/cart'

function MyApp({ Component, pageProps }) {
  return (
    <Cart>
      <Component {...pageProps} />
    </Cart>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  try {
    const data = await (await fetch(`https://myapi-commerce.herokuapp.com/products/?apikey=${process.env.APIKEY}`)).json()
    appProps.pageProps.products = data
    return { ...appProps }
  } catch (err) {
    return { ...appProps }
  }
}

export default MyApp
