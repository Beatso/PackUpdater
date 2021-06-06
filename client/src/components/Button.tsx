import React from 'react'

type props = {
	text: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	isLoading?: boolean
}

const Button: React.FC<props> = ({ children, text, onClick, isLoading }) => {
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
