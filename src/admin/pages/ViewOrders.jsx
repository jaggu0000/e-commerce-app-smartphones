import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';

const ViewOrders = () => {
    return (
        <>
            <AdminNavbar />
            <div className="p-6 pt-16 bg-gray-100 min-h-screen">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search orders..."
                            className="p-2 border rounded-md w-full md:w-1/2"
                        />
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <table className="table-auto w-full text-left border-collapse">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="p-3">Order ID</th>
                                    <th className="p-3">Customer</th>
                                    <th className="p-3">Total</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3].map((_, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="p-3">ORD{index + 1}123</td>
                                        <td className="p-3">Customer {index + 1}</td>
                                        <td className="p-3">₹{5000 + index * 1000}</td>
                                        <td className="p-3">Processing</td>
                                        <td className="p-3">
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2">
                                                Update
                                            </button>
                                            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                                                Cancel
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewOrders;
