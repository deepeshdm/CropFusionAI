

import Header from "../header/Header.js"
import "./CropPage.css"
import { TextField } from "@mui/material"


export function CropPage() {

    return (
        <>
            <Header />
            <p> Enter soil characteristics to find the best crop to grow on your farm 👩‍🌾🌽🚜</p>
            <div className="crop-container">
                <TextField id="nitrogen-input" label="Ratio of Nitrogen" variant="outlined" color="success" />
                <TextField id="temp-input" label="Temperature in Celsius" variant="outlined" color="success" />
                <TextField id="phosphorous-input" label="Ratio of Phosphorous" variant="outlined" color="success" />
                <TextField id="humidity-input" label="% of Humidity" variant="outlined" color="success" />
                <TextField id="potassium-input" label="Ratio of Potassium" variant="outlined" color="success" />
                <TextField id="ph-input" label="PH Level of soil" variant="outlined" color="success" />
                <TextField id="rainfall-input" label="Rainfall in Milimeter (mm)" variant="outlined" color="success" />
                <button className="predict_crop_btn"> PREDICT </button>
            </div>
        </>
    )
}

