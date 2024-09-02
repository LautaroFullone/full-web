import SectionTitle from '../SectionTitle/SectionTitle'
import './CardsGallery.css'
import { ScrollContainer } from '@/components/shared'
import Card from '../Card/Card'
import { Brand } from 'models'
import './CardsGallery.css'

export default function CardsGallery() {
   // const { getBrandsAPI } = useApi()
   //const [dataToShow, setDataToShow] = useState([])

   // useEffect(() => {
   //    getBrandsAPI(true)
   //       .then(({ data }) => {
   //          setDataToShow(data.records)
   //       })
   //       .catch(({ response }) => {
   //          console.error(response)
   //       })
   // }, [])

   const dataToShow: Brand[] = [
      {
         id: '111',
         name: 'Diseño Web para Emprendedores',
         description: 'descriptionn',
         image: { fileName: '' },
         show: true,
      },
      {
         id: '112',
         name: 'Diseño Web para Empresas',
         description: 'descriptionn',
         image: { fileName: '' },
         show: true,
      },
      {
         id: '113',
         name: 'Diseño Web Autogestionable',
         description: 'descriptionn',
         image: { fileName: '' },
         show: true,
      },
      {
         id: '114',
         name: 'Diseño Web Cursos',
         description: 'descriptionn',
         image: { fileName: '' },
         show: true,
      },
   ]

   return (
      <section id="brands" className="brands section-bg">
         <div className="container" data-aos="fade-up">
            <SectionTitle
               heading="Marcas"
               subHeading="Todas nuestras unidades nuevas pertenecen a las siguientes marcas en las que confiamos."
            />

            {dataToShow?.length === 0 ? (
               <p className="text-center font-weight-bold">No hay elementos para mostrar</p>
            ) : (
               <ScrollContainer height={1000}>
                  <div className="row" data-aos="zoom-in">
                     {dataToShow
                        .map((item) => item as Brand)
                        .map((item) => (
                           <div
                              key={item.id}
                              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 pdb"
                           >
                              <Card {...item} />
                           </div>
                        ))}
                  </div>
               </ScrollContainer>
            )}
         </div>
      </section>
   )
}
