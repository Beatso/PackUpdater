import React from 'react'
import './TextInput.css'

type Props = {
	id: string
	label?: string
	placeholder?: string
	help?: string
	icon?: string
	button?: string
	buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Tab: React.FC<Props> = ({
	children,
	id,
	label,
	placeholder,
	help,
	icon,
	button,
	buttonOnClick,
}) => {
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
						type='text'
						id={id}
						placeholder={placeholder}
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
							onClick={buttonOnClick}
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
