interface ButtonLandingProps {
   label: string;
   actionClick: () => void;
   className?: string;
   isActive?: boolean;
   borderWhite?: boolean;
   size?: 'sm' | 'md' | 'lg';
}

const ButtonLanding: React.FC<ButtonLandingProps> = ({
   label,
   actionClick,
   className = '',
   isActive = false,
   borderWhite = false,
   size = 'md',
}) => {
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
         {label}
      </button>
   );
};

export default ButtonLanding;
