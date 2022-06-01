import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import '../css/Main.css';
import Item from "../components/Item";

const Menu = () => {
    return (
        <>
            <Header />
            <Navigation />
            <div className="main">
                <h1>MENU</h1>
                <Item />
            </div>
        </>
    );
};

export default Menu;