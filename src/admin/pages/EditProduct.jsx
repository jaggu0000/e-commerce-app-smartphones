
import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from '../../components/AdminNavbar';
import { editProduct, fetchAllProducts, fetchProductById } from "../../api/productApi";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../contexts/AdminContexts";

const EditProduct = () => {

    const productId = localStorage.getItem("productId");
    const { setProducts } = useContext(AdminContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        brand: "",
        price: "",
        image: "",
        rating: "",
        description: "",
        specification: {
            display: "",
            processor: "",
            ram: "",
            camera: "",
            battery: "",
            storage: "",
            os: "",
        },
    });

    useEffect(() => {
        const fetchingProduct = async () => {
            try {
                const { data: response } = await fetchProductById(productId);
                console.log(response)
                setFormData({
                    id: response.id || "",
                    name: response.name || "",
                    brand: response.brand || "",
                    price: response.price || "",
                    image: response.image || "",
                    rating: response.rating || "",
                    description: response.description || "",
                    specification: {
                        display: response.specification.display || "",
                        processor: response.specification.processor || "",
                        ram: response.specification.ram || "",
                        camera: response.specification.camera || "",
                        battery: response.specification.battery || "",
                        storage: response.specification.storage || "",
                        os: response.specification.os || "",
                    }
                });
            } catch (error) {
                console.error(error)
            }
        }
        fetchingProduct();
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in formData.specification) {
            setFormData(prevState => ({
                ...prevState,
                specification: {
                    ...prevState.specification,
                    [name]: value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editProduct(productId, formData);
            const { data: response } = await fetchAllProducts();
            setProducts(response);
            navigate('/manageproducts');
        } catch (error) {
            console.error(error)
        }
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
                            {Object.keys(formData.specification).map((field) => (
                                <div key={field}>
                                    <label className="block text-gray-600 font-medium mb-1 capitalize">
                                        {field}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={formData.specification[field]}
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
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditProduct;
