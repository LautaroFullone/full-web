
import { Link, Outlet, useLocation } from 'react-router-dom'
import NavBarLink from '@/components/landing/NavBarLink'
import { useState } from 'react';
import { scrollTo } from '@/utils/scrollTo';
import { SectionType } from 'models';
 
const navBarData = [
	{
		label: 'Inicio',
		sectionID: 'banner',
		asButton: false
	},
	{
		label: 'Sobre Nosotros',
		sectionID: 'about',
		asButton: false
	},
	{
		label: 'Marcas',
		sectionID: 'brands',
		asButton: false
	},
	{
		label: 'Unidades Usadas',
		sectionID: 'gallery',
		asButton: false
	},
	{
		label: 'Preguntas Frecuentes',
		sectionID: 'faq',
		asButton: false
	},
	{
		label: 'Contacto',
		sectionID: 'contact',
		asButton: true
	}
]

export default function LandingLayout() {

	const location = useLocation();
	const [activeLink, setActiveLink] = useState<SectionType>("banner");

	function handleLinkClick(navLink: SectionType) {

		if (location.pathname === '/' && navLink) {
			let navbar = document.querySelector('#navbar')

			if (navbar && navbar.classList.contains('navbar-mobile')) {
				navbar.classList.remove('navbar-mobile')

				let navbarToggle = document.querySelector('.mobile-nav-toggle')!
				navbarToggle.classList.toggle('bi-list')
				navbarToggle.classList.toggle('bi-x')
			}
			scrollTo(navLink)
		}
	}

	return (
		<div className='landing-container'>
			<header id="header" className="fixed-top header-inner-pages">

				<div className="container d-flex align-items-center">

					<div className="logo me-auto">

						<Link to={'/'} onClick={() => { }}>
							<img src={`${process.env.PUBLIC_URL}/images/cipres-cartel.jpg`} alt="" className="img-fluid" />
						</Link>

					</div>

					<nav id="navbar" className="navbar">

						{/* <ul>
							{
								navBarData.map((item, index) =>
									<NavBarLink key={index} {...item} activeLink={activeLink} goTo={handleLinkClick} />
								)
							}
						</ul> */}

						<i className="bi bi-list mobile-nav-toggle" onClick={() => { }} />

					</nav>

				</div>

			</header>

			<section className='max-w-screen-2xl mx-auto mt-10 p-5'>
				<Outlet />
			</section>

			<footer className='py-5'>
				<p className="text-center">
					Todos los derechos reservados {new Date().getFullYear()}
				</p>
			</footer>
		</div>
	)
}
