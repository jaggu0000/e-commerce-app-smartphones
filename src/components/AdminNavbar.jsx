import React, { useState } from 'react'
import icon from '../../public/assets/icon_dark.png'
import { NavLink } from 'react-router-dom'
import user_profile_default from '../../public/assets/user_profile_default.png'

const UserNavbar = () => {
  const adminName = localStorage.getItem("username")

  return (
    <nav className='flex p-2 shadow items-center bg-blue-600 w-full fixed'>
      <div className='flex flex-col w-full gap-2'>
        <div className='flex justify-between'>
          {/* ---------------------------icon---------------------------- */}
          <NavLink to={'/admin/dashboard'}>
            <div className='flex gap-1 items-center w-44 '>
              <img src={icon} className='w-10' />
              <h1 className='ml-1 text-3xl font-mono'>MobKart</h1>
            </div>
          </NavLink>

          {/* ----------------------------Admin dropdown--------------------------- */}

          <div className='flex items-center justify-center gap-3'>

            {/* Admin Option */}
            <div className="relative group">
              <div
                className="flex justify-center items-center gap-2 cursor-pointer sm:w-40"
              >
                <img
                  src={user_profile_default}
                  className="w-7"
                />
                <h1 className="font-mono text-lg sm:flex hidden">{adminName}</h1>
              </div>

              {/* ------Dropdown Menu------ */}

              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all duration-300">
                <NavLink
                  to={"/login"}
                  className="flex mx-2 my-2 justify-center items-center py-2 bg-orange-600 hover:bg-orange-700 rounded-lg"
                >
                  Logout
                </NavLink>
              </div>

            </div>

          </div>

        </div>

      </div>
    </nav>

  )
}

export default UserNavbar
