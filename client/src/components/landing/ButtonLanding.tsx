
interface ButtonLandingProps {
	label: string
	actionClick: any
	className?: string
	isActive?: boolean
	borderWhite?: boolean
	size?: 'sm' | 'md' | 'lg'
}
export default function ButtonLanding({ label, actionClick, className = '', isActive, borderWhite = false, size = 'md' }: ButtonLandingProps) {
	return (
		<button className={`secondary-btn 
				${isActive ? 'active' : ''} 
				${borderWhite ? ' borderWhite' : ''} 
				${size === 'lg' ? ' large-btn' : ''}  
				${className}`}
			onClick={actionClick} >
			{label}
		</button>
	)
}