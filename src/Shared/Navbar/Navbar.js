import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/foody.png'
const Navbar = () => {
    return (
        <nav className='py-5'>
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <img src={logo} alt="" />
                <div className='flex gap-12 text-lg font-semibold text-gray-600'>
                    <Link to="/">Home</Link>
                    <Link>About us</Link>
                    <Link>Login</Link>
                    <Link>Register</Link>
                    <Link>Blog</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;