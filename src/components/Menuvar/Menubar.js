 import React from 'react';
 import './Menubar.css'
 
 const Menubar = (props) => {
     return (
         <div>
             
             <div className="container bg-success rounded">
                 <div className="row">
                     <div className="col-md-2 p-4 text-white">
                       <span className='logo'>logo</span>
                     </div>
                     <div className="col-md-10 menu-container justify-content-end text-white">
                         
                             <li className='items me-4 p-4'>login</li>
                             <li className='items  me-4 p-4'>Home</li>
                             <li className='items  me-4 p-4'>cart <sup className='cart'>{props.count}</sup></li>
                             <li className='items  me-4 p-4'>About</li>
                             
                         
                     </div>
                 </div>
             </div>
         </div>
     );
 };
 
 export default Menubar;