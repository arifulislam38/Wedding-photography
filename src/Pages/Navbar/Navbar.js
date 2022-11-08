import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';

const Navbar = () => {

    const {logOut, user} = useContext(AuthProvider);
    
    const handlelogOut = () =>{
      logOut()
      .then()
      .then()
    };

    return (
      <nav className='flex justify-between items-center px-20 h-[80px] bg-slate-400 opacity-40 z-10 absolute top-0 w-full'>
        <div className='border'>
            <h1>This is an image</h1>
        </div>
        <div>
            <button className='px-2 py-1 bg-green-200 rounded mr-3'><Link to='/services'>Services</Link></button>
            <button className='px-2 py-1 bg-green-200 rounded mr-3'><Link to='/reviews'>Reviews</Link></button>
            
            <button className='px-2 py-1 bg-green-200 rounded mr-3'><Link to='/blog'>Blog</Link></button>
            <button className='px-2 py-1 bg-green-200 rounded mr-3'><Link to='/faq'>FAQ</Link></button>
        </div>
        <div>
          {
            user? 
            <>
              <button onClick={handlelogOut} className='px-2 py-1 bg-green-200 rounded mr-3'>Log Out</button>
              <img className='w-[55px] h-[55px] rounded-full inline' src={user.photoURL} alt="" />
            </>
            :
            <>
              <button className='px-2 py-1 bg-green-200 rounded mr-3'><Link to='/login'>Log In</Link></button>
              <button className='px-2 py-1 bg-green-200 rounded'><Link to='/register'>Register</Link></button>
            </>
          }
            
        </div>
      </nav>
    );
};

export default Navbar;