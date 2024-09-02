import ImagesGallery from '../ImagesGallery/ImagesGallery'
import SectionTitle from '../SectionTitle/SectionTitle'
import './GallerySection.css'

export default function GallerySection() {
   return (
      <section id="gallery" className="gallery">
         <div className="container">
            <SectionTitle heading="Soy el titulo" subHeading="soy el subtitulo" />

            <ImagesGallery filters={[]} />
         </div>
      </section>
   )
}
