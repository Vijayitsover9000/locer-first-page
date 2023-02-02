import React, { Fragment } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Box from "../../Components/Box/Box";
import Card from "../../Components/Card/Card";
import { AiFillEye } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import "./Products.css";
export default function Products(props) {
  return (
    <div className="body">
      <div>
        <Navbar />
      </div>
      <div className="anothers">
        <Header name="Products" />

        <div class="container">
          <div className="navi">
            <ul>
              <li>All Products</li>
              <li>Category</li>
              <li>Inventory</li>
              <Link to="/products/page1"><button type="submit">Add New Products</button></Link>
            </ul>
          </div>

          <div className="prod-list">
            <div className="prod-header">
              <div>Product</div>
              <div>Product-Unit</div>
              <div>MRP</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            
            <Items items1={props.items}/>
            <Items />
            <Items />
          </div>
          
        </div>
      </div>
    </div>
  );
}

function Items(props) {
  console.log(props.items1);
  return (
    <div className="items">
      <div className="prod-name">
        <p>{props.items1.name}</p>
      </div>
      <div className="size">{props.items1.category}</div>
      <div className="mrps">{props.items1.price}</div>
      <div className="status">In Stock 3000</div>
      <div>
        <div className="actions">
          <div>
            <AiFillEye />
          </div>
          <div>
            <BsFillShareFill />
          </div>
          <div>
            <HiPencilSquare />
          </div>
          <div>
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
}
