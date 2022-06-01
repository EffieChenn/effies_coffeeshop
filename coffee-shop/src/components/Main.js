import React from "react";

import '../css/Main.css'
import coffee_bg from '../img/coffee_bg.jpg';


const Main = () => {
    const intro = 'Welcome ! Enjoy our coffee ♥';

    return (
        <div>
            
            <div className="main">
                <h1>{intro}</h1>
                <img src={coffee_bg} alt="home_img"></img>

            </div>

        </div>
    );
};

export default Main;

// 用來顯示主要內容的地方
// 在此置入routes元件