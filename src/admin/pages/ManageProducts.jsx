import React, { useContext } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContexts';

const ManageProducts = () => {

    const { products, deleteProductById } = useContext(AdminContext);
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        await deleteProductById(id);
    }

    const handleEdit = (id) => {
        localStorage.setItem("productId", id)
        navigate('/editproduct')
    }

    return (
        <>
            <AdminNavbar />
            <div className="p-6 pt-16 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">Products</h1>

                {/* Products Section */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Products List</h2>
                        <NavLink to={'/addproduct'} className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
                            Add Product
                        </NavLink>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left border-collapse">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-2 px-4 border">Product ID</th>
                                    <th className="py-2 px-4 border">Brand</th>
                                    <th className="py-2 px-4 border">Name</th>
                                    <th className="py-2 px-4 border">Price</th>
                                    <th className="py-2 px-4 border text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td className="py-2 px-4 border">{product.id}</td>
                                        <td className="py-2 px-4 border">{product.brand}</td>
                                        <td className="py-2 px-4 border flex items-center gap-1"><img src={product.image} className='w-12' />{product.name}</td>
                                        <td className="py-2 px-4 border">{product.price}</td>
                                        <td className="py-2 px-4 border text-center">
                                            {/* Edit and Delete Buttons */}
                                            <button onClick={() => handleEdit(product.id)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDelete(product.id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
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

export default ManageProducts;