import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmptyCart() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen light:bg-gray-50 light:text-white">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt="Empty Cart"
                className="w-40 mb-6 opacity-70"
            />
            <h2 className="text-2xl font-semibold mb-2 ">Oops! Your cart is empty.</h2>
            <p className="text-gray-500 mb-6">Looks like you haven’t added anything to your cart yet.</p>
            <button
                onClick={() => navigate('/')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition transform hover:scale-105"
            >
                Start Shopping 🛒
            </button>
        </div>
    );
}

export default EmptyCart;
