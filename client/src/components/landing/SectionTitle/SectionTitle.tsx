import './SectionTitle.css'

interface SectionTitleProps {
   heading: string
   subHeading?: string
}

export default function SectionTitle({ heading, subHeading }: SectionTitleProps) {
   return (
      <div className="section-title">
         <h2>{heading}</h2>
         {subHeading && <p>{subHeading}</p>}
      </div>
   )
}
