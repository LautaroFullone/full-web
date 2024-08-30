import { scrollTo } from '@/utils/scrollTo'
import { SectionType } from 'models'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavBarLink from './NavBarLink'
import './NavBar.css'

interface NavBarLinkType {
   label: string
   sectionId: SectionType
   isButton: boolean
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
]

export default function NavBar() {
   const location = useLocation()
   const [activeLink, setActiveLink] = useState<string>('banner')

   function handleLinkClick(navLink: SectionType) {
      if (location.pathname === '/' && navLink) {
         const navbar = document.querySelector('#navbar')

         if (navbar?.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile')

            const navbarToggle = document.querySelector('.mobile-nav-toggle')!
            navbarToggle.classList.toggle('bi-list')
            navbarToggle.classList.toggle('bi-x')
         }
         scrollTo(navLink)
      }
   }

   function handleMobileNavClick() {
      const mobileNavBarButton = document.querySelector('.mobile-nav-toggle')!
      document.querySelector('#navbar')!.classList.toggle('navbar-mobile')
      mobileNavBarButton.classList.toggle('bi-list')
      mobileNavBarButton.classList.toggle('bi-x')
   }

   function navbarlinksActive() {
      const sections = [...document.querySelectorAll('section')]

      const position = window.scrollY + 200

      sections.forEach((section) => {
         if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) setActiveLink(section.id)
      })
   }

   useEffect(() => {
      if (location.pathname === '/') {
         setActiveLink('banner')

         window.addEventListener('load', navbarlinksActive)
         document.addEventListener('scroll', navbarlinksActive)
      } else if (location.pathname.includes('marca')) {
         setActiveLink('brands')
      } else if (location.pathname.includes('unidad')) {
         setActiveLink('gallery')
      }

      return () => {
         window.removeEventListener('load', navbarlinksActive)
         document.removeEventListener('scroll', navbarlinksActive)
      }
   }, [location])

   return (
      <header id="header" className="fixed-top header-inner-pages">
         <div className="container d-flex align-items-center">
            <div className="logo me-auto">
               <Link to={'/'} onClick={() => {}}>
                  <img src={'full-web-logo.png'} alt="" className="img-fluid" />
               </Link>
            </div>

            <nav id="navbar" className="navbar">
               <ul>
                  {navBarData.map((item, index) => (
                     <NavBarLink {...item} key={index} activeLink={activeLink} goTo={handleLinkClick} />
                  ))}
               </ul>

               <i className="bi bi-list mobile-nav-toggle" onClick={handleMobileNavClick} />
            </nav>
         </div>
      </header>
   )
}
