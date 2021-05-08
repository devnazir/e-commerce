import Layout from '../layout/main'
import { useTitle } from '../hook/useTitle'
import Form from '../components/Form'

function Login() {
  useTitle("Login")

  return (
    <Layout hiddenNav={true} hiddenFooter={true}>
      <Form/>
    </Layout>
  )
}

export default Login