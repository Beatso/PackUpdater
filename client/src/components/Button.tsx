import React from 'react'

const Button: React.FC<{
	text: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	isLoading?: boolean
}> = ({ children, text, onClick, isLoading }) => {
	return (
		<div>
			<button
				className={`button is-primary ${isLoading ? 'is-loading' : ''}`}
				onClick={onClick}
			>
				{text}
			</button>
			{children}
		</div>
	)
}

export default Button
