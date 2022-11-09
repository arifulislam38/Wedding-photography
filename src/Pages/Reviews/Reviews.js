import React, { useContext, useEffect, useState } from 'react';
import {Table, Checkbox} from 'flowbite-react';
import { AuthProvider } from '../../Context/AuthContext';

const Reviews = () => {

    const {user} = useContext(AuthProvider);
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data.data)
        })
    },[user?.email]);


    return (
        <div className='pt-28'>
            {
                reviews.length > 0 ?

                <Table className='w-[80%] mx-auto mt-4 '>
                     <Table.Head className='bg-yellow-50'>

                                <Table.HeadCell>
                                Delete
                                </Table.HeadCell>
    
                                <Table.HeadCell>
                                     User
                                </Table.HeadCell>
                                
                                <Table.HeadCell>
                                Review
                                </Table.HeadCell>


                                <Table.HeadCell>
                                Edit
                                </Table.HeadCell>

                                
                                
                                
                                </Table.Head>


                    <Table.Body className="divide-y">
    
                        {
                            reviews?.map(review => {
                                return <Table.Row key={review._id} className="bg-[#01141F]  w-full ">

                        <Table.Cell className='text-xl text-white pl-12'>
                            <button className='px-3 rounded border'>X</button>
                        </Table.Cell>
                        
                        <Table.Cell className="whitespace-nowrap font-medium text-white  flex  items-center gap-3 mr-4">
                            <img className='w-[50px] h-[50px] rounded-full' src={review.image} alt="" />
                            <div>{review.email}</div>
                        </Table.Cell>
                        
                        <Table.Cell className='text-xl text-white'>
                            {review.details}
                        </Table.Cell>
                        
                        <Table.Cell className='text-xl text-white'>
                            <button className='px-3 rounded border'>Edit`</button>
                        </Table.Cell>
                        
                        </Table.Row>
                            })
                        }
    
                    </Table.Body>
                </Table>

                :

                <div className='w-full h-screen flex justify-center items-center'>
                    <h1 className='text-4xl text-yellow-50 font-semibold font-serif'>No reviews found</h1>
                </div>
            }
        </div>
    );
};

export default Reviews;