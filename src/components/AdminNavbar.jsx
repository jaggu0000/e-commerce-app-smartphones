import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../../public/assets/icon_dark.png'
import user_profile_default from '../../public/assets/user_profile_default.png'
import users from '../../public/assets/users.png'
import products from '../../public/assets/products.png'
import order_box from '../../public/assets/order_box.png'
import { AuthContext } from '../contexts/AuthContexts'

const UserNavbar = () => {
  const adminName = localStorage.getItem("username")
  const { logout } = useContext(AuthContext);


  return (
    <nav className='flex p-2 shadow items-center bg-blue-200 w-full fixed'>
      <div className='flex flex-col w-full gap-2'>
        <div className='flex justify-between gap-8'>
          {/* ---------------------------icon---------------------------- */}
          <NavLink to={'/dashboard'}>
            <div className='flex gap-1 items-center w-44 '>
              <img src={icon} className='w-10' />
              <h1 className='ml-1 text-3xl font-mono'>MobKart</h1>
            </div>
          </NavLink>


          <div className='flex gap-3 items-center'>
            {/* ----------------------admin options------------------------ */}
            <NavLink to="/manageusers" className='flex items-center justify-center cursor-pointer hover:-translate-y-0.5 gap-1' >
              <img src={users} alt="users" className='w-8' />
              <h1 className='text-lg font-mono sm:flex hidden'>Users</h1>
            </NavLink>
            <NavLink to="/manageproducts" className='flex items-center justify-center cursor-pointer hover:-translate-y-0.5 gap-1' >
              <img src={products} alt="users" className='w-8' />
              <h1 className='text-lg font-mono sm:flex hidden'>Products</h1>
            </NavLink>
            <NavLink to="/vieworders" className='flex items-center justify-center cursor-pointer hover:-translate-y-0.5 gap-1' >
              <img src={order_box} alt="users" className='w-8' />
              <h1 className='text-lg font-mono sm:flex hidden'>Orders</h1>
            </NavLink>

            {/* ---------------Admin dropdown---------------- */}

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

                <div className=" flex flex-col absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all duration-300">
                  <button
                    onClick={logout}
                    className="h-full flex mx-2 my-2 justify-center items-center py-2 bg-orange-600 hover:bg-orange-700 rounded-lg"
                  >
                    Logout
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </nav>

  )
}

export default UserNavbar
