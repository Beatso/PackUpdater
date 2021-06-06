import React from 'react'

const Button: React.FC<{
	href: string
	color: string
}> = ({ children, href, color }) => {
	return (
		<a href={href} className={`button ${color}`}>
			{children}
		</a>
	)
}

export default Button
