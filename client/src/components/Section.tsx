import React from 'react'

const Section: React.FC<{ title: string }> = ({ children, title }) => {
	return (
		<section className='section'>
			<div className='box'>
				<h2 className='title is-4'>{title}</h2>
				{children}
			</div>
		</section>
	)
}

export default Section
