import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight text-gray-900">Book Store</h1>
      <div>
        <Link to="/" className="text-gray-900 pr-4 ">Home</Link>
        <Link to="/cart" className="text-gray-900 py-2 px-4 rounded">
          My Cart
        </Link>
        <Link to="/personalinfo" className="text-gray-900 py-2 px-4 rounded">
          Personal Information
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
