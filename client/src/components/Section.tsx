import React from 'react'
import Content from './Content'

const Section: React.FC<{ title: string }> = ({ children, title }) => {
	return (
		<section className='section'>
			<Content>
				<div className='box'>
					<h2 className='title is-4'>{title}</h2>
					{children}
				</div>
			</Content>
		</section>
	)
}

export default Section
