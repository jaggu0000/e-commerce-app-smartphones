import React, { useEffect, useState } from 'react'
import UserNavbar from '../../components/UserNavbar'
import { fetchAllProducts } from '../../api/productApi'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const loadProducts = async () => {
        try {
            const response = await fetchAllProducts();
            setProducts(response.data);
        } catch (error) {
            
            setError("Failed to load Smartphones!");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    if (loading) {
        return (
            <>
                <UserNavbar />
                <div className='h-screen flex flex-col justify-between items-center pt-24 text-center text-xl '>
                    Loading...
                </div>
                <Footer />
            </>

        )
    }

    if (error) {
        return (
            <>
                <UserNavbar />
                <div className="h-screen flex justify-center items-center text-red-500 text-xl font-semibold pt-24 md:pt-14">
                    {error}
                </div>
                <Footer />
            </>
        )
    }


    return (
        <>
            <UserNavbar />

            <div className='min-h-screen pt-24 md:pt-14 p-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg shadow-md mt-6 p-4 hover:shadow-2xl transition duration-300 cursor-pointer"
                            onClick={() => navigate(`/products/${product.id}`)}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-contain rounded"
                            />
                            <h2 className="text-lg font-bold mt-4">{product.name}</h2>
                            <p className="text-gray-600">{product.brand}</p>
                            <p className="text-green-600 font-semibold mt-2">₹{product.price}</p>
                            <p className="text-yellow-500 text-sm mt-1">{product.rating} ⭐</p>
                            <p className="text-sm mt-2 text-gray-500">{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Home
