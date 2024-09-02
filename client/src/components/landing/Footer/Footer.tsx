import { scrollTo } from '@/utils/scrollTo'
import { Link, useLocation } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import './Footer.css'

export default function Footer() {
   const { pathname } = useLocation()

   return (
      <footer id="footer">
         <div className="footer-top">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-6 footer-contact">
                     <h3>El Ciprés</h3>
                     <p>
                        Avenida Mitre 4797 <br />
                        9 de Julio, Buenos Aires
                        <br />
                        Argentina <br />
                        <br />
                        <strong>Telefono:</strong> {2234710998}
                        <br />
                        <strong>Email:</strong> maildementira@gmail.com
                        <br />
                     </p>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-links"></div>

                  <div className="col-lg-3 col-md-6 footer-links">
                     <h4>Links Utiles</h4>
                     <ul>
                        {pathname === '/' ? (
                           <>
                              <li>
                                 <ChevronRightIcon /> <a onClick={() => scrollTo('banner')}>Inicio</a>
                              </li>
                              <li>
                                 <ChevronRightIcon /> <a onClick={() => scrollTo('about')}>Sobre Nosotros</a>
                              </li>
                              <li>
                                 <ChevronRightIcon /> <a onClick={() => scrollTo('brands')}>Marcas</a>
                              </li>
                              <li>
                                 <ChevronRightIcon /> <a onClick={() => scrollTo('gallery')}>Unidades Usadas</a>
                              </li>
                              <li>
                                 <ChevronRightIcon /> <a onClick={() => scrollTo('faq')}>Preguntas Frecuentes</a>
                              </li>
                              <li>
                                 <ChevronRightIcon /> <a onClick={() => scrollTo('contact')}>Contacto</a>
                              </li>
                           </>
                        ) : (
                           <>
                              <li>
                                 <i className="bx bx-chevron-right"></i> <Link to="/">Inicio</Link>
                              </li>
                              <li>
                                 <i className="bx bx-chevron-right"></i> <Link to="/">Sobre Nosotros</Link>
                              </li>
                              <li>
                                 <i className="bx bx-chevron-right"></i> <Link to="/">Marcas</Link>
                              </li>
                              <li>
                                 <i className="bx bx-chevron-right"></i> <Link to="/">Unidades Usadas</Link>
                              </li>
                              <li>
                                 <i className="bx bx-chevron-right"></i> <Link to="/">Preguntas Frecuentes</Link>
                              </li>
                              <li>
                                 <i className="bx bx-chevron-right"></i> <Link to="/">Contacto</Link>
                              </li>
                           </>
                        )}

                        <li>
                           <i className="bx bx-chevron-right"></i> <Link to="/admin/login">Iniciar Sesion</Link>
                        </li>
                     </ul>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-links">
                     <h4>Redes sociales</h4>

                     <p>Visitanos en nuestras redes</p>

                     <div className="social-links mt-3">
                        <a href="https://www.facebook.com/hola/?locale=es_LA" className="facebook" target="_blank" rel="noreferrer">
                           <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/hola" className="youtube" target="_blank" rel="noreferrer">
                           <i className="bx bxl-youtube"></i>
                        </a>
                        <a
                           href="https://wa.me/542236801937?text=Hola%20EL%20CIPRÉS!.%20Me%20comunico%20desde%20su%20pagina%20web,%20quisiera%20hacerle%20una%20consulta."
                           className="whatsapp"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <i className="bi bi-whatsapp"></i>
                        </a>
                        <a href="https://www.instagram.com/lautaro_fullone/" className="instagram" target="_blank" rel="noreferrer">
                           <i className="bx bxl-instagram"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="footer-bottom ">
            <div className="copyright">
               © Copyright{' '}
               <strong>
                  <span>FULL WEB</span>
               </strong>
               . Todos los derechos reservados {new Date().getFullYear()}
            </div>
            <div className="credits">
               Diseñado por{' '}
               <a href="https://wa.me/5492236801937?text=Hola%20me%20comunico%20desde%20la%20web" target="_blank" rel="noreferrer">
                  Full One Solutions
               </a>
            </div>
         </div>
      </footer>
   )
}
