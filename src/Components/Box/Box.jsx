import React, { Fragment } from "react";
import './Box.scss';
import {ReactComponent as Tick} from '../../assets/tick.svg';
import {ReactComponent as Two} from '../../assets/number-two.svg';
import {ReactComponent as Three} from '../../assets/number-three.svg';
export default function Box() {
  return (
    <Fragment>
      <div className="box">
        <div className="box-head">
          <div className="box-head-txt">Complete your store setup . . .</div>
          <p>
            It just takes a few seconds to get setup.
            Let's start with adding a product.
          </p>
        </div>
        <div className="wel-ico-container">
          <div className="ico-wlist">
            <Tick/>
            <Two/>
            <Three/>
          </div>
          <ul className="welcome-list">
          <li className="one-f">
          <div className="up">Your e-commerce store is ready !</div>
          <div className="down">Congratulations! Your e-commerce store is now live!</div>
        </li>
        <li className="two-f">
          <div className="up">Add your first product</div>
          <p className="down">Start adding products to your online store now!</p>
          {/* <button>Add Product</button> */}
        </li>
        <li className="three-f">
          <div className="up">Set up Payments</div>
        </li>
      </ul>
    </div>
  </div>
</Fragment>
  );
}