import { loadImage } from '@/utils/loadImage'
import { Link, useNavigate } from 'react-router-dom'
import './Card.css'

interface CardProps {
   id: string
   image: any
   name: string
   description: string
   showDots?: boolean
   fromAdmin?: boolean
}

export default function Card({
   image,
   name,
   description,
   id,
   showDots = false,
   fromAdmin = false,
}: CardProps) {
   const navigate = useNavigate()

   return (
      <div
         className={`icon-box ${fromAdmin ? 'hover-move-transition' : ''}`}
         onClick={() => navigate(`/marca/${id}`)}
      >
         <div
            className="icon d-flex align-items-center justify-content-center"
            style={{ height: fromAdmin ? '150px' : '200px', width: '100%' }}
         >
            <img
               src={loadImage(image.fileName, 'brands')}
               className="img-fluid icon-image-box"
               alt=""
            />
         </div>

         <div className="mt-4">
            <h4>
               <Link to={`/marca/${id}`}>{name}</Link>
            </h4>

            <p className={showDots ? 'dotsClass ' : ''}>{description}</p>
         </div>
      </div>
   )
}
