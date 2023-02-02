import React from "react";
import "./Orders.css";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PrevNext from "../../Components/Prev-Next/PrevNext";
const OrderHeader = (props) => {
  return (
    <div className="order-header">
      <div className="invoice">Invoice</div>
      <div className="date">Date</div>
      <div className="status">Status</div>
      <div className="customer">Customer</div>
      <div className="download"></div>
    </div>
  );
};
const OrderItem = (props) => {
  return (
    <div className="order-item">
      <div className="invoice">INV-3066</div>
      <div className="date">Jan 10,2023</div>
      <div className="status">{props.status ? props.status : "paid"}</div>
      <div className="customer">
        <div>Oliver Rhode</div>
        <div className="cust-mail">oliverrhode@gmail.com</div>
      </div>
      <div className="download">Download</div>
    </div>
  );
};
const Orders = (props) => {
  return (
    <div className="row">
      <div>
        <Navbar />
      </div>
      <div className="column">
        <div>
          <Header name="Orders"/>
        </div>
        <div className="order-s">
          <OrderHeader></OrderHeader>
          <OrderItem status="refunded"></OrderItem>
          <OrderItem></OrderItem>
          <OrderItem status="cancelled"></OrderItem>
          <OrderItem></OrderItem>
          <OrderItem></OrderItem>

          <OrderItem></OrderItem>
          <OrderItem status="refunded"></OrderItem>
          <OrderItem></OrderItem>
          <OrderItem status="cancelled"></OrderItem>
          <OrderItem></OrderItem>
        </div>
        <div><PrevNext/></div>
      </div>
    </div>
  );
};
export default Orders;
