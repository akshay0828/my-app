import React from "react";

import {Routes, Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import WeatherApp from "./weather";
import Welcome from "./simpleCard";
const Outlet=()=>{
    return(
        <Routes >
            <Route exact path="/" element={<Home/>}>
                
            </Route>
            <Route exact path="/about" element={<About/>} >
                
            </Route>
            <Route exact path="/contact" element={<Contact/>}>
            </Route>
            <Route exact path="/welcome" element={<Welcome/>}>
            </Route>
            <Route exact path="/weather" element={<WeatherApp/>}>
            </Route>
        </Routes>
    )
}
export default Outlet