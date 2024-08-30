import { SectionType } from 'models';

export function scrollTo(section: SectionType) {
   if (section === 'top') {
      window.scrollTo({ top: 0, left: 0 });
   } else {
      const header = document.querySelector('#header');
      const offset = header.offsetHeight;

      const elementPos = document.querySelector(`#${section}`)!.offsetTop;

      window.scrollTo({
         top: elementPos - offset,
         behavior: 'smooth',
      });
   }
}
