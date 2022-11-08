import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className='flex justify-between items-center px-20 h-[80px] bg-slate-400 opacity-40 z-10 absolute top-0 w-full'>
        <div className='border'>
            <h1>This is an image</h1>
        </div>
        <div className='border'>
            <Link>Services</Link>
            <Link>create</Link>
            <Link>update</Link>
            <Link>blog</Link>
            <Link>faq</Link>
        </div>
        <div>
            <button className='px-2 py-1 bg-green-200 rounded mr-3'><Link to='/login'>Log In</Link></button>
            <button className='px-2 py-1 bg-green-200 rounded'><Link to='/register'>Register</Link></button>
        </div>
      </nav>
    );
};

export default Navbar;