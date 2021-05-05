import Layout from '../layout'
import { useTitle } from '../hook/useTitle'
import { useForm } from 'react-hook-form'

function Login() {
  useTitle("Login")
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (user) => {
    const { email, password } = user
    console.log(email, password)
  }

  return (
    <Layout hiddenNav={true} hiddenFooter={true}>
      <div className='flex flex-col items-center h-screen justify-center w-full'>
        <div className='bg-logo w-24 h-24 bg-cover bg-no-repeat'></div>
        <h3 className='mt-4'>Welcome to E-Comm</h3>
        <span className='text-sm text-gray-600 block'>Sign-in to continue</span>

        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col items-center mt-8'>
          <div className='relative w-4/5 sm:w-2/6'>
            <input type="text" {...register('email', { required: true })} placeholder='Email' className="w-full outline-none rounded-md border-2 border-gray-200 px-4 py-2 mb-4 focus:border-blue-200" />
            {errors.email && <ErrorField text="Email required" />}
          </div>
          <div className={`relative w-4/5 sm:w-2/6 ${errors.password ? 'mt-4' : ''}`}>
            <input type="password" {...register('password', { required: true })} placeholder='Password' className="w-full outline-none rounded-md border-2 border-gray-200 px-4 py-2 mb-4 focus:border-blue-200" />
            {errors.password && <ErrorField text="Password required" />}
          </div>
          <button type='submit' className='bg-lightblue-500 px-6 py-4 text-white sm:w-2/6 rounded-md w-4/5 shadow-2xl'>Sign In</button>
        </form>
        <AnotherSignIn />

        <a href='/' className='mt-4 hover:text-blue-400'>Back</a>
      </div>
    </Layout>
  )
}

function AnotherSignIn() {
  return (
    <div className='mt-6 flex flex-col w-4/5 sm:w-2/6'>
      <span className='text-gray-500 block text-center'>OR</span>
      <div className='flex flex-col w-full'>
        <button disabled className='border-2 border-gray-200 px-4 py-2 mt-4 rounded-md text-gray-600'>Login with Google</button>
        <button disabled className='border-2 border-gray-200 px-4 py-2 mt-4 rounded-md text-gray-600'>Login with Facebook</button>
      </div>
    </div>
  )
}

function ErrorField({ text }) {
  return <span className='absolute left-0 -top-6 text-sm text-red-400'>{text}</span>
}

export default Login