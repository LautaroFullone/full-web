import SectionTitle from '../SectionTitle/SectionTitle'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import './AboutSection.css'

export default function AboutSection() {
   return (
      <section id="about" className="about">
         <div className="container" data-aos="fade-up">
            <SectionTitle heading="Sobre Nosotros" />

            <div className="row content">
               <div className="col-lg-6">
                  <p>
                     Nos enorgullece ser una empresa líder en la venta de implementos agrícolas y viales en la provincia. Nos especializamos en
                     brindar soluciones confiables y eficientes a nuestros clientes del sector agropecuario y de la construcción.
                  </p>
                  <ul>
                     <li>
                        <KeyboardDoubleArrowRightIcon /> Ofrecemos productos de la más alta calidad y una amplia variedad de implementos agrícolas y
                        viales. Trabajamos en estrecha colaboración con los principales fabricantes y proveedores de la industria para asegurarnos de
                        que nuestros clientes tengan acceso a las últimas innovaciones y tecnologías. Nuestro catálogo incluye desde tractores y
                        cosechadoras hasta arados, sembradoras, pulverizadoras, maquinaria vial y mucho más.
                     </li>

                     <li>
                        <KeyboardDoubleArrowRightIcon /> La satisfacción del cliente es nuestra máxima prioridad. Nos esforzamos por superar las
                        expectativas de nuestros clientes en términos de calidad de productos, atención personalizada y servicio postventa. Trabajamos
                        en estrecha colaboración con nuestros clientes para entender sus necesidades y ofrecer soluciones que impulsen su éxito.
                     </li>
                  </ul>
               </div>
               <div className="col-lg-6 pt-4 pt-lg-0">
                  <ul>
                     <li>
                        <KeyboardDoubleArrowRightIcon /> Nuestro equipo de expertos cuenta con un amplio conocimiento y experiencia en el sector
                        agrícola y vial, y está listo para brindar asesoramiento personalizado a nuestros clientes. Ya sea que necesites
                        recomendaciones sobre qué maquinaria se adapta mejor a tus necesidades o requieras asistencia técnica para la instalación y el
                        mantenimiento de tus equipos, estamos aquí para ayudarte en cada paso del camino.
                     </li>

                     <li>
                        <KeyboardDoubleArrowRightIcon /> Estamos comprometidos con prácticas sostenibles en la agricultura y la construcción vial.
                        Trabajamos en conjunto con nuestros clientes para promover el uso responsable de nuestros productos y minimizar el impacto
                        ambiental. Buscamos constantemente maneras de mejorar la eficiencia y reducir la huella ecológica en todas nuestras
                        operaciones, contribuyendo así a un futuro más verde y sostenible.
                     </li>
                  </ul>
                  <p>
                     En resumen, en El Ciprés, nuestro objetivo es convertirnos en tu socio confiable y brindarte los mejores productos y servicios
                     para el sector agrícola y vial. Te invitamos a explorar nuestra página y descubrir cómo podemos ayudarte a alcanzar tus
                     objetivos.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}
