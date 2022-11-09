import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import {Table, Checkbox} from 'flowbite-react';
const ServiceDetails = () => {
     
    const service = useLoaderData();

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const {user} = useContext(AuthProvider);

    const {name, price, description, image} = service.data;


    useEffect(()=>{
        fetch(`http://localhost:5000/review?name=${name}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data.data)
            console.log(data.data)
            
        })
    },[name, loading])

    const handleSubmit = event =>{
        event.preventDefault();
        const badge = event.target.option.value;
        const details = event.target.textarea.value;
        const time = new Date().toLocaleTimeString();
        const review = {
            name,
            email: user?.email,
            image: user?.photoURL,
            badge,
            details,
            time
            
        };
        console.log(review)

        fetch('http://localhost:5000/review',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.success){
                setLoading(!loading)
                toast.success(data.message)
            }
        })

    };



    return (
        <div className='py-40 px-10'>
            <div className='grid grid-cols-2 gap-8'>
                <div className='flex flex-col gap-5 p-2'>
                    <img className='rounded' src={image} alt="" />
                    <div className='flex justify-between  items-center'>
                        <h1 className='text-4xl font-semibold font-serif text-yellow-50'>{name}</h1>
                        <h3 className='text-3xl font-semibold font-serif text-yellow-50'>{price}</h3>
                    </div>
                    <p className='text-xl font-serif text-yellow-50 '>{description}</p>
                    <button className='text-2xl text-white font-semibold font-serif p-4 bg-yellow-300 rounded'>Buy Package</button>
                </div>
                <div className='w-full p-2'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center gap-5'>
                        <select className='w-full bg-gray-200 rounded p-4 text-xl border-none' name="option" id='' required >
                            <option value="excellent">Excellent</option>
                            <option value="good" >Good</option>
                        </select>
                        <textarea className=' w-full bg-gray-200 rounded p-4 text-xl border-none' rows={5} cols='70' name='textarea' required></textarea>
                        <button type="submit" className='p-3 text-2xl bg-yellow-50 rounded' disabled={user? false: true}>Give your review</button>

                        {
                            !user?.uid && <p className='text-xl text-yellow-50 font-semibold'>Plz <Link className='text-yellow-200 underline' to='/login'>Login</Link> to submit your review</p>
                        }


                    </form>

                        {
                 reviews?.length > 0 &&  <Table className='w-full mt-4'>
  <Table.Head>
    
    <Table.HeadCell>
      User
    </Table.HeadCell>
    
    <Table.HeadCell>
      Review
    </Table.HeadCell>
    
    
  </Table.Head>


  <Table.Body className="divide-y">
    
    {
        reviews.map(review => {
            return <Table.Row className="bg-[#394e42]  w-full ">
      
      <Table.Cell className="whitespace-nowrap font-medium text-white  flex  items-center gap-3 mr-4">
        <img className='w-[50px] h-[50px] rounded-full' src={review.image} alt="" />
        <div>{review.email}</div>
      </Table.Cell>
      
      <Table.Cell className='text-xl text-white'>
        {review.details}
      </Table.Cell>
      
      
    </Table.Row>
        })
    }
    
  </Table.Body>
</Table>
                }
                </div>
   
            </div>



            

            
        </div>
    );
};

export default ServiceDetails;

