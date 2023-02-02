import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import {ReactComponent as CameraIcon} from '../../assets/camera.svg';
import "./Page1.scss";
export default function page1(props) {
  // const[Product_name,setProduct_name]=useState("Enter Product name");
  // const[Product_category,setProduct_category]=useState("Enter Product Category");
  // const[Product_price,setProduct_price]=useState("Enter Product price");
  // const[Product_unit,setProduct_unit]=useState("Enter Product unit");
  // const[arr,setarr]=useState([]);

  // function handleunit(e)
  // {
  //   setProduct_unit(e.target.value);
  // }
  // function handleprice(e)
  // {
  //   setProduct_price(e.target.value);
  // }
  // function handlename(e)
  // {
  //   setProduct_name(e.target.value);
  // }
  // function handlecategory(e)
  // {
  //   setProduct_category(e.target.value);
  // }
 
  // function makelist()
  // {
  //  const newarr=[{
  //   "name":Product_name,
  //   "category":Product_category,
  //   "price":Product_price,
  //   "unit":Product_unit
  //  }]
  //  setarr(newarr);
  //  props.function(arr);
  // //  console.log(arr);
  // }


  return (
    <div className="row">
      <div>
        <Navbar />
      </div>
      <div className="column">

        <Header />

        <div className="first-box">
        
          <p className="head">Product Information</p>
          <div className="prod-name">
            <p>Product Name</p>
            <input type="text" value="name"></input>
            <p>Product Category</p>
            <input type="text" value="name"></input>
          </div>

          <div >
            <div1>
              <p>Product Price</p>
              <input type="text" value="Enter Product category"></input>
            </div1>
            <div2>
              <p>Discounted Price</p>
              <input type="text" value="okay"></input>
            </div2>
            <div3>
              <p>Product Unit</p>
              <input type="text" value="okay"></input>
              <button className="add-prod-btn" type="submit" >Add Product</button>
            </div3>
          </div>
        </div>
        <ProductBelow/>
      </div>

    </div>
  );
}


function ProductBelow() {
  
  return (
    <div className="p-box-below">

      <div className="pdesc">
        <div className="desc-t">Product Description</div>
        <textarea className="p-desc-textarea" name="description" id=""></textarea>
      </div>

      <div className="p-image">
        <div className="desc-i">Product Images</div>
        <div className="p-img-box">
          <CameraIcon />
        </div>
      </div>

      <div className="p-add-inventory">
        <div className="p-invent-desc">Add Inventory</div>
        <div className="p-invent-box">
          Total available items
        </div>
        <input className="available-items-box"></input>
        </div>
  
        <div className="p-add-sizes">
          <div className="p-add-size-title">Add Sizes</div>
          <button className="p-add-size-box">
            Add size
          </button>
        </div>
  
        <div className="p-add-colors">
          <div className="p-add-color-title">Add Colors</div>
          <button className="p-add-color-box">
            Add color
          </button>
        </div>
        <button className="add-prod-btn">Add Product</button>
  
    </div>
  );
}