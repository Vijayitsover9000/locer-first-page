import './App.css';
import React,{useState} from 'react';
import Home from './Pages/Home/Home.jsx';
import Orders from './Pages/Orders/Orders';
import Products from './Pages/Products/Products';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Delievery from './Pages/Delievery/Delievery';
import Navbar from './Components/Navbar/Navbar';
import Page1 from './Pages/Products/Page1';
function App() {
   const[middle,setmiddle]=useState([]);
   function middleware(items)
   {
      console.log(items);
   }
  return (
   <div>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/products" element={<Products list={middle}/>}/>
            <Route path="/Delievery" element={<Delievery/>}/>
            <Route path="/products/page1" element={<Page1 function={middleware}/>}/>
         </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
