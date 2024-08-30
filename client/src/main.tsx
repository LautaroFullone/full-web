import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import 'glightbox/dist/css/glightbox.css'
import 'aos/dist/aos.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './style/landing.style.css'
import './style/admin.style.css'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <App />
   </StrictMode>
)
