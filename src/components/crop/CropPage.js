

import Header from "../header/Header.js"
import "./CropPage.css"
import { TextField } from "@mui/material"

//--------------------------------------------------------------------

// Focus on Empty Input fields
function focusEmptyFields() {

    // list of all the input elements
    const inputElements = [
        document.getElementById('nitrogen-crop-input'),
        document.getElementById('temp-crop-input'),
        document.getElementById('phosphorous-crop-input'),
        document.getElementById('humidity-crop-input'),
        document.getElementById('potassium-crop-input'),
        document.getElementById('ph-crop-input'),
        document.getElementById('rainfall-crop-input'),
    ];

    // Check if any of the input fields is empty & focus on it
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value === '') {
            inputElements[i].focus();
            return;
        }
    }
}

//--------------------------------------------------------------------

const CROP_ENDPOINT = 'http://localhost:8000/crop_recommend'

function handleClick() {

    // Continue only if all fields are non-empty
    focusEmptyFields();

    // Get the values of all input fields
    const nitrogenValue = document.getElementById('nitrogen-crop-input').value;
    const tempValue = document.getElementById('temp-crop-input').value;
    const phosphorousValue = document.getElementById('phosphorous-crop-input').value;
    const humidityValue = document.getElementById('humidity-crop-input').value;
    const potassiumValue = document.getElementById('potassium-crop-input').value;
    const phValue = document.getElementById('ph-crop-input').value;
    const rainfallValue = document.getElementById('rainfall-crop-input').value;

    const data = {
        array: [nitrogenValue, phosphorousValue, potassiumValue,
            tempValue, humidityValue, phValue, rainfallValue]
    }

    // Send POST request to ML models
    fetch(CROP_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
}

//--------------------------------------------------------------------

// Min-Max values of crop inputs
const crop_value_ranges = {
    nitrogen: [0, 140], phosphorous: [5, 145],
    potassium: [5, 205], temperature: [5, 50],
    humidity: [14, 100], ph: [3, 10], rainfall: [20, 300]
}

export function CropPage() {

    return (
        <>
            <Header />
            <p className="crop-p"> Enter soil characteristics to find the  best <b> CROP </b> to grow on your farm 👩‍🌾🌽🚜</p>
            <div className="crop-container">
                <TextField id="nitrogen-crop-input" label="Ratio of Nitrogen" variant="outlined" color="success" type="number" />
                <TextField id="temp-crop-input" label="Temperature in Celsius" variant="outlined" color="success" type="number" inputProps={{ min: 5, max: 50 }} />
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

