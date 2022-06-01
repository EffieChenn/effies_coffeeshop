import React from "react";
import Main from "../components/Main";
import Header from "./Header";
import Navigation from "./Navigation";

const Home = () => {
    return (
        <>
            <Header/>
            <Navigation/>
            <Main/>
        </>
    );
}

export default Home;