import React from 'react'

type props = {
	text: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<props> = ({ children, text, onClick }) => {
	return (
		<div>
			<button className='button is-primary' onClick={onClick}>
				{text}
			</button>
			{children}
		</div>
	)
}

export default Button
