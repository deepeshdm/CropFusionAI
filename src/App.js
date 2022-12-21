
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './components/home/HomePage.js';
import { CropPage } from './components/crop/CropPage.js';
import { FertilizerPage } from './components/fertilizer/FertilizerPage.js';
import { CropResult } from './components/result/CropResult';

function NotFound(){ 
  // Redirect all unknown paths to /
  return <Navigate to="/" />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/crop" element={<CropPage/>}/>
      <Route path="/fertilizer" element={<FertilizerPage/>}/>
      <Route path="/crop_result" element={<CropResult/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
