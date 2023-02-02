import React, { Fragment } from "react";
import { BsSearch } from "react-icons/bs";
import "./Header.css";
export default function Header(props) {
  return (
    <Fragment>
      <div className="header">
        <h1>{props.name}</h1>
        <div className="search-icon">
         <BsSearch />
         </div>
        <input type="text" id="text" ></input>
      </div>
    </Fragment>
  );
}
