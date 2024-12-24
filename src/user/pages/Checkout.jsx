import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { addNewOrder } from '../../api/orderApi';

const Checkout = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const { cartItems, clearCart } = useContext(CartContext);

    if (cartItems.length === 0) {
        navigate('/cart')
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
    });

    const [paymentMethod, setPaymentMethod] = useState(''); // Payment method selection
    const [paymentDetails, setPaymentDetails] = useState({
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        upiId: '',
    });


    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePaymentDetailsChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('Order Placed Successfully!');
        const newOrder = {
            id: Date.now().toString(),
            userId: localStorage.getItem("user"),
            username: localStorage.getItem("username"),
            date: Date(),
            paymentMethod: paymentMethod,
            paymentDetails: paymentDetails,
            total: totalPrice,
            address: formData,
            orderStatus: "Not Delivered",
            paymentStatus: "paid",
            products: cartItems
        }
        await addNewOrder(newOrder);
        clearCart();
        setTimeout(() => {
            setSuccessMessage('');
            navigate('/orders');
        }, 2000);
    };

    if (successMessage) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-white border border-green-500 text-green-600 text-3xl font-semibold rounded-md">
                {successMessage}
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Checkout</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Shipping Information */}
                    <div>
                        <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="p-2 border rounded-md"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="p-2 border rounded-md"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="p-2 border rounded-md"
                                    required
                                />
                                <textarea
                                    name="address"
                                    placeholder="Street Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="p-2 border rounded-md"
                                    required
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="p-2 border rounded-md"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="p-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="postalCode"
                                    placeholder="Postal Code"
                                    value={formData.postalCode}
                                    onChange={handleInputChange}
                                    className="p-2 border rounded-md"
                                    required
                                />
                            </div>

                            {/* Payment Method Selection */}
                            <h2 className="text-xl font-semibold mt-6 mb-4">Payment Information</h2>
                            <div className="flex flex-col gap-4">
                                <label className="font-medium">Choose Payment Method:</label>
                                <div className="flex flex-col gap-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="debitCard"
                                            checked={paymentMethod === 'debitCard'}
                                            onChange={handlePaymentMethodChange}
                                            className="mr-2"
                                        />
                                        Debit Card
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="creditCard"
                                            checked={paymentMethod === 'creditCard'}
                                            onChange={handlePaymentMethodChange}
                                            className="mr-2"
                                        />
                                        Credit Card
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="upi"
                                            checked={paymentMethod === 'upi'}
                                            onChange={handlePaymentMethodChange}
                                            className="mr-2"
                                        />
                                        UPI
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={handlePaymentMethodChange}
                                            className="mr-2"
                                        />
                                        Cash On Delivery
                                    </label>
                                </div>

                                {/* Payment Details Form Based on Selected Method */}
                                {paymentMethod === 'debitCard' || paymentMethod === 'creditCard' ? (
                                    <>
                                        <input
                                            type="text"
                                            name="cardName"
                                            placeholder="Cardholder Name"
                                            value={paymentDetails.cardName}
                                            onChange={handlePaymentDetailsChange}
                                            className="p-2 border rounded-md"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            placeholder="Card Number"
                                            value={paymentDetails.cardNumber}
                                            onChange={handlePaymentDetailsChange}
                                            className="p-2 border rounded-md"
                                            required
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                name="expiryDate"
                                                placeholder="Expiry Date (MM/YY)"
                                                value={paymentDetails.expiryDate}
                                                onChange={handlePaymentDetailsChange}
                                                className="p-2 border rounded-md"
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="cvv"
                                                placeholder="CVV"
                                                value={paymentDetails.cvv}
                                                onChange={handlePaymentDetailsChange}
                                                className="p-2 border rounded-md"
                                                required
                                            />
                                        </div>
                                    </>
                                ) : paymentMethod === 'upi' ? (
                                    <input
                                        type="text"
                                        name="upiId"
                                        placeholder="UPI ID (e.g., yourname@upi)"
                                        value={paymentDetails.upiId}
                                        onChange={handlePaymentDetailsChange}
                                        className="p-2 border rounded-md"
                                        required
                                    />
                                ) : null}
                            </div>

                            <button
                                type="submit"
                                className="mt-6 w-full text-white py-2 rounded-lg bg-orange-600 hover:bg-orange-700"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <div className='p-4 w-full border rounded-lg shadow-md'>
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                            <ul className="divide-y divide-gray-300">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="flex justify-between py-2">
                                        <div>
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-semibold">₹{item.price * item.quantity}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between mt-4 text-lg font-semibold">
                                <span>Total:</span>
                                <span>₹{totalPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
