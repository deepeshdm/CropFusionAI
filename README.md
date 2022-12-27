<div align="center"> <h1>  👩‍🌾🌿 CropFusionAI  </h1> </div>
<div align="center"> <h4>  🔥 Official Website 👉 https://cropfusionai.vercel.app <div align="center"> </h4> </div>

An Open source Crop and Fertilizer Recommendation tool for Farmers. Machine Learning enabled system that recommends the best crop to grow from across 22 different classes of crops based on various metrics including soil type, rainfall, humidity, and nutrient levels.

<div align="center">
<img src="/assets/demo.gif" width="95%"/>
</div>


## How does it work ?
The API takes a string URL as input and returns a probability value (0-100) of URL being malicious. We declare a URL malicious if it crosses a probability value of 70%. To determine if a URL is malicious or legitimate we use a Neural Network trained on 600,000 URLs. To see how exactly the model works,checkout the model training repository [here](https://github.com/deepeshdm/Phishing-Attack-Domain-Detection).

<div align="center">
<img src="/src/assets/phishr-demo.gif" width="80%"/>
</div>

## 👩‍💻To Run (Locally)

1. Git clone the project repository on your local system
```javascipt
git clone https://github.com/deepeshdm/CropFusionAI.git
cd CropFusionAI
```

2. Install dependencies in package.json
```javascipt
npm install
```

3. Deploy project on local server
```javascipt
npm start
```

