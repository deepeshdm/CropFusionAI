
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="logo"> <Link to="/"> 🌿 CropFusionAI </Link> </div>
            <ul>
                <li className="crop-header-option">
                    <Link to="/crop">Crop Recommendation </Link>
                </li>
                <li className="fertilizer-header-option">
                    <Link to="/fertilizer"> Fertilizer Recommendation </Link>
                </li>
                <li className="project-header-option">
                    <Link to="#" onClick={() => { window.open('https://8080-797137136eb6451193a1f8c64a951490.onpatr.cloud/docs', '_blank'); }}>
                        API Docs
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default Header;
