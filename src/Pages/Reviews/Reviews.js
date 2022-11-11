import { Spinner, Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import UseTitle from '../../Items/Title/Title';

const Reviews = () => {

    const {user} = useContext(AuthProvider);
    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(false);

    const [spinner, setSpinner] = useState(true);

    UseTitle('My Reviews');

    useEffect(()=>{
        setSpinner(true)
        fetch(`https://wedding-photography-123.vercel.app/reviews?email=${user?.email}`,{
           headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                setReviews(data.data)
                setSpinner(false)
            }
            else{
                toast.error(data.message)
                setSpinner(false)
            }
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
            <h1 className='text-5xl text-yellow-100 font-serif font-semibold text-center mb-10'>Your all reviews are available here</h1>

            <div className={`mt-20 w-full h-full justify-center flex flex-wrap items-center gap-2 ${spinner ? 'block' : 'hidden'}`}>
                    <Spinner
                            aria-label="Extra large spinner example"
                            size="xl"
                        />
            </div>

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
                                     Name
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
                            {review.name}
                        </Table.Cell>

                        <Table.Cell className='text-xl text-white'>
                            {review.details}
                        </Table.Cell>
                        
                        <Table.Cell className='text-xl text-white'>
                            

                                  <button className='px-3 rounded border'><Link to={`/update/${review._id}`}>Update</Link></button>

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