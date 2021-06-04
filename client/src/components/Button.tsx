import React from 'react'

type props = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Content: React.FC<props> = ({ children, onClick }) => {
	return (
		<button className='button' onClick={onClick}>
			{children}
		</button>
	)
}

export default Content
