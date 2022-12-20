

import Header from "../header/Header.js"
import "./CropPage.css"
import { TextField } from "@mui/material"

function handleClick() {
    // Get the values of all text fields
    const nitrogenValue = document.getElementById('nitrogen-crop-input').value;
    const tempValue = document.getElementById('temp-crop-input').value;
    const phosphorousValue = document.getElementById('phosphorous-crop-input').value;
    const humidityValue = document.getElementById('humidity-crop-input').value;
    const potassiumValue = document.getElementById('potassium-crop-input').value;
    const phValue = document.getElementById('ph-crop-input').value;
    const rainfallValue = document.getElementById('rainfall-crop-input').value;

    // Display the values in an alert message
    console.log(`Nitrogen: ${nitrogenValue}
    Temperature: ${tempValue}
    Phosphorous: ${phosphorousValue}
    Humidity: ${humidityValue}
    Potassium: ${potassiumValue}
    PH: ${phValue}
    Rainfall: ${rainfallValue}`);
}

export function CropPage() {

    return (
        <>
            <Header />
            <p className="crop-p"> Enter soil characteristics to find the  best <b> CROP </b> to grow on your farm 👩‍🌾🌽🚜</p>
            <div className="crop-container">
                <TextField id="nitrogen-crop-input" label="Ratio of Nitrogen" variant="outlined" color="success" type="number" />
                <TextField id="temp-crop-input" label="Temperature in Celsius" variant="outlined" color="success" type="number" />
                <TextField id="phosphorous-crop-input" label="Ratio of Phosphorous" variant="outlined" color="success" type="number" />
                <TextField id="humidity-crop-input" label="% of Humidity" variant="outlined" color="success" type="number" />
                <TextField id="potassium-crop-input" label="Ratio of Potassium" variant="outlined" color="success" type="number" />
                <TextField id="ph-crop-input" label="PH Level of soil" variant="outlined" color="success" type="number" />
                <TextField id="rainfall-crop-input" label="Rainfall in Milimeter (mm)" variant="outlined" color="success" type="number" />
                <button className="predict_crop_btn" onClick={handleClick}> PREDICT </button>
            </div>
        </>
    )
}

