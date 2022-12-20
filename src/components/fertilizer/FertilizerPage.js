
import Header from "../header/Header.js"
import "./FertilizerPage.css"
import { TextField } from "@mui/material"

export function FertilizerPage() {
    return (
    <> 
    <Header/>
    <p> Enter soil characteristics & crop you are growing to find best fertilizer 👩‍🌾🌽🚜 </p> 
    <div className="fertilizer-container">
    <TextField id="nitrogen-input" label="Ratio of Nitrogen" variant="outlined" color="success"/>
    <TextField id="temp-input" label="Temperature in Celsius" variant="outlined" color="success"/>
    <TextField id="phosphorous-input" label="Ratio of Phosphorous" variant="outlined" color="success"/>
    <TextField id="humidity-input" label="% of Humidity" variant="outlined" color="success"/>
    <TextField id="potassium-input" label="Ratio of Potassium" variant="outlined" color="success"/>
    <TextField id="moisture-input" label="Moisture in the soil" variant="outlined" color="success"/>
    <TextField id="soiltype-input" label="Type of Soil" variant="outlined" color="success"/>
    <TextField id="croptype-input" label="Type of Crop Growing" variant="outlined" color="success"/>
    <button className="predict_fertilizer_btn"> PREDICT </button>
    </div>
    </>
    )
}

