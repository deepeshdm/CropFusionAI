
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ModelLoader } from './components/home/HomePage.jsx';
import { CropPage } from './components/crop/CropPage.jsx';
import { FertilizerPage } from './components/fertilizer/FertilizerPage.jsx';
import { CropResult } from './components/result/CropResult';
import { FertilizerResult } from './components/result/FertilizerResult';

function NotFound(){ 
  // Redirect all unknown paths to /
  return <Navigate to="/" />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ModelLoader/>}/>
      <Route path="/crop" element={<CropPage/>}/>
      <Route path="/fertilizer" element={<FertilizerPage/>}/>
      <Route path="/crop_result" element={<CropResult/>}/>
      <Route path="/fertilizer_result" element={<FertilizerResult/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
