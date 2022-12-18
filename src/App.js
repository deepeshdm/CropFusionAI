
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/home/HomePage.js';
import { CropPage } from './components/crop/CropPage';
import { FertilizerPage } from './components/fertilizer/FertilizerPage';

function NotFound(){ 
  return(<> <h1> NOT FOUND 404 </h1> </>)}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/crop" element={<CropPage/>}/>
      <Route path="/fertilizer" element={<FertilizerPage/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
