import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthProvider } from '../../Context/AuthContext';

const AddService = () => {
    const {user} = useContext(AuthProvider);

     const handleSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const image = event.target.image.value;

        const product = {
            name, 
            price,
            description,
            image
        }
        fetch('https://wedding-photography-123.vercel.app/addservice',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.success){
                
                toast.success(data.message)
            }
        })
    }



    return (
        <div className='w-full h-screen pt-28'>
            <form className='w-1/2 h-1/2 mx-auto shadow shadow-lg p-4 text-2xl flex flex-col gap-5 border rounded' onSubmit={handleSubmit}>
                <input className='p-2 rounded w-full' type="text" name='name' placeholder='Service Name' required />

                <input className='p-2 rounded w-full' type="text" name='price' placeholder='Service Price' required/>

                <input className='p-2 rounded w-full' type="text" name='description' placeholder='Description' required/>

                <input className='p-2 rounded w-full' type="text" name='image' placeholder='Image url' required/>

                <button className='border p-3 text-2xl w-full text-white' type='submit'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;