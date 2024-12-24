import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <>
            <AdminNavbar />
            <div className="p-6 pt-16 bg-gray-100 min-h-screen">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

                    {/* Management Links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md text-center hover:bg-blue-600 hover:shadow-lg transition cursor-pointer"
                            onClick={() => navigate('/manageusers')}>
                            <h3 className="text-lg font-medium">Manage Users</h3>
                            <p>View and edit user accounts</p>
                        </div>
                        <div className="p-4 bg-green-500 text-white rounded-lg shadow-md text-center hover:bg-green-600 hover:shadow-lg transition cursor-pointer"
                            onClick={() => navigate('/manageproducts')}>
                            <h3 className="text-lg font-medium">Manage Products</h3>
                            <p>Add, edit, or remove products</p>
                        </div>
                        <div className="p-4 bg-yellow-500 text-white rounded-lg shadow-md text-center hover:bg-yellow-600 hover:shadow-lg transition cursor-pointer"
                            onClick={() => navigate('/vieworders')}>
                            <h3 className="text-lg font-medium">View Orders</h3>
                            <p>Track and update order statuses</p>
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="p-4 bg-white shadow-md rounded-lg text-center">
                            <h2 className="text-xl font-semibold mb-2">Total Users</h2>
                            <p className="text-3xl font-bold">1,234</p>
                        </div>
                        <div className="p-4 bg-white shadow-md rounded-lg text-center">
                            <h2 className="text-xl font-semibold mb-2">Total Products</h2>
                            <p className="text-3xl font-bold">456</p>
                        </div>
                        <div className="p-4 bg-white shadow-md rounded-lg text-center">
                            <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
                            <p className="text-3xl font-bold">789</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;
