import React, { useState } from 'react';
import {Table, Checkbox} from 'flowbite-react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);


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
                                return <Table.Row className="bg-[#01141F]  w-full ">
                        
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

                :

                <div className='w-full h-screen flex justify-center items-center'>
                    <h1 className='text-4xl text-yellow-50 font-semibold font-serif'>No reviews found</h1>
                </div>
            }
        </div>
    );
};

export default Reviews;