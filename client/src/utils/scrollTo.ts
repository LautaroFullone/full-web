import { SectionType } from "models"


export function scrollTo(section: SectionType) {
    
    if(section === "top"){
        window.scrollTo({ top: 0, left: 0 })
    } else {
        let header = document.querySelector('#header')!
        let offset = header.offsetHeight

        let elementPos = document.querySelector(`#${section}`)?.offsetTop

        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }
}