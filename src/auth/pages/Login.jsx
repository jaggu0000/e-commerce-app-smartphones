import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/login_signup.css'
import icon from '../../../public/assets/icon_light.png'
import { AuthContext } from '../../contexts/AuthContexts'

const Login = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { userLogin } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            if (!usernameOrEmail || !password) {
                throw new Error('All fields are mandatory');
            }

            await userLogin({ usernameOrEmail, password });
            setSuccess('Logged in successfully');

        } catch (error) {
            setError(error.message);
        }

    };

    return (
        <div className='login_signup h-screen flex justify-center items-center'>
            <div className='bg-transparent/25 h-[530px] sm:w-[350px] lg:w-[400px] rounded-2xl flex flex-col items-center justify-between'>
                <div className='bg-transparent/25 w-full flex flex-col grow items-center shadow-inner rounded-t-2xl'>
                    <img src={icon} className='w-20 mt-9' />
                    <form onSubmit={handleLogin} className='flex flex-col justify-center items-center gap-4 p-10 w-full font-medium '>
                        <input onChange={(e) => setUsernameOrEmail(e.target.value)} type="text" className='border border-black h-10 w-full rounded-xl p-4 ' placeholder='Username or email' />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className='border border-black h-10 w-full rounded-xl p-4' placeholder='Password' />
                        <input type="submit" value="Login" className='bg-orange-600 h-10 w-full rounded-3xl mt-5 cursor-pointer hover:bg-orange-700' />
                        <NavLink to={'/'} className="text-slate-500 hover:text-slate-200">
                            Guest
                        </NavLink>
                        {error && <p className='text-red-600 '>{error}</p>}
                        {success && <p className='text-green-600'>{success}</p>}
                    </form>
                </div>

                <div className='bg-transparent h-14 w-full flex text-white font-semibold rounded-2xl'>
                    <NavLink className='h-full w-full bg-transparent/25 rounded-bl-2xl flex justify-center items-center'>
                        Login
                    </NavLink>
                    <NavLink to='/signup' className='h-full w-full bg-transparent rounded-br-2xl shadow-inner flex justify-center items-center'>
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login
