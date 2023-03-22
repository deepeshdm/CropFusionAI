
import Header from "../header/Header.jsx"
import "./FertilizerPage.css"
import { TextField } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { output_descriptions } from "./FertilizerOutputs.jsx";
import { useNavigate } from "react-router-dom";
import { crop_value_ranges } from "../crop/CropPage.jsx";
import LinearProgress from "@mui/material/LinearProgress";

var soilTypeVal = ""
var cropTypeVal = ""
//-------------------------------------------------------------------------------

// Select field for soil types
function SoilTypeSelectField() {
    const [soilType, setSoilType] = React.useState('');
    const handleChange = (event) => {
        setSoilType(event.target.value);
        soilTypeVal = event.target.value;
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="soil-select-field"> Type of Soil </InputLabel>
                <Select
                    labelId="soil-select-field"
                    id="soil-select-field"
                    value={soilType}
                    label="Type of Soil"
                    color="success"
                    onChange={handleChange}>
                    <MenuItem value={"Sandy"}>Sandy</MenuItem>
                    <MenuItem value={"Loamy"}>Loamy</MenuItem>
                    <MenuItem value={"Black"}>Black</MenuItem>
                    <MenuItem value={"Red"}>Red</MenuItem>
                    <MenuItem value={"Clayey"}>Clayey</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

//-------------------------------------------------------------------------------

// Select field for crop types
function CropTypeSelectField() {
    const [cropType, setCropType] = React.useState('');
    const handleChange = (event) => {
        setCropType(event.target.value);
        cropTypeVal = event.target.value;
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="crop-select-field"> Type of Crop </InputLabel>
                <Select
                    labelId="crop-select-field"
                    id="crop-select-field"
                    value={cropType}
                    label="Type of Crop growing"
                    color="success"
                    onChange={handleChange}>
                    <MenuItem value={"Maize"}>Maize</MenuItem>
                    <MenuItem value={"Sugarcane"}>Sugarcane</MenuItem>
                    <MenuItem value={"Cotton"}>Cotton</MenuItem>
                    <MenuItem value={"Tobacco"}>Tobacco</MenuItem>
                    <MenuItem value={"Paddy"}>Paddy</MenuItem>
                    <MenuItem value={"Barley"}>Barley</MenuItem>
                    <MenuItem value={"Oil seeds"}>Oil seeds</MenuItem>
                    <MenuItem value={"Pulses"}>Pulses</MenuItem>
                    <MenuItem value={"Ground Nuts"}>Ground Nuts</MenuItem>
                    <MenuItem value={"Wheat"}>Wheat</MenuItem>
                    <MenuItem value={"Millets"}>Millets</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}

//--------------------------------------------------------------------

// Focus on Empty Input fields
function focusEmptyFields() {

    // list of all the input elements
    const inputElements = [
        document.getElementById('nitrogen-fertilizer-input'),
        document.getElementById('temp-fertilizer-input'),
        document.getElementById('phosphorous-fertilizer-input'),
        document.getElementById('humidity-fertilizer-input'),
        document.getElementById('potassium-fertilizer-input'),
        document.getElementById('moisture-fertilizer-input'),
    ];

    // Check if any of the input fields is empty & focus on it
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value === '') {
            inputElements[i].focus();
            return 0;
        }
    }

    // Check if select fields are empty
    if (soilTypeVal == "" || cropTypeVal == "") {
        window.alert("Fill all Input fields !")
        return 0;
    }

    return 1;

}

//-------------------------------------------------------------------------------

// Fertilizer JSON Input - { "array": [Temparature,Humidity,Moisture,Nitrogen,Potassium,Phosphorous,Soil Type,Crop Type] }

const FERTILIZER_ENDPOINT = 'https://8080-797137136eb6451193a1f8c64a951490.onpatr.cloud/fertilizer_recommend'

function handleClick(navigate) {

    // Continue only if all fields are non-empty
    const isFieldEmpty = focusEmptyFields();
    if (isFieldEmpty == 0) {
        console.log("Some Inputs are empty !")
        return;
    }

    // Get the values of all text fields
    const nitrogenValue = document.getElementById('nitrogen-fertilizer-input').value;
    const tempValue = document.getElementById('temp-fertilizer-input').value;
    const phosphorousValue = document.getElementById('phosphorous-fertilizer-input').value;
    const humidityValue = document.getElementById('humidity-fertilizer-input').value;
    const potassiumValue = document.getElementById('potassium-fertilizer-input').value;
    const moistureValue = document.getElementById('moisture-fertilizer-input').value;

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
    const progressBar = document.querySelector('.fertilizer-progress-bar');
    progressBar.style.display = 'block';
    progressBar.style.visibility = 'visible';


    // JSON payload
    const data = {
        array: [tempValue, humidityValue, moistureValue, nitrogenValue, potassiumValue,
            phosphorousValue, soilTypeVal, cropTypeVal]
    }

    // Send POST request to ML model
    fetch(FERTILIZER_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
            console.log(output_descriptions[data])

            // Redirect to Result page along with predicted fertilizer
            navigate("/fertilizer_result", { state: { predicted_fertilizer: data } })

        }).catch(error => {
            console.error('Error:', error)
            window.alert("Some Error Occured, Try again.")
        });

}


//-------------------------------------------------------------------------------

export function FertilizerPage() {

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
            <LinearProgress style={{ visibility: 'hidden', display: 'none' }} className="fertilizer-progress-bar" />
            <p className="fertilizer-p"> Enter soil characteristics & crop you are growing to find best <b> FERTILIZER </b> for your farm 👩‍🌾🌽🚜 </p>
            <div className="fertilizer-container">
                <TextField id="nitrogen-fertilizer-input" label="Ratio of Nitrogen" variant="outlined" color="success" type="number" />
                <TextField id="temp-fertilizer-input" label="Temperature in Celsius" variant="outlined" color="success" type="number" />
                <SoilTypeSelectField />
                <CropTypeSelectField />
                <TextField id="phosphorous-fertilizer-input" label="Ratio of Phosphorous" variant="outlined" color="success" type="number" />
                <TextField id="humidity-fertilizer-input" label="% of Humidity" variant="outlined" color="success" type="number" />
                <TextField id="potassium-fertilizer-input" label="Ratio of Potassium" variant="outlined" color="success" type="number" />
                <TextField id="moisture-fertilizer-input" label="Moisture in the soil" variant="outlined" color="success" type="number" />
                <button className="predict_fertilizer_btn" onClick={() => { handleClick(navigate) }}> PREDICT </button>
            </div>

        </>
    )
}

