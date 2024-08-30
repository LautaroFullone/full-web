import LandingLayout from './layouts/LandingLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DetailUnitPage, LandingPage } from '@/pages';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<LandingLayout />}>
               <Route path="/" element={<LandingPage />} index />
               <Route path="/unit" element={<DetailUnitPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
