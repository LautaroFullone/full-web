import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './ImagesGallery.css'
import { Unit } from 'models'

interface GalleryFilter {
   title: string
   categoryId: string
   filterName: string //cat.id + '_filter',
   active: boolean
}

interface GalleryImage {
   title: string
   unitId: string
   fileName: string
   miniDescription: string
   filter: string
}
interface ImagesGalleryProps {
   filtersList: GalleryFilter[]
   imagesList: GalleryImage[]
}

const units: Unit[] = [
   {
      id: '1',
      name: 'CRM Empresarial Pro',
      id_brand: 'b1',
      id_category: 'c1',
      description:
         'Una solución de CRM avanzada para gestionar relaciones con clientes y automatizar procesos de ventas.',
      createdDate: '2024-01-15',
      show: true,
      isNew: false,
      usedBrandName: 'TechCorp',
      images: [
         {
            id: 'thumbnail',
            fileName: 'crm_empresarial_pro_thumb.jpg',
            id_unit: '1',
         },
         {
            id: 'full',
            fileName: 'crm_empresarial_pro_full.jpg',
            id_unit: '1',
         },
      ],
      category: 'CRM',
   },
   {
      id: '2',
      name: 'Plataforma de Comercio Electrónico Ultra',
      id_brand: 'b2',
      id_category: 'c2',
      description:
         'Plataforma completa para gestionar tiendas en línea con características avanzadas de venta y marketing.',
      createdDate: '2023-09-10',
      show: true,
      isNew: true,
      usedBrandName: 'EcomSolutions',
      images: [
         {
            id: 'thumbnail',
            fileName: 'plataforma_comercio_electronico_thumb.jpg',
            id_unit: '2',
         },
         {
            id: 'full',
            fileName: 'plataforma_comercio_electronico_full.jpg',
            id_unit: '2',
         },
      ],
      category: 'E-Commerce',
   },
   {
      id: '3',
      name: 'Aplicación de Gestión de Proyectos Flex',
      id_brand: 'b3',
      id_category: 'c3',
      description:
         'Herramienta flexible para la gestión de proyectos y colaboración en equipo con características personalizables.',
      createdDate: '2024-05-20',
      show: true,
      isNew: true,
      usedBrandName: 'FlexSoft',
      images: [
         {
            id: 'thumbnail',
            fileName: 'app_gestion_proyectos_thumb.jpg',
            id_unit: '3',
         },
         {
            id: 'full',
            fileName: 'app_gestion_proyectos_full.jpg',
            id_unit: '3',
         },
      ],
      category: 'Project Management',
   },
   {
      id: '4',
      name: 'Sistema de Seguridad Cibernética Shield',
      id_brand: 'b4',
      id_category: 'c4',
      description:
         'Solución integral para la protección de datos y redes contra amenazas cibernéticas.',
      createdDate: '2023-11-01',
      show: true,
      isNew: false,
      usedBrandName: 'CyberGuard',
      images: [
         {
            id: 'thumbnail',
            fileName: 'sistema_seguridad_thumb.jpg',
            id_unit: '4',
         },
         {
            id: 'full',
            fileName: 'sistema_seguridad_full.jpg',
            id_unit: '4',
         },
      ],
      category: 'Cybersecurity',
   },
]

export default function ImagesGallery({ filtersList, imagesList }: ImagesGalleryProps) {
   const isotope = useRef()
   const [filterKey, setFilterKey] = useState('*')
   const [loading, setLoading] = useState(true)

   function handleFilterKeyChange(key) {
      let oldFilter = filtersList.find(({ active }) => active === true)
      if (oldFilter) oldFilter.active = false

      let newFilter = filtersList.find(({ filterName }) => filterName === key)
      if (newFilter) newFilter.active = true

      setFilterKey(key)

      let imagesGallery = document.getElementById('images-gallery')!
      imagesGallery.scroll(0, 0)
   }

   useEffect(() => {
      if (units && units.length > 0) {
         setTimeout(() => {
            let portfolioContainer = document.querySelector('.gallery-container')

            isotope.current = new Isotope(portfolioContainer, {
               itemSelector: '.gallery-item',
               layoutMode: 'masonry',
            })

            setLoading(false)
         }, 1000)
      }
      return () => isotope?.current?.destroy()
   }, [units])

   useEffect(() => {
      if (!loading) isotope.current.arrange({ filter: filterKey === '*' ? `*` : `.${filterKey}` })
   }, [loading, filterKey])

   if (units?.length === 0)
      return <p className="text-center font-weight-bold"> No hay elementos para mostrar</p>

   if (units?.length > 0)
      return (
         <>
            <ul id="gallery-flters" data-aos="fade-up" data-aos-delay="100">
               {filtersList && (
                  <Swiper slidesPerView={3} navigation>
                     {filtersList.map((item, index) => (
                        <SwiperSlide key={index}>
                           <li
                              data-filter={item.filterName}
                              className={item.active ? 'filter-active' : ''}
                              onClick={() => handleFilterKeyChange(item.filterName)}
                           >
                              {item.title}
                           </li>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               )}
            </ul>

            <ScrollContainer height={1000}>
               <div
                  id="images-gallery"
                  className="row gallery-container"
                  data-aos="fade-up"
                  data-aos-delay="200"
               >
                  {imagesList.map((item, index) => (
                     <GalleryImage key={index} {...item} />
                  ))}
               </div>
            </ScrollContainer>
         </>
      )
}
