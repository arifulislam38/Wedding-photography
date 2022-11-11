import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/login-new.png';
import { AuthProvider } from '../../Context/AuthContext';
import UseTitle from '../../Items/Title/Title';


const Register = () => {
    const {createUser,updateUser, setLoading} = useContext(AuthProvider);

    UseTitle('Register');

    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const image = event.target.image.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
             updateUser(name, image).then().then();
             toast.success('successfully created user')
             event.target.reset();
            setLoading(false)
        })
        .catch(error => console.error(error));

    };

    
    return (
        <div>
            <h1 className='text-7xl font-bold font-serif text-center text-yellow-100 mb-32 pt-24'>Welcome to the Register page</h1>
            <div className='grid lg:grid-cols-2 gap-8 p-8 items-center justify-center w-[80%] mx-auto'>
                <div className='sm:mb-5'>
                    <img src={loginImage} alt="" />
                </div>
                <div className=''>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        <input className='w-[80%] mx-auto p-4 bg-transparent border rounded text-yellow-50' type="text" name='name' placeholder='Your Name' />

                        <input className='w-[80%] mx-auto p-4 bg-transparent border rounded text-yellow-50' type="text" name='image' placeholder='Image Link' />

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