import React from 'react'
import Cart from '../pages/Cart';
import Orders from '../pages/Orders';
import Checkout from '../pages/Checkout';

const UserRoutes = [
    {path:'/cart', element: <Cart />},
    {path:'/checkout', element: <Checkout />},
    {path:'/orders', element: <Orders />}
];

export default UserRoutes
