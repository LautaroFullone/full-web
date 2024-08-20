import { SectionType } from "models";
import ButtonLanding from "./ButtonLanding";

interface NavBarLinkProps {
   label: string
   sectionID: SectionType
   activeLink: string
   asButton: boolean
   goTo: (section: SectionType) => void
}

export default function NavBarLink({ label, sectionID, activeLink, asButton = false, goTo }: NavBarLinkProps) {

   return (
      <li>
         {
            asButton
               ?
               <div className="d-flex justify-content-center">
                  <ButtonLanding
                     actionClick={() => goTo(sectionID)}
                     isActive={(activeLink === sectionID)}
                     label={label}
                     className='nav-btn'
                  />
               </div>
               :
               <span
                  onClick={() => goTo(sectionID)}
                  className={`nav-link scrollto ${(activeLink === sectionID) ? 'active' : ''}`} >
                  {label}
               </span>
         }
      </li>
   )
}