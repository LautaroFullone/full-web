import LandingLayout from './layouts/LandingLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DetailUnitPage, LandingPage } from './pages'
import { useEffect } from 'react'
import Aos from 'aos'

function App() {
   useEffect(() => {
      Aos.init()
   }, [])

   return (
      <BrowserRouter>
         <Routes>
            <Route element={<LandingLayout />}>
               <Route path="/" element={<LandingPage />} index />
               <Route path="/unit" element={<DetailUnitPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default App
