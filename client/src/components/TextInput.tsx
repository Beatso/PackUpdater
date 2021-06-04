import React from 'react'
import './TextInput.css'

type Props = {
	type?: string
	label?: string
	placeholder?: string
	help?: string
	icon?: string
	button?: string
	onSubmit?: (
		value: string,
		event: React.MouseEvent<Element, MouseEvent>
	) => void
}

const Tab: React.FC<Props> = ({
	type,
	label,
	placeholder,
	help,
	icon,
	button,
	onSubmit,
}) => {
	const [value, setValue] = React.useState('')
	return (
		<div>
			{label ? <label className='label'>{label}</label> : null}
			<div
				className={`field no-bottom-margin ${
					button ? 'has-addons' : ''
				}`}
			>
				<div
					className={`control ${icon ? 'has-icons-left' : ''} ${
						button ? 'is-expanded' : ''
					}`}
				>
					<input
						className='input'
						type={type || 'text'}
						placeholder={placeholder}
						onChange={event => setValue(event.target.value)}
					/>
					{icon ? (
						<span className='icon is-small is-left'>
							<i className={icon}></i>
						</span>
					) : null}
				</div>
				{button ? (
					<div className='control'>
						<button
							className='button is-info'
							onClick={event => {
								if (onSubmit) onSubmit(value, event)
							}}
						>
							{button}
						</button>
					</div>
				) : null}
			</div>
			{help ? <span className='help'>{help}</span> : null}
		</div>
	)
}

export default Tab
