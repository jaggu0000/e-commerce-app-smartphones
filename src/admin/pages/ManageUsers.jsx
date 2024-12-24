import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { blockUser, fetchUsers } from '../../api/userApi';


const ManageUsers = () => {

    const [users, setUsers] = useState([]);
    const [toggleBlock, setToggleBlock] = useState(false);

    useEffect(() => {
        const userFetch = async () => {
            const { data: response } = await fetchUsers();
            setUsers(response);
        }
        userFetch();
    }, [toggleBlock]);
    const handleToggle = (id) => {
        const userBlock = async () => {
            try {
                await blockUser(id);
                setToggleBlock(!toggleBlock);
            } catch (error) {
                console.error("Failed to block/unblock user:", error);
            }
        }
        userBlock();
    }

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
                        <table className="table-auto w-full text-center border-collapse">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="p-3">User Id</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    (user.role === "user") &&
                                    <tr key={index} className="border-t">
                                        <td className="p-3">{user.id}</td>
                                        <td className="p-3">{user.username}</td>
                                        <td className="p-3">{user.email}</td>
                                        <td className="p-3 flex justify-center items-center">
                                            <button
                                                onClick={() => handleToggle(user.id)}
                                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mr-2 w-20 flex justify-center items-center ">
                                                {user.block ? "Unblock" : "Block"}
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
