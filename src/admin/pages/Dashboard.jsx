import React, { useContext, useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContexts';
import { use } from 'react';

const Dashboard = () => {

    const navigate = useNavigate();
    const { fetchuserNumber, fetchProductNumber, fetchOrderNumber, fetchTotalRevenue } = useContext(AdminContext);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);  

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const users = await fetchuserNumber();
                setTotalUsers(users);

                const products = await fetchProductNumber();
                setTotalProducts(products);

                const orders = await fetchOrderNumber();
                setTotalOrders(orders);

                const revenue = await fetchTotalRevenue();
                setTotalRevenue(revenue);
            } catch (error) {
                console.error(error)
            }
        }
        fetchAllData();
    }, []);

    return (
        <>
            <AdminNavbar />
            <div className="p-6 pt-16 bg-gray-100 min-h-screen">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

                    {/* Statistics Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
                        <div className="p-4 bg-blue-300 hover:bg-blue-400 shadow-md rounded-lg text-center cursor-pointer hover:shadow-xl transition duration-300"
                            onClick={() => navigate('/manageusers')}>
                            <h2 className="text-xl font-semibold mb-2">Total Users</h2>
                            <p className="text-3xl font-bold">{totalUsers}</p>
                        </div>
                        <div className="p-4 bg-orange-300 hover:bg-orange-400 shadow-md rounded-lg text-center cursor-pointer hover:shadow-xl transition duration-300"
                            onClick={() => navigate('/manageproducts')}>
                            <h2 className="text-xl font-semibold mb-2">Total Products</h2>
                            <p className="text-3xl font-bold">{totalProducts}</p>
                        </div>
                        <div className="p-4 bg-violet-300 hover:bg-violet-400 shadow-md rounded-lg text-center cursor-pointer hover:shadow-xl transition duration-300"
                            onClick={() => navigate('/vieworders')}>
                            <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
                            <p className="text-3xl font-bold">{totalOrders}</p>
                        </div>
                        <div className='hidden lg:flex'></div>
                        <div className="p-4 bg-green-300 shadow-md rounded-lg text-center">
                            <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
                            <p className="text-3xl font-bold">₹{totalRevenue}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;
