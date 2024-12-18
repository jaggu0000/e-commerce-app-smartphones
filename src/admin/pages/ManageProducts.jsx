import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { NavLink } from 'react-router-dom';

const Products = () => {
    // Example smartphone data
    const products = [
        { id: 1, name: 'iPhone 14 Pro Max', price: '₹1,39,900', stock: 15 },
        { id: 2, name: 'Samsung Galaxy S23 Ultra', price: '₹1,24,999', stock: 20 },
        { id: 3, name: 'OnePlus 11', price: '₹56,999', stock: 30 },
        { id: 4, name: 'Google Pixel 8', price: '₹74,999', stock: 25 },
        { id: 5, name: 'Xiaomi 13 Pro', price: '₹79,999', stock: 10 },
        { id: 6, name: 'Realme GT 5', price: '₹36,999', stock: 40 },
        { id: 7, name: 'Vivo X90 Pro', price: '₹84,999', stock: 18 },
    ];

    return (
        <>
            <AdminNavbar />
            <div className="p-6 pt-16 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">Products</h1>

                {/* Products Section */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Products List</h2>
                        <NavLink to={'/admin/addproduct'} className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
                            Add Product
                        </NavLink>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left border-collapse">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-2 px-4 border">Product ID</th>
                                    <th className="py-2 px-4 border">Name</th>
                                    <th className="py-2 px-4 border">Price</th>
                                    <th className="py-2 px-4 border">Stock</th>
                                    <th className="py-2 px-4 border text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td className="py-2 px-4 border">{product.id}</td>
                                        <td className="py-2 px-4 border">{product.name}</td>
                                        <td className="py-2 px-4 border">{product.price}</td>
                                        <td className="py-2 px-4 border">{product.stock}</td>
                                        <td className="py-2 px-4 border text-center">
                                            {/* Edit and Delete Buttons */}
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2">
                                                Edit
                                            </button>
                                            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                                                Delete
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

export default Products;