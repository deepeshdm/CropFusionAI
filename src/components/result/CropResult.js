import React, { useEffect } from 'react';
import Header from '../header/Header';
import "./CropResult.css"
import { useNavigate, useLocation } from 'react-router-dom';
import { output_descriptions } from '../crop/CropOutputs';

export function CropResult() {
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state;

    console.log("LOCATION : ", location)
    console.log("LOCATION STATE : ", locationState)

    // Runs at Initial Render. Redirects if State is null.
    useEffect(() => {
        if(locationState==null){
            console.log("Redirecting to /crop...")
            navigate("/crop")
        }
    }, [locationState]);

    if(locationState==null){
        console.log("LocationState is null")
        return null;
    }
    
    const predicted_crop = locationState["predicted_crop"];

    return (
        <>
            <Header />
            <p className="crop-result-p"> You should grow <b> {predicted_crop.toUpperCase()} </b> in your farm !</p>
            <p className="crop-result-description"> {output_descriptions[predicted_crop]} </p>
            <button className="crop-try-btn" onClick={() => navigate("/crop")}> Try again ? </button>
        </>
    );
}
