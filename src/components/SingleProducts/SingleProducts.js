 import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
 import './SingleProducts.css'
 
 
 const SingleProducts = (props) => {
      const {title,description,image} = props.product;
     return (
         
         <div data-aos="flip-left"
         data-aos-easing="linear"
         data-aos-duration="1500" className="col-md-4 col-sm-12">
           <div className="card p-3 border">
           <h1>{title.slice(0,10)}</h1>
           <img className='w-50 m-auto' src={image} alt="" />
           <p>{description.slice(0,100)}</p>

           <div className="d-flex justify-content-around">
           <button onClick={props.setCartCount} className='btn btn-success'>Add To Cart</button>
           <button className='btn btn-danger'>Delete</button>
           {/* <button className='btn btn-info'>Details</button> */}
           <ReactModal product = {props.product}></ReactModal>
           </div>
           </div>
         </div>
     );
 };
 
 export default SingleProducts;