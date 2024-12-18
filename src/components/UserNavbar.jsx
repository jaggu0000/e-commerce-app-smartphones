import React, { useState } from 'react'
import icon from '../../public/assets/icon_dark.png'
import { NavLink } from 'react-router-dom'
import cart from '../../public/assets/cart.png'
import user_profile_default from '../../public/assets/user_profile_default.png'

const UserNavbar = () => {

    return (
        <nav className='flex p-2 shadow items-center bg-blue-400 w-full fixed'>
            <div className='flex flex-col w-full gap-2'>
                <div className='flex justify-between'>
                    {/* ---------------------------icon---------------------------- */}
                    <NavLink to={'/'}>
                        <div className='flex gap-1 items-center w-44 '>
                            <img src={icon} className='w-10' />
                            <h1 className='ml-1 text-3xl font-mono'>MobKart</h1>
                        </div>
                    </NavLink>

                    {/* ---------------------------search for larger devices---------------------------- */}

                    <div className='grow mx-12 justify-center items-center hidden md:flex'>
                        <div className='bg-white w-3/5 h-[35px] px-2 flex justify-center items-center rounded-md '>
                            <svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <input type="text" className=' bg-transparent h-full w-full px-1 outline-none' placeholder='Search for Smartphones' />
                        </div>
                    </div>

                    {/* ----------------------------cart and user dropdown--------------------------- */}

                    <div className='flex items-center justify-center gap-3'>
                        <NavLink to={'/cart'} className='flex items-center justify-center cursor-pointer hover:-translate-y-0.5' >
                            <img src={cart} className='w-8' />
                            <h1 className='text-lg font-mono sm:flex hidden'>Cart</h1>
                        </NavLink>

                        {/* User Option */}
                        {/* <div className="relative group">
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <img
                                    src={user_profile_default}
                                    className="w-7"
                                />
                                <h1 className="font-mono text-lg sm:flex hidden">Username</h1>
                            </div>

                            ------Dropdown Menu------

                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all duration-300">
                                <NavLink
                                    to={"/orders"}
                                    className="flex justify-start items-center gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 20.249C12 20.249 2.625 14.999 2.625 8.62403C2.625 7.49705 3.01546 6.40488 3.72996 5.53334C4.44445 4.66179 5.43884 4.06472 6.54393 3.8437C7.64903 3.62268 8.79657 3.79137 9.79131 4.32106C10.7861 4.85076 11.5665 5.70874 12 6.74903V6.74903C12.4335 5.70874 13.2139 4.85076 14.2087 4.32106C15.2034 3.79137 16.351 3.62268 17.4561 3.8437C18.5612 4.06472 19.5555 4.66179 20.27 5.53334C20.9845 6.40488 21.375 7.49705 21.375 8.62403C21.375 14.999 12 20.249 12 20.249Z" stroke="#212121" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Orders
                                </NavLink>
                                <NavLink
                                    to={"/wishlist"}
                                    className="flex justify-start items-center gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="" />
                                    Wishlist
                                </NavLink>
                                <NavLink
                                    to={"/login"}
                                    className="flex mx-2 my-2 justify-center items-center py-2 bg-orange-600 hover:bg-orange-700 rounded-lg"
                                >
                                    Logout
                                </NavLink>
                            </div>

                        </div> */}

                        {/* Login/Signup */}
                        <NavLink
                            to={"/login"}
                            className=" w-32 flex justify-center items-center py-2 bg-orange-600 hover:bg-orange-700 rounded-lg"
                        >
                            Login/Signup
                        </NavLink>

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
