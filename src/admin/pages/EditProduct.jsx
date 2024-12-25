 
import React, { useState } from "react";
import AdminNavbar from '../../components/AdminNavbar';
import { NavLink } from "react-router-dom";

const EditProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        price: "",
        image: "",
        rating: "",
        description: "",
        display: "",
        processor: "",
        ram: "",
        camera: "",
        battery: "",
        storage: "",
        os: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <>
            <AdminNavbar />
            <div className="min-h-screen bg-gray-100 pb-10 pt-20">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                        Edit Product
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Product Name */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter product name"
                                required
                            />
                        </div>

                        {/* Brand */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Brand
                            </label>
                            <input
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter brand"
                                required
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Price (in ₹)
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter price"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Image URL
                            </label>
                            <input
                                type="url"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter image URL"
                                required
                            />
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Rating (out of 5)
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                max="5"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter rating"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter description"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-4">
                            {["display", "processor", "ram", "camera", "battery", "storage", "os"].map((field) => (
                                <div key={field}>
                                    <label className="block text-gray-600 font-medium mb-1 capitalize">
                                        {field}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder={`Enter ${field}`}
                                        required
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <NavLink
                                to={'/manageproducts'}
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
                            >
                                Save Changes
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditProduct;
