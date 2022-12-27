import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
//    
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='form-group'>
        <label htmlFor='text'>username</label>
        <input
          type='text'
          className='form-input'
          {...register('email')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <button type='submit' className='button'>
        Login
      </button>
    </form>
  )
}
export default Login