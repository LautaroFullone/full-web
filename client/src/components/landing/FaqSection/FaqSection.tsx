import SectionTitle from '../SectionTitle/SectionTitle'
import FaqItem, { FaqItemProps } from './FaqItem'
import './FaqSection.css'

export default function FaqSection() {
   const questionsData = [
      {
         question: '¿Qué tipos de soluciones de software personalizado ofrecen?',
         answer: `Ofrecemos una amplia gama de soluciones de software personalizado para satisfacer 
            las necesidades específicas de tu negocio. Desde sistemas de gestión empresarial y 
            CRM hasta aplicaciones móviles y plataformas de comercio electrónico, podemos desarrollar 
            herramientas adaptadas a tus requerimientos únicos. Nuestro equipo trabaja contigo para 
            entender tus necesidades y crear soluciones que optimicen tus operaciones y mejoren la 
            eficiencia.`,
         delay: 100,
      },
      {
         question: '¿Cuál es el proceso para desarrollar un software a medida?',
         answer: `El proceso para desarrollar software a medida incluye varias fases clave. Primero, 
         realizamos un análisis detallado de tus requisitos y objetivos. Luego, nuestro equipo de 
         desarrollo crea un plan y un prototipo inicial. Después de tu aprobación, avanzamos al 
         desarrollo completo y la implementación. Finalmente, ofrecemos soporte y mantenimiento continuo 
         para garantizar que el software funcione de manera óptima. Estamos aquí para acompañarte en 
         cada paso del proceso.`,
         delay: 200,
      },
      {
         question: '¿Qué tipo de soporte ofrecen después de la implementación del software?',
         answer: `Después de la implementación del software, ofrecemos soporte continuo para resolver 
            cualquier problema y asegurar el buen funcionamiento del sistema. Esto incluye asistencia 
            técnica, actualizaciones y mejoras según sea necesario, y capacitación para tu equipo. Nuestro 
            objetivo es asegurarnos de que el software continúe cumpliendo con tus necesidades a medida 
            que tu negocio crece y evoluciona.`,
         delay: 300,
      },
      {
         question: '¿Cómo garantizan la seguridad y la privacidad de los datos en el software?',
         answer: `Garantizamos la seguridad y la privacidad de los datos mediante la implementación de las 
            mejores prácticas en ciberseguridad. Utilizamos tecnologías avanzadas de encriptación y 
            autenticación para proteger la información sensible. Además, seguimos normas y regulaciones de 
            seguridad de datos para asegurar que tu información esté siempre protegida. Trabajamos para que 
            puedas tener confianza en la integridad y la privacidad de tus datos.`,
         delay: 400,
      },
   ]

   return (
      <section id="faq" className="faq section-bg">
         <div className="container" data-aos="fade-up">
            <SectionTitle
               heading="Preguntas Frecuentes"
               subHeading="Estas son algunas de las preguntas que nos hacen nuestros clientes."
            />

            <div className="faq-list">
               {questionsData?.length === 0 ? (
                  <p className="text-center font-weight-bold"> No hay elementos para mostrar</p>
               ) : (
                  <ul>
                     {questionsData
                        .map((item) => item as FaqItemProps)
                        .map((item, index) => (
                           <FaqItem key={index} {...item} />
                        ))}
                  </ul>
               )}
            </div>
         </div>
      </section>
   )
}
