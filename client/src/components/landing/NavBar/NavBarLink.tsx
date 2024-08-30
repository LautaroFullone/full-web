import type { SectionType } from 'models'
import ButtonLanding from '../ButtonLanding/ButtonLanding'

interface NavBarLinkProps {
   label: string
   sectionId: SectionType
   activeLink: string
   isButton: boolean
   goTo: (section: SectionType) => void
}

export default function NavBarLink({ label, sectionId, activeLink, isButton = false, goTo }: NavBarLinkProps) {
   return (
      <li>
         {isButton ? (
            <div className="d-flex justify-content-center">
               <ButtonLanding actionClick={() => goTo(sectionId)} isActive={activeLink === sectionId} className="nav-btn">
                  {label}
               </ButtonLanding>
            </div>
         ) : (
            <span onClick={() => goTo(sectionId)} className={`nav-link scrollto ${activeLink === sectionId ? 'active' : ''}`}>
               {label}
            </span>
         )}
      </li>
   )
}
