import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '@/components/landing'

export default function LandingLayout() {
   return (
      <div className="landing-container">
         <NavBar />

         <Outlet />

         <Footer />
      </div>
   )
}
