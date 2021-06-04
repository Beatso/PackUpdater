import React from 'react'

const Warning: React.FC = ({ children }) => {
	return (
		<article className='message is-danger'>
			<div className='message-body'>{children}</div>
		</article>
	)
}

export default Warning
