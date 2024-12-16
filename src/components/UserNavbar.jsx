import React from 'react'
import icon from '../../public/assets/icon_dark.png'
import { NavLink } from 'react-router-dom'
import cart from '../../public/assets/cart.png'
import user_profile_default from '../../public/assets/user_profile_default.png'

const UserNavbar = () => {

    return (
        <nav className='flex p-2 shadow items-center bg-blue-100 w-full'>
            <div className='flex flex-col w-full gap-2'>
                <div className='flex justify-between'>
                    {/* ---------------------------icon---------------------------- */}

                    <div className='flex gap-1 items-center w-44 '>
                        <img src={icon} className='w-10' />
                        <h1 className='ml-1 text-3xl font-mono'>MobKart</h1>
                    </div>

                    {/* ---------------------------search for larger devices---------------------------- */}

                    <div className='grow mx-12 justify-center items-center hidden md:flex'>
                        <div className='bg-white w-3/5 h-[35px] px-2 flex justify-center items-center rounded-md '>
                            <svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <input type="text" className=' bg-transparent h-full w-full px-1 outline-none' placeholder='Search for Smartphones' />
                        </div>
                    </div>

                    {/* ---------------------------user details, cart and orders for larger devices--------------- */}

                    <div className='hidden sm:flex justify-center items-center'>
                        <div className='flex items-center gap-6 justify-center '>
                            <NavLink to={'/cart'} className='flex items-center justify-center cursor-pointer hover:-translate-y-0.5' >
                                <img src={cart} className='w-8' />
                                <h1 className='text-lg font-mono'>Cart</h1>
                            </NavLink>
                            <div className='flex justify-center items-center gap-2 w-48'>
                                <div className='flex gap-1'>
                                    <img src={user_profile_default} className='w-7' />
                                    <h1 className='font-mono text-lg'>Username</h1>
                                </div>
                                <NavLink to={'/login'} className='bg-orange-600 font-mono h-8 w-16 rounded-xl flex items-center justify-center hover:bg-orange-700 hover:shadow'>Logout</NavLink>
                            </div>
                        </div>
                    </div>
                    
                    {/* ------------------------------user details, cart and orders for smaller devices------------------------ */}
                    
                    <div className='flex sm:hidden justify-center items-center'>
                        <div className='flex items-center gap-4 justify-center '>
                            <NavLink to={'/cart'} className='flex items-center justify-center cursor-pointer hover:-translate-y-0.5' >
                                <img src={cart} className='w-8' />
                            </NavLink>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='flex gap-1'>
                                    <img src={user_profile_default} className='w-7' />
                                </div>
                                <NavLink to={'/login'} className='bg-orange-600 font-mono h-8 w-16 rounded-xl flex items-center justify-center hover:bg-orange-700 hover:shadow'>Logout</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------------------search button for smaller devices------------------------------ */}

                <div className='bg-white w-full h-[35px] px-2 flex justify-center items-center rounded-md md:hidden'>
                    <svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <input type="text" className=' bg-transparent h-full w-full px-1 outline-none' placeholder='Search for Smartphones' />
                </div>
            </div>
        </nav>

    )
}

export default UserNavbar
