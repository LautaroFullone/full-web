import Footer from '@/components/landing/Footer/Footer';
import NavBar from '@/components/landing/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export default function LandingLayout() {
   return (
      <div className="landing-container">
         <NavBar />

         <section className="max-w-screen-2xl mx-auto mt-10 p-5">
            <Outlet />
         </section>

         <Footer />
      </div>
   );
}
