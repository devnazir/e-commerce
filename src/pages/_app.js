import 'tailwindcss/tailwind.css'
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const data = await (await fetch(`https://myapi-commerce.herokuapp.com/products/?apikey=${process.env.APIKEY}`)).json()

  appProps.pageProps.products = data

  return { ...appProps }
}

export default MyApp
