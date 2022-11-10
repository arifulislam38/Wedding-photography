import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
// import Button from 'react-dom';

const Reviews = () => {

    const {user} = useContext(AuthProvider);
    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        fetch(`https://wedding-photography-123.vercel.app/reviews?email=${user?.email}`,{
           headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setReviews(data.data)
        })
    },[user?.email,loader]);


    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`https://wedding-photography-123.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setLoader(!loader);
                        toast.success(data.message);
                    }
                })
        }
    };


    
        

        
    


    return (
        <div className='pt-28 relative'>
            {
                reviews?.length > 0 ?

                <Table className='lg:w-[80%] mx-auto mt-4 '>
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
                            <button onClick={()=> handleDelete(review._id)} className='px-3 rounded border'>X</button>
                        </Table.Cell>
                        
                        <Table.Cell className="whitespace-nowrap font-medium text-white  flex  items-center gap-3 mr-4">
                            <img className='w-[50px] h-[50px] rounded-full' src={review.image} alt="" />
                            <div>{review.email}</div>
                        </Table.Cell>
                        
                        <Table.Cell className='text-xl text-white'>
                            {review.details}
                        </Table.Cell>
                        
                        <Table.Cell className='text-xl text-white'>
                            

                                  <button><Link to={`/update/${review._id}`}>edit</Link></button>

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