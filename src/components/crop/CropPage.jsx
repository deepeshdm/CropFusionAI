

import Header from "../header/Header.jsx"
import "./CropPage.css"
import { TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { output_descriptions } from "./CropOutputs"
import LinearProgress from '@mui/material/LinearProgress';

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
            return 0;
        }
    }

    return 1;
}


//--------------------------------------------------------------------

const CROP_ENDPOINT = 'https://8080-797137136eb6451193a1f8c64a951490.onpatr.cloud/crop_recommend'

// Min-Max values of crop inputs
export const crop_value_ranges = {
    nitrogen: [0, 150], phosphorous: [5, 145], potassium: [5, 205], temperature: [0, 50],
    humidity: [1, 100], ph: [3, 10], rainfall: [20, 300]
}


// Called when Button Clicked
function handleClick(navigate) {

    // Continue only if all fields are filled.
    const isFieldEmpty = focusEmptyFields();
    if (isFieldEmpty == 0) {
        console.log("Some Inputs are empty !")
        return;
    }

    // Get the values of all input fields
    const nitrogenValue = document.getElementById('nitrogen-crop-input').value;
    const tempValue = document.getElementById('temp-crop-input').value;
    const phosphorousValue = document.getElementById('phosphorous-crop-input').value;
    const humidityValue = document.getElementById('humidity-crop-input').value;
    const potassiumValue = document.getElementById('potassium-crop-input').value;
    const phValue = document.getElementById('ph-crop-input').value;
    const rainfallValue = document.getElementById('rainfall-crop-input').value;


    // Check if the Input values are in required ranges
    const min_temp = crop_value_ranges.temperature[0]
    const max_temp = crop_value_ranges.temperature[1]
    const min_humid = crop_value_ranges.humidity[0]
    const max_humid = crop_value_ranges.humidity[1]
    if (tempValue < min_temp || tempValue > max_temp) {
        window.alert("Temperature must be between 0-50 celcius !");
        return;
    } else if (humidityValue < min_humid || humidityValue > max_humid) {
        window.alert(" Humidity must be between 1-100 !");
        return;
    }

    // Make progressbar visible
    const progressBar = document.querySelector('.crop-progress-bar');
    progressBar.style.display = 'block';
    progressBar.style.visibility = 'visible';

    // JSON payload
    const data = {
        array: [nitrogenValue, phosphorousValue, potassiumValue,
            tempValue, humidityValue, phValue, rainfallValue]
    }

    // Send POST request to ML model
    fetch(CROP_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
            console.log(output_descriptions[data])

            // Redirect to Result page along with predicted crop
            navigate("/crop_result", { state: { predicted_crop: data } })


        }).catch(error => {
            console.error('Error:', error)
            window.alert("Some Error Occured, Try again.")
        });

}

//--------------------------------------------------------------------

export function CropPage() {

    const navigate = useNavigate();

    // Called when Enter is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleClick(navigate)
        }
    });

    return (
        <>
            <Header />
            <LinearProgress style={{ visibility: 'hidden', display: 'none' }} className="crop-progress-bar" color="success" />
            <p className="crop-p"> Enter soil characteristics to find the  best <b> CROP </b> to grow on your farm 👩‍🌾🌽🚜</p>
            <div className="crop-container">
                <TextField id="nitrogen-crop-input" label="Ratio of Nitrogen" variant="outlined" color="success" type="number" />
                <TextField id="temp-crop-input" label="Temperature in Celsius" variant="outlined" color="success" type="number" inputProps={{ min: 5, max: 50 }} />
                <TextField id="phosphorous-crop-input" label="Ratio of Phosphorous" variant="outlined" color="success" type="number" />
                <TextField id="humidity-crop-input" label="% of Humidity" variant="outlined" color="success" type="number" />
                <TextField id="potassium-crop-input" label="Ratio of Potassium" variant="outlined" color="success" type="number" />
                <TextField id="ph-crop-input" label="PH Level of soil" variant="outlined" color="success" type="number" />
                <TextField id="rainfall-crop-input" label="Rainfall in Milimeter (mm)" variant="outlined" color="success" type="number" />
                <button className="predict_crop_btn" onClick={() => handleClick(navigate)}> PREDICT </button>
            </div>
        </>
    )
}

