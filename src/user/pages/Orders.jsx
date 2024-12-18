import React, { useState } from 'react';
import UserNavbar from '../../components/UserNavbar';
import Footer from '../../components/Footer';

const Orders = () => {
  // Sample order data (replace this with data fetched from an API or database)
  const [orders] = useState([
    {
      id: 1,
      items: [
        { name: 'Nothing Phone (2)', quantity: 1, price: 44999 },
        { name: 'Motorola Edge 40 Pro', quantity: 2, price: 79999 },
      ],
      total: 204997,
      status: 'Shipped',
      orderDate: '2024-12-15',
    },
    {
      id: 2,
      items: [
        { name: 'Motorola Edge 40 Pro', quantity: 1, price: 79999 },
      ],
      total: 79999,
      status: 'Processing',
      orderDate: '2024-12-16',
    },

  ]);

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
                    <p className="text-gray-600 text-sm">Date: {order.orderDate}</p>
                    <p className="text-gray-600 text-sm">
                      Status: <span className="font-medium">{order.status}</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Items:</h3>
                    <ul className="divide-y divide-gray-300">
                      {order.items.map((item, index) => (
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
