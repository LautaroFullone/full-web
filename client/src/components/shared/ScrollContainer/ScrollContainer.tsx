import { ReactNode } from 'react'
import './ScrollContainer.css'

interface ScrollContainerProps {
   height: number
   children?: ReactNode
}

export default function ScrollContainer({ height, children }: ScrollContainerProps) {
   return (
      <div
         className="scrolleable"
         style={{ maxHeight: height, overflowX: 'hidden', overflowY: 'auto' }}
      >
         {children}
      </div>
   )
}
