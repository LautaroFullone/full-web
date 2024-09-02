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
                     En Full One Factory, somos líderes en soluciones tecnológicas avanzadas para
                     negocios en constante evolución. Nos especializamos en proporcionar
                     herramientas y servicios que potencian la eficiencia operativa y promueven el
                     crecimiento sostenible en diversos sectores.
                  </p>
                  <ul>
                     <li>
                        <KeyboardDoubleArrowRightIcon /> Nuestro enfoque está en ofrecer software y
                        soluciones digitales de última generación. Colaboramos estrechamente con
                        líderes tecnológicos para garantizar que nuestros clientes tengan acceso a
                        las herramientas más innovadoras y eficientes. Nuestro portafolio abarca
                        desde plataformas de gestión empresarial y análisis de datos hasta sistemas
                        de automatización y seguridad cibernética.
                     </li>

                     <li>
                        <KeyboardDoubleArrowRightIcon /> La satisfacción del cliente es el núcleo de
                        nuestra misión. Nos dedicamos a superar tus expectativas a través de
                        productos de alta calidad, atención al cliente excepcional y soporte técnico
                        continuo. Trabajamos para entender tus necesidades específicas y
                        proporcionarte soluciones personalizadas que impulsen tu éxito empresarial.
                     </li>
                  </ul>
               </div>
               <div className="col-lg-6 pt-4 pt-lg-0">
                  <ul>
                     <li>
                        <KeyboardDoubleArrowRightIcon /> Nuestro equipo está formado por expertos en
                        tecnología con vasta experiencia en el campo. Estamos listos para ofrecer
                        asesoría personalizada, desde la elección de la solución tecnológica
                        adecuada hasta la implementación y el soporte postventa. Nos comprometemos a
                        asistirte en cada etapa, asegurando que tu inversión tecnológica genere
                        resultados óptimos.
                     </li>

                     <li>
                        <KeyboardDoubleArrowRightIcon /> Además, estamos comprometidos con la
                        responsabilidad social y la sostenibilidad. Promovemos prácticas
                        empresariales responsables y buscamos continuamente maneras de reducir
                        nuestro impacto ambiental. Nuestro objetivo es contribuir a un futuro más
                        sostenible mediante el uso eficiente de nuestros recursos y la promoción de
                        tecnologías ecológicas.
                     </li>
                  </ul>
                  <p>
                     En resumen, en Full One Factory, aspiramos a ser tu socio tecnológico de
                     confianza, ofreciendo las mejores soluciones y servicios para potenciar tu
                     negocio. Te invitamos a explorar nuestra plataforma y descubrir cómo podemos
                     ayudarte a alcanzar tus metas empresariales.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}
