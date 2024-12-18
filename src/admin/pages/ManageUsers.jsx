import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';


const ManageUsers = () => {
    return (
        <>
            <AdminNavbar />
            <div className="p-6 pt-16 bg-gray-100 min-h-screen">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="p-2 border rounded-md w-full md:w-1/2"
                        />
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <table className="table-auto w-full text-left border-collapse">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Role</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3].map((_, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="p-3">User {index + 1}</td>
                                        <td className="p-3">user{index + 1}@example.com</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
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

export default ManageUsers;
