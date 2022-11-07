// import  { React, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const products = () => {


//     const handleSubmit = event =>{
//     event.preventDefault();
//     const form = event.target;

//     const product = {
//       name : form.pname.value,
//       price : form.price.value,
//       image : form.image.value
//     };

//     fetch('http://localhost:5000/product', {
//       method : "POST",
//       headers: {
//         'content-type' : "application/json"
//       },
//       body: JSON.stringify(product)
//     })
//     .then(res => res.json())
//     .then(data => {
//       if(data.success){
//         setLoading(!loading)
//         alert(data.message)
//         event.target.reset()
//       }else{
//         alert(data.error)
//       }
//     })
//     .catch(error => {
//       alert(error.message)
//     })
    
//   };



//   const handleDelete = id =>{
//     fetch(`http://localhost:5000/product/${id}`, {
//       method : "DELETE",  
//     })
//     .then(res => res.json())
//     .then(data => {
//       if(data.success){
//         setLoading(!loading)
//         alert(data.message)
//       }else{
//         alert(data.error)
//       }
//     })
//     .catch(error => {
//       alert(error.message)
//     })
//   }

  



//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   useEffect(()=> {
//     fetch('http://localhost:5000/product')
//     .then(res => res.json())
//     .then(data => {
//       if(data.success){
//         setProducts(data.data)
//       }else{
//         alert(data.error)
//       }
//     })
//     .catch(error => {
//       alert(error.message)
//     })
//   }, [loading])











//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//         <input type="text" name="pname"  placeholder='product name' required /> <br /><br />
//         <input type="text" name="price"  placeholder='price' required/> <br /><br />
//         <input type="text" name="image"  placeholder='image url' required/> <br /><br />
//         <input type="submit" value="create" />
//       </form>
//       <div className='text-center'>
//           {
//             products.map(product => {
//               return <div className='flex text-center w-full justify-center items-center gap-8 mb-6 bg-gray-400'>
//                 <button onClick={()=> handleDelete(product._id)} className='border p-1'>X</button>
//                 <h2>{product.name} {product.price} </h2>
//                 <img src={product.image} className="w-20" alt="" />
//                 <button className='border p-1'>update</button>
//               </div>
//             })
//           }
//       </div>
//         </div>
//     );
// };

// export default products;



 

 