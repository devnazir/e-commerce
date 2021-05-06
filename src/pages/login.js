import Layout from '../layout'
import { useTitle } from '../hook/useTitle'
import Form from '../components/Login/Form'

function Login() {
  useTitle("Login")

  return (
    <Layout hiddenNav={true} hiddenFooter={true}>
      <Form/>
    </Layout>
  )
}

export default Login