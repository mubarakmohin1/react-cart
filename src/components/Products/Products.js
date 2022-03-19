 import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';
 import './Products.css'
 
 const Products = (props) => {
    const [products,setProducts] = useState([])
    console.log(products)
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
     return (
         <div>
             <h1>ALL Products</h1>
            <div className="row container">
            {
                 products.map((pd) => (<SingleProducts key={pd.id} product={pd} setCartCount = {props.setCartCount}></SingleProducts>))
             }
            </div>
         </div>
     );
 };
 
 export default Products;