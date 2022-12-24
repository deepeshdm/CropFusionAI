
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="logo"> <Link to="/"> 🌿 CropFusionAI </Link> </div>
            <ul>
                <li>
                    <Link to="/crop">Crop Recommendation </Link>
                </li>
                <li>
                    <Link to="/fertilizer"> Fertilizer Recommendation </Link>
                </li>
                <li>
                    <Link to="#" onClick={() => { window.open('https://github.com/deepeshdm/CropFusionAI-Frontend', '_blank'); }}>
                        Project
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default Header;
