import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VenkatMoreInfo from "./VenkatMoreInfo";
import VinayMoreInfo from "./VinayMoreInfo";
import KalyanMoreInfo from "./KalyanMoreInfo";
// import Navigating from "./Navigating";
import ShowingTheDataOnButtionCliked from "./ShowingTheDataOnButtionCliked";
import ShowAddedproducts from "../AddproductbyManoj/ShowAddedproducts";
import AddingProducts from "../AddproductbyManoj/AddingProducts";
import ShowIndidualproduct from "../AddproductbyManoj/ShowIndidualproduct";

function Navbar(){



    return(
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element = {<ShowingTheDataOnButtionCliked/> }/> */}
                    <Route path="/" element = {<AddingProducts/>}  />
                    <Route path="/venkat" element = {<VenkatMoreInfo/> }/>
                    <Route path="/vinay" element = {<VinayMoreInfo/> }/>
                    <Route path="/kalyan" element = {<KalyanMoreInfo/> }/>
                    <Route path="/individualProduct" element = {<ShowIndidualproduct/> }/>
                    <Route path="/products" element = {<ShowAddedproducts/> }/>
                    
                    <Route path = "/buttionclicked" element = {<ShowingTheDataOnButtionCliked/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )


}
export default Navbar;