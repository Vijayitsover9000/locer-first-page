import React, { Fragment } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaProductHunt } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { TbBus } from "react-icons/tb";
import { FaPaypal } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { VscListUnordered} from "react-icons/vsc";
import { ReactComponent as LogoMain} from '../../assets/logo-main.svg'
export default function Navbar(props) {
  return (
    <Fragment>
      <div className="nav">
      <div className="logo-main-nav">
      <LogoMain/>
      <span>Locer</span>
      </div>
        <div className="home">
          <Link to="/">
            <p>
              <AiFillHome/>
              <span>Home</span>
            </p>
          </Link>
        </div>
        <div className="orders">
          <Link to="/orders">
            <p>
           <VscListUnordered/>
           <span>Orders</span>
            </p>
          </Link>
        </div>
        <div className="delievery">
          <Link to="/Delievery">
            <p>
            <TbBus/>
            <span>Delievery</span>
            </p>
          </Link>
        </div>
        <div className="products">
          <Link to="/Products">
            <p>
              <FaProductHunt />
              <span>Products</span>
            </p>
          </Link>
        </div>
        <div className="products">
          <Link to="/Analytics">
            <p>
            <SiGoogleanalytics/>
            <span>Analytics</span>
            </p>
          </Link>
        </div>
        <div className="Payouts">
          <Link to="/Payouts">
            <p>
              <FaPaypal />
              <span>Payouts</span>
            </p>
          </Link>
        </div>
        <div className="Discounts">
          <Link to="/Discounts">
            <p>
            <TbDiscount2 />
             <span>Discounts</span> 
            </p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
