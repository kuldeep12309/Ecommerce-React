import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">MyShop</h2>
          <p className="text-gray-400">
            MyShop is your one-stop online store for the latest products. Quality
            and convenience delivered to your doorstep.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-white cursor-pointer">Home</li>
            <li className="mb-2 hover:text-white cursor-pointer">Shop</li>
            <li className="mb-2 hover:text-white cursor-pointer">Cart</li>
            <li className="mb-2 hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Service</h3>
          <ul>
            <li className="mb-2 hover:text-white cursor-pointer">Help Center</li>
            <li className="mb-2 hover:text-white cursor-pointer">Returns</li>
            <li className="mb-2 hover:text-white cursor-pointer">Shipping</li>
            <li className="mb-2 hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* { Contact } */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p>Email: kuldeepgupta8800@gmail.com</p>
          <p>Phone: 8418835697 </p>

          {/* Social */}
          <div className="flex space-x-4 mt-4">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
