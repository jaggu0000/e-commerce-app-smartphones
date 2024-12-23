import React, { useEffect, useState } from 'react';
import UserNavbar from '../../components/UserNavbar';
import Footer from '../../components/Footer';
import { fetchOrderById } from '../../api/orderApi';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("user");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetchOrderById(userId);
        setOrders(response.data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchCart();

  }, []);


  return (
    <>
      <UserNavbar />
      <div className="min-h-screen p-6 bg-gray-100 pt-28 md:pt-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">My Orders</h1>

          {orders.length === 0 ? (
            <p className="text-gray-600">No orders found.</p>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
                >
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                    <p className="text-gray-600 text-sm">Date: {order.date}</p>
                    <p className="text-gray-600 text-sm">
                      Status: <span className="font-medium">{order.orderStatus}</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Items:</h3>
                    <ul className="divide-y divide-gray-300">
                      {order.products.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between py-2 text-gray-700"
                        >
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-medium">₹{item.price * item.quantity}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between mt-4 text-lg font-semibold">
                    <span>Total:</span>
                    <span>₹{order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
