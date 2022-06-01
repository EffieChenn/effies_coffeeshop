import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Navigation.css';


// 顯示Navigation在畫面上
const Navigation = () => {

    // Nav收縮
    // const [currenNavState, setCurrentNav] = useState(false);
    // const navToggle = () => {
    //     setCurrentNav(!currenNavState);
    // }

    const goto = useNavigate();

    return (
        <div className="navigation">
            <nav >
                <ul>
                    {/* <li><Link to="/menu">Menu</Link></li> */}
                    <li onClick={() => goto('/')}>Home</li>
                    <li onClick={() => goto('/menu')}>Menu</li>
                    <li onClick={() => goto('/about')}>About</li>
                    <li onClick={() => goto('/contact')}>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;