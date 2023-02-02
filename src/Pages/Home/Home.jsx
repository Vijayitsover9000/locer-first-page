import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Box from "../../Components/Box/Box";
export default function Home() {
  return (
    <div className="body">
      <div>
        <Navbar />
      </div>
      <div className="another">
        <Header name="Home"/>
        <div class="box-container">
          <Box />
        </div>
      </div>
    </div>
  );
}
