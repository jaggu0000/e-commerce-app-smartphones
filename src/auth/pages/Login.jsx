import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/login_signup.css'
import icon from '../../../public/assets/icon.png'

const Login = () => {
    return (
        <div className='login_signup h-screen flex justify-center items-center'>
            <div className='bg-transparent/25 h-[530px] w-1/4 rounded-2xl flex flex-col items-center justify-between'>
                <div className='bg-transparent/25 w-full flex flex-col grow items-center shadow-inner rounded-t-2xl'>
                    <img src={icon} className='w-20 mt-9' />
                    <form className='flex flex-col justify-center items-center gap-4 p-10 w-full font-medium '>
                        <input type="text" className='border border-black h-10 w-full rounded-xl p-4 ' placeholder='Username or email' />
                        <input type="password" className='border border-black h-10 w-full rounded-xl p-4' placeholder='Password' />
                        <input type="submit" value="Login" className='bg-orange-600 h-10 w-full rounded-3xl mt-5 cursor-pointer hover:bg-orange-700' />
                        <NavLink className="text-slate-500">
                            Guest
                        </NavLink>
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
