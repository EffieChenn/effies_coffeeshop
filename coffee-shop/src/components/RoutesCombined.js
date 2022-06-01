// 用來管理所有的routes
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Menu from "../views/Menu";
import NotFound from "../views/NotFound";

const RoutesCombined = () => {



    return (
        <Routes>
            <Route path="/" excat element={<Home/>}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            
            <Route path="/*" element={<NotFound />}></Route>

        </Routes>

    );
};

export default RoutesCombined;