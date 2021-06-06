import React from 'react'

const Message: React.FC<{
	color?:
		| 'is-dark'
		| 'is-primary'
		| 'is-link'
		| 'is-info'
		| 'is-success'
		| 'is-warning'
		| 'is-danger'
}> = ({ children, color }) => {
	return (
		<article className={`message ${color}`}>
			<div className='message-body'>{children}</div>
		</article>
	)
}

export default Message
