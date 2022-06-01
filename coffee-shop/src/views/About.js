import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import '../css/Main.css';

const About = () => {

    const [content, setContent] = useState([]);

    const getContent = async () => {
        try {
            const fetchContent = await fetch("http://localhost:6005/api/v1/about");
            const jsonData = await fetchContent.json();

            setContent(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getContent();
    }, []);

    console.log(content);

    return (
        <>
            <Header />
            <Navigation />

            <div className="main">
                <h1>ABOUT US</h1>
                <div className="about">
                        {
                            content.map(sentence => (
                                <p>{sentence.content}</p>
                            ))
                        }
                </div>

            </div>

        </>
    );
};

export default About;