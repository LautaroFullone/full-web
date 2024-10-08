import ButtonLanding from '../ButtonLanding/ButtonLanding'
import { scrollTo } from '@/utils/scrollTo'
import './BannerSection.css'

export default function BannerSection() {
   // useEffect(() => {
   //    // eslint-disable-next-line
   //    const glightbox = GLightbox({
   //       selector: '.glightbox',
   //    })
   // }, [])

   const ytLink = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

   return (
      <section id="banner" className="d-flex align-items-center">
         <div className="container">
            <div className="row">
               <div
                  className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
               >
                  <h1 className="d-none">FullWeb</h1>
                  <h1>TITULO DE LA PÁGINA</h1>
                  <h2>SUBTITULO DE LA SECCIÓN</h2>

                  <div className="d-flex justify-content-center justify-content-lg-start">
                     <ButtonLanding
                        actionClick={() => scrollTo('about')}
                        isActive={true}
                        className="aboutButton"
                        size="lg"
                     >
                        SOBRE NOSOTROS
                     </ButtonLanding>

                     <a href={ytLink} className="glightbox btn-watch-video">
                        <i className="bi bi-play-circle"></i>VIDEO PROMOCIONAL
                     </a>
                  </div>
               </div>

               <div
                  className="col-lg-6 order-1 order-lg-2 banner-img"
                  data-aos="zoom-in"
                  data-aos-delay="200"
               >
                  <img
                     src={`full-web-logo.png`}
                     className="img-fluid rounded"
                     rel="preload"
                     alt=""
                  />
               </div>
            </div>
         </div>
      </section>
   )
}
