import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">MobKart</h3>
          <p className="text-sm">Your one-stop shop for the latest smartphones</p>
        </div>

        <div className="mb-4">
          <a href="/about" className="mx-4 text-sm hover:underline">About Us</a>
          <a href="/contact" className="mx-4 text-sm hover:underline">Contact</a>
          <a href="/privacy" className="mx-4 text-sm hover:underline">Privacy Policy</a>
          <a href="/terms" className="mx-4 text-sm hover:underline">Terms of Service</a>
        </div>

        <div className="mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-lg hover:text-blue-600">
            <i className="fab fa-facebook-f">facebook</i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-lg hover:text-black">
            <i className="fab fa-twitter">x</i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-lg hover:text-pink-500">
            <i className="fab fa-instagram">instagram</i>
          </a>
        </div>

        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} MobKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
