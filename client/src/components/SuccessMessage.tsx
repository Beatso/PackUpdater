import React from 'react'

const SuccessMessage: React.FC = ({ children }) => {
	return (
		<article className='message is-success'>
			<div className='message-body'>{children}</div>
		</article>
	)
}

export default SuccessMessage
