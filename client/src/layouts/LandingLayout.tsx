import { Link, Outlet, useLocation } from 'react-router-dom';
import NavBarLink from '@/components/landing/NavBarLink';
import { useState } from 'react';
import { scrollTo } from '@/utils/scrollTo';
import { SectionType } from 'models';

interface NavBarLinkType {
   label: string;
   sectionId: SectionType;
   isButton: boolean;
}

const navBarData: NavBarLinkType[] = [
   {
      label: 'Inicio',
      sectionId: 'banner',
      isButton: false,
   },
   {
      label: 'Sobre Nosotros',
      sectionId: 'about',
      isButton: false,
   },
   {
      label: 'Marcas',
      sectionId: 'brands',
      isButton: false,
   },
   {
      label: 'Unidades Usadas',
      sectionId: 'gallery',
      isButton: false,
   },
   {
      label: 'Preguntas Frecuentes',
      sectionId: 'faq',
      isButton: false,
   },
   {
      label: 'Contacto',
      sectionId: 'contact',
      isButton: true,
   },
];

export default function LandingLayout() {
   const location = useLocation();
   const [activeLink, setActiveLink] = useState<string>('banner');

   function handleLinkClick(navLink: SectionType) {
      if (location.pathname === '/' && navLink) {
         const navbar = document.querySelector('#navbar');

         if (navbar && navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile');

            const navbarToggle = document.querySelector('.mobile-nav-toggle')!;
            navbarToggle.classList.toggle('bi-list');
            navbarToggle.classList.toggle('bi-x');
         }
         scrollTo(navLink);
      }
   }

   return (
      <div className='landing-container'>
         <header id='header' className='fixed-top header-inner-pages'>
            <div className='container d-flex align-items-center'>
               <div className='logo me-auto'>
                  <Link to={'/'} onClick={() => {}}>
                     <img
                        src={`full-web-logo.png`}
                        alt=''
                        className='img-fluid'
                     />
                  </Link>
               </div>

               <nav id='navbar' className='navbar'>
                  <ul>
                     {navBarData.map((item, index) => (
                        <NavBarLink
                           {...item}
                           key={index}
                           activeLink={activeLink}
                           goTo={handleLinkClick}
                        />
                     ))}
                  </ul>

                  <i
                     className='bi bi-list mobile-nav-toggle'
                     onClick={() => {}}
                  />
               </nav>
            </div>
         </header>

         <section className='max-w-screen-2xl mx-auto mt-10 p-5'>
            <Outlet />
         </section>

         <footer className='py-5'>
            <p className='text-center'>
               Todos los derechos reservados {new Date().getFullYear()}
            </p>
         </footer>
      </div>
   );
}
