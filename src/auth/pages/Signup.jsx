import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/login_signup.css'
import icon from '../../../public/assets/icon_light.png'
import { AuthContext } from '../../contexts/AuthContexts'

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { userSignup } = useContext(AuthContext);
  
  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password) {
      setError('All fields are mandatory');
      return;
    }

    try {
      await userSignup({ username, email, password });
      setSuccess('Signed up succesfully')
    } catch (error) {
      setError(error.message);
    }

  }

  return (
    <div className='login_signup h-screen flex justify-center items-center '>
      <div className='bg-transparent/25 h-[530px] sm:w-[350px] lg:w-[400px] rounded-2xl flex flex-col items-center justify-between'>
        <div className='bg-transparent/25 w-full flex flex-col grow items-center shadow-inner rounded-t-2xl'>

          <img src={icon} className='w-20 mt-9' />

          <form onSubmit={handleSignup} className='flex flex-col justify-center items-center gap-4 p-10 w-full font-medium '>
            <input onChange={(e) => setUsername(e.target.value)} type="text" className='border border-black h-10 w-full rounded-xl p-4 ' placeholder='Username' />
            <input onChange={(e) => setEmail(e.target.value)} type="email" className='border border-black h-10 w-full rounded-xl p-4 ' placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} type="password" className='border border-black h-10 w-full rounded-xl p-4' placeholder='Password' />
            <input type="submit" value="Sign Up" className='bg-orange-600 h-10 w-full rounded-3xl mt-4 cursor-pointer hover:bg-orange-700' />
            {error && <p className='text-red-600 '>{error}</p>}
            {success && <p className='text-green-600'>{success}</p>}
          </form>

        </div>

        <div className='bg-transparent h-14 w-full flex text-white font-semibold rounded-2xl'>

          <NavLink to={"/login"} className='h-full w-full bg-transparent rounded-bl-2xl shadow-inner flex justify-center items-center'>Login</NavLink>
          <NavLink className='h-full w-full bg-transparent/25 rounded-br-2xl flex justify-center items-center cursor-default'>Sign Up</NavLink>

        </div>
      </div>
    </div>
  )
}

export default Signup
