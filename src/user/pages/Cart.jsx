import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserNavbar from '../../components/UserNavbar';
import Footer from '../../components/Footer';

const Cart = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 9,
      name: 'Nothing Phone (2)',
      brand: 'Nothing',
      price: 44999,
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/m/b/-original-imagrdefbw6bhbjr.jpeg?q=70',
      quantity: 1,
    },
    {
      id: 10,
      name: 'Motorola Edge 40 Pro',
      brand: 'Motorola',
      price: 79999,
      image: 'https://motorolaroe.vtexassets.com/arquivos/ids/157285/motorola-edge-40-pro-family-shelf-quartz-black-b5pgv2pv.png?v=638162154256500000',
      quantity: 2,
    },
  ]);

  const navigate = useNavigate();

  // Function to handle quantity change
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen flex flex-col pt-10">
        <div className="container mx-auto p-6">
          <div className="mt-6">
            <h2 className="text-xl font-bold">Total Price: ₹{totalPrice}</h2>
            <div className="mt-4 flex gap-4">
              <NavLink
                to="/checkout"
                className="px-4 py-2  text-white rounded-lg bg-orange-600 hover:bg-orange-700 "
              >
                Proceed to Checkout
              </NavLink>
              <NavLink
                to="/"
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Continue Shopping
              </NavLink>
            </div>
          </div>

          <h1 className="text-3xl font-bold mt-6 mb-4">Your Cart</h1>
          {cartItems.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 items-center p-4 border rounded-lg shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-contain cursor-pointer"
                      onClick={() => navigate(`/products/${item.id}`)}
                    />
                    <div className="flex-1">
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-gray-600">Brand: {item.brand}</p>
                      <p className="text-green-600 font-semibold">₹{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 bg-gray-300 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 bg-gray-300 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
              <NavLink
                to="/"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Start Shopping
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
