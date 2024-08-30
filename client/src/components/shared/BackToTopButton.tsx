import { scrollTo } from '@/utils/scrollTo'
import { useEffect, useRef } from 'react'

export default function BackToTopButton() {
   const backToTopRef = useRef(null)

   function toggleBacktotop() {
      if (window.scrollY > 100) backToTopRef.current.classList.add('active')
      else backToTopRef.current.classList.remove('active')
   }

   useEffect(() => {
      window.addEventListener('load', toggleBacktotop)
      window.addEventListener('scroll', toggleBacktotop)

      return () => {
         window.removeEventListener('load', toggleBacktotop)
         window.removeEventListener('scroll', toggleBacktotop)
      }
   }, [])

   return (
      <a ref={backToTopRef} className="back-to-top d-flex align-items-center justify-content-center" onClick={() => scrollTo('top')}>
         <i className="bi bi-arrow-up-short" />
      </a>
   )
}
