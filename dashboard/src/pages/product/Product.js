import React from "react";
import "./product.css";
import {Link} from 'react-router-dom';
import Chart from "../../components/chart/chart";
import {productData} from  '../../dummyData';

import {Publish} from '@material-ui/icons';


const Product = () => {
  return <div className="product">
      
      <div className="productTitleContainer">
          <h1 className="productTitle">
              Product
          </h1>
          <Link to='/newproduct'>
          <button className="productAddButton">Create</button>
          </Link>     
      </div>
      <div className="productTop">
       <div className="productTopLeft">
        <Chart data={productData} dataKey="Sales" title='Sales Performance' />
       </div>
       <div className="productTopRight">
           <div className="productInfoTop">
               <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className='productInfoImg' alt="" />
               <span className="productName">Apple Airpods</span>
           </div>
           <div className="producyInfoBottom">
               <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
               <span className="productInfoValue">123</span>
               </div>
               <div className="productInfoItem">
                <span className="productInfoKey">SALES</span>
               <span className="productInfoValue">5123</span>
               </div>
               <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
               <span className="productInfoValue">yes</span>
               </div>
               <div className="productInfoItem">
                <span className="productInfoKey">In stock:</span>
               <span className="productInfoValue">no</span>
               </div>
               
           </div>
       </div>
      </div>

      <div className="productBottom">
          <form  className="productForm">
             <div className="productFormLeft">
                 
                 <label>Product Name</label>
                 <input type="text" placeholder='Apple Airpod' />
                
                <label>In Stock</label>
                <select name='inStock' id='inStock'>
                    <option value='yes' >Yes</option>
                    <option value='no' >No</option>
                </select>

                 <label>Active</label>
                <select name='active' id='active'>
                    <option value='yes' >Yes</option>
                    <option value='no' >No</option>
                </select>
             </div>


             <div className="productFormRight">
                 <div className="productUpload">
                     <img src="https://images.pexels.com/photos/7054529/pexels-photo-7054529.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className='productUploadImg' alt="" />
                 
                 <label for='file'>
                 <Publish/>
                 </label>
                 <input type='file' id='file' style={{display:'none'}}  />
             </div>
             <button className='productButton'>Update</button>
           </div>
          </form>

      </div>
      

      
      </div>;
};

export default Product;
