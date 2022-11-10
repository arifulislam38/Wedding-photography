import React, { useContext, useEffect, useState } from 'react';
import {Table, Checkbox, Modal} from 'flowbite-react';
import { AuthProvider } from '../../Context/AuthContext';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
// import Button from 'react-dom';

const Reviews = () => {

    const {user} = useContext(AuthProvider);
    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data.data)
        })
    },[user?.email,loader]);


    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
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


    
        

        const showModal = () =>{
            setModal(true)
        };
        const closeModal = () =>{
            setModal(false)
        };

        const onSubmit = event =>{
          event.preventDefault();
          <Navigate to='/login'></Navigate>
          // const text = event.target.text.value;
          // return text;
        }

        const modalSubmit = (event,id) =>{
          event.preventDefault();
          const text = event.target.text.value;
          console.log(text)

          fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(text)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        }
    


    return (
        <div className='pt-28 relative'>
            {
                reviews.length > 0 ?

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
                            

<button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 " type="button"  >
 <Link to={`/update/${review._id}`}> edit</Link>
</button>


<div id="authentication-modal" tabindex="-1" aria-hidden="true" className={`${modal? '': 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 w-full md:inset-0 h-screen md:h-full justify-center items-center`}>
    
        
        <div class="lg:w-[40%] md:w-[70%] sm:w-[80%] mx-auto absolute  bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" onClick={()=> closeModal()}>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="py-6 px-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Update your review</h3>
                <form class="space-y-6" onSubmit={()=>onSubmit}>
                    
                         <textarea rows={5}  className='w-[90%] mx-auto text-black rounded' name='text' required></textarea>     
                   
                    
                    
                    <button type="submit" class="w-[50%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                    
                </form>
            </div>
        </div>
    
</div> 

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