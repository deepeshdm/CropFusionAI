

import Header from "../header/Header.jsx"
import Background3D from "../3dmodel/Model.jsx"
import "./HomePage.css"
import { useNavigate } from "react-router-dom";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import Container from '@mui/material/Container';

// path of 3D model from "Public" dir
const model_path = 'Model/scene.gltf'

//------------------------------------------------------------------------------------------

function HomePage(props) {

    const navigate = useNavigate()

    return (
        <>
            <Header className="header" />
            <div>
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
                <button className="start_btn" onClick={() => navigate("/crop")}> GET STARTED </button>

                <div className="container">
                    {props.children}
                </div>
            </div>
        </>
    )
}


//------------------------------------------------------------------------------------------

export function ModelLoader() {

    const [isLoading, setIsLoading] = useState(true);
    const [bg, setBg] = useState(null);

    useEffect(() => {
        const loader = new GLTFLoader();
        // Load 3D model
        loader.load(model_path, (model) => {

            const bg = () => {
                return (
                    <>
                        <HomePage>
                            <Background3D model={model} />
                        </HomePage>
                    </>
                )
            }

            setBg(bg);
            setIsLoading(false);
        });
    }, []);

    // Show Loading page if model is not loaded.
    if (isLoading == true) {

        return (
            <div>
                <Header className="header" />
                <Container maxWidth="md">
                    <HashLoader
                        className="spinner"
                        color={"#0C9463"}
                        loading={true}
                        cssOverride={{ display: "block", margin: "0 auto", marginTop: "18%" }}  // Spinner's CSS
                        size={80}
                        aria-label="Loading..."
                        data-testid="loader"
                    />
                </Container>
            </div>
        );
    }

    // Show Home page if model is loaded.
    return (
        <>
            {bg}
        </>
    );
}

