import './ButtonLanding.css'

interface ButtonLandingProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   actionClick: () => void
   className?: string
   isActive?: boolean
   borderWhite?: boolean
   size?: 'sm' | 'md' | 'lg'
}

export default function ButtonLanding({
   children,
   actionClick,
   className = '',
   isActive = false,
   borderWhite = false,
   size = 'md',
}: ButtonLandingProps) {
   return (
      <button
         type="button"
         onClick={actionClick}
         className={`secondary-btn 
				${isActive ? 'active' : ''} 
				${borderWhite ? ' borderWhite' : ''} 
				${size === 'lg' ? ' large-btn' : ''}  
				${className}`}
      >
         {children}
      </button>
   )
}
