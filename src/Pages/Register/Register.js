import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/wedding-2.jpg';
import { AuthProvider } from '../../Context/AuthContext';


const Register = () => {
    const {createUser, setLoading} = useContext(AuthProvider);

    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            setLoading(false)
        })
        .catch(error => console.error(error));

    };

    
    return (
        <div>
            <h1 className='text-7xl font-bold font-serif text-center text-yellow-100 mb-28 pt-24'>Welcome to the Register page</h1>
            <div className='grid grid-cols-2 gap-8 p-8 items-center justify-center w-[80%] mx-auto'>
                <div>
                    <img src={loginImage} alt="" />
                </div>
                <div className=''>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        <input className='w-[80%] mx-auto p-4 bg-transparent border rounded text-yellow-50' type="text" name='userName' placeholder='Your Name' />

                        <input className='w-[80%] mx-auto p-4 bg-transparent border rounded text-yellow-50' type="text" name='imageurl' placeholder='Image Link' />

                        <input className='w-[80%] mx-auto p-4 bg-transparent border rounded text-yellow-50' type="email" name='email' placeholder='Your Email' />

                        <input className='w-[80%] mx-auto p-4 bg-transparent border rounded text-yellow-50' type="password" name='password' placeholder='Password' />

                        <button type="submit" className='w-[80%] mx-auto text-xl text-yellow-50 font-serif font-bold p-4 border rounded'>Create Account</button>

                        

                        <p className='text-xl font-serif text-gray-200 w-[80%] mx-auto'>Already have an account? <Link to='/login' className='text-yellow-50 underline'>Log in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;