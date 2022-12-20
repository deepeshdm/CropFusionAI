
import Header from "../header/Header.js"
import "./FertilizerPage.css"
import { TextField } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// Select field for soil types
function SoilTypeSelectField() {
    const [soilType, setSoilType] = React.useState('');
    const handleChange = (event) => {
        setSoilType(event.target.value);
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
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="crop-select-field"> Type of Soil </InputLabel>
                <Select
                    labelId="crop-select-field"
                    id="crop-select-field"
                    value={cropType}
                    label="Type of Crop growing"
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

//-------------------------------------------------------------------------------

export function FertilizerPage() {

    return (
        <>
            <Header />
            <p> Enter soil characteristics & crop you are growing to find best fertilizer 👩‍🌾🌽🚜 </p>
            <div className="fertilizer-container">
                <TextField id="nitrogen-input" label="Ratio of Nitrogen" variant="outlined" color="success" />
                <TextField id="temp-input" label="Temperature in Celsius" variant="outlined" color="success" />
                <TextField id="phosphorous-input" label="Ratio of Phosphorous" variant="outlined" color="success" />
                <TextField id="humidity-input" label="% of Humidity" variant="outlined" color="success" />
                <TextField id="potassium-input" label="Ratio of Potassium" variant="outlined" color="success" />
                <TextField id="moisture-input" label="Moisture in the soil" variant="outlined" color="success" />
                <SoilTypeSelectField />
                <CropTypeSelectField/>
                <button className="predict_fertilizer_btn"> PREDICT </button>
            </div>

        </>
    )
}

