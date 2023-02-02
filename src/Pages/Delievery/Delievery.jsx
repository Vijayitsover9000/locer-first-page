import React from "react";
import './Delievery.css';
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import PrevNext from "../../Components/Prev-Next/PrevNext";
const DeliveryHeader = (props)=>{
    return (
        <div className = "delivery-header">
            <div className="address">
                Address
            </div>
            <div className="vehicle">
                Vehicle
            </div>
            <div className="partner">
                Partner
            </div>
            <div className = "invoic">
                Invoice
            </div>
            <div className = "status">
                Status
            </div>
            <div className = "departure-date">
                Departure Date
            </div>
            
            <div className = "arrival-date">
                Arrival Date
            </div>
        </div>
        );
    }
    
    const DeliveryItem = (props)=>{
        return (
            <div className = "delivery-item">
                <div className="address">
                    West Bengal 711103 ...
                </div>
                <div className="vehicle">
                    WB72C0301
                </div>
                <div className="partner">
                    Partner
                </div>
                <div className = "invoic">
                    INV 0301
                </div>
                <div className = "status">
                    Status
                </div>
                <div className = "departure-date">
                    12 Jan 8:00 AM
                </div>
                <div className = "arrival-date">
                12 Jan 8:00 AM
            </div>
        </div>
    );
}
const Delivery = (props)=>{
    return (
        <div className="row">
      <div>
        <Navbar />
      </div>
      <div className="column">
        <div>
          <Header name="Delievery"/>
        </div>
        <div className="delivery-s">
            <DeliveryHeader></DeliveryHeader>
            <DeliveryItem status="refunded"></DeliveryItem>
            <DeliveryItem></DeliveryItem>
            <DeliveryItem status="cancelled"></DeliveryItem>
            <DeliveryItem></DeliveryItem>
            <DeliveryItem></DeliveryItem>

            <DeliveryItem></DeliveryItem>
            <DeliveryItem status="refunded"></DeliveryItem>
            <DeliveryItem></DeliveryItem>
            <DeliveryItem status="cancelled"></DeliveryItem>
            <DeliveryItem></DeliveryItem>
        </div>
        <div><PrevNext/></div>
        </div>
    </div>
    );
}
export default Delivery;    