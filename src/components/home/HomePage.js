

import Header from "../header/Header.js"
import Background3D from "../3dmodel/Model.js"
import "./HomePage.css"
import { useNavigate } from "react-router-dom";

export function HomePage() {

    const navigate = useNavigate()

    return (
        <div className="homepage">
            <Header className="header" />
            <p className="question"> What Crop to grow this Season ? </p>
            <p className="description">
                Welcome to CropFusionAI, where we put the "AI" in "farming".
                We help farmers make the tough decisions,
                like whether to plant corn or lettuce this season. Don't worry, our advanced
                machine learning models have got you covered.
                Just sit back, relax, and  let us do the thinking for you.
                And if you're feeling adventurous, our fertilizer recommendation
                feature will even help you spice things up in the garden.
                Start using CropFusionAI  today and let the robots handle the dirty work!
            </p>
            <button className="start_btn" onClick={()=> navigate("/crop")}> GET STARTED </button>
            <div className="container">
                <Background3D />
            </div>
        </div>
    )
}

