
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="logo"> <Link to="/"> 🌿 CropFusionAI </Link> </div>
            <ul>
                <li>
                    <Link to="/crop" className="crop-header-option" >Crop Recommendation </Link>
                </li>
                <li>
                    <Link to="/fertilizer" className="fertilizer-header-option"> Fertilizer Recommendation </Link>
                </li>
                <li>
                    <Link to="#" className="project-header-option" 
                    onClick={() => { window.open('https://github.com/deepeshdm/CropFusionAI-Frontend', '_blank'); }}>
                        Project
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default Header;
