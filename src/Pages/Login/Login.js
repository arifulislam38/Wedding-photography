import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/wedding-1.jpg';
import { AuthProvider } from '../../Context/AuthContext';



const Login = () => {

    const {login, googleLogin, setLoading} = useContext(AuthProvider);

    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email,password)
        .then(result =>{
            const user = result.user;
            setLoading(false);
        })
        .catch(error => console.error(error))
    };

    const googlesignin = () =>{
        googleLogin()
        .then(result => {
            const user = result.user;
            setLoading(false)
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <h1 className='text-7xl font-bold font-serif text-center text-yellow-100 mb-28'>Welcome to the Login page</h1>
            <div className='grid grid-cols-2 gap-8 p-8 items-center justify-center w-[80%] mx-auto'>
                <div>
                    <img src={loginImage} alt="" />
                </div>
                <div className=''>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        <input className='w-[80%] mx-auto p-4 bg-transparent border rounded text-yellow-50' type="text" name='userName' placeholder='Your Name' />
                        <input className='w-[80%] mx-auto p-4 bg-transparent border rounded text-yellow-50' type="email" name='email' placeholder='Your Email' />
                        <input className='w-[80%] mx-auto p-4 bg-transparent border rounded text-yellow-50' type="password" name='password' placeholder='Password' />

                        <button type="submit" className='w-[80%] mx-auto text-xl text-yellow-50 font-serif font-bold p-4 border rounded'>Log In</button>

                        <button onClick={googlesignin} className='w-[80%] mx-auto text-xl text-yellow-50 font-serif font-bold p-4 border rounded'>Log In with Google</button>

                        <p className='text-xl font-serif text-gray-200 w-[80%] mx-auto'>New to this site? <Link to='/register' className='text-yellow-50 underline'>Create an account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;