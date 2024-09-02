import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import './FaqItem.css'

export interface FaqItemProps {
   question: string
   answer: string
   delay: number
}

export default function FaqItem({ question, answer, delay }: FaqItemProps) {
   return (
      <li data-aos="fade-up" data-aos-delay={delay.toString()}>
         <HelpOutlineIcon className="icon-help" />

         <a data-bs-toggle="collapse" className="collapsed" data-bs-target={`#faq-list-${delay}`}>
            {question}
            <KeyboardArrowDownIcon className="icon-show" />
            <KeyboardArrowUpIcon className="icon-close" />
         </a>

         <div id={`faq-list-${delay}`} className="collapse" data-bs-parent=".faq-list">
            <p>{answer}</p>
         </div>
      </li>
   )
}
