import React from 'react'

const FileUpload: React.FC<{
	id: string
	label?: string
	help?: string
	accept?: string
}> = ({ id, label, help, accept }) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.files!.length > 0) {
			;(
				event.currentTarget.parentElement!
					.lastElementChild as HTMLSpanElement
			).textContent = event.currentTarget.files![0].name
		}
	}
	return (
		<div className='field'>
			{label ? <label className='label'>{label}</label> : null}

			<div className='control'>
				<div className='file has-name'>
					<label className='file-label'>
						<input
							id={id}
							type='file'
							name='pack'
							className='file-input'
							onChange={onChange}
							accept={accept}
						/>
						<span className='file-cta'>
							<span className='file-icon'>
								<i className='fas fa-upload'></i>
							</span>
							<span className='file-label'>Choose a file...</span>
						</span>
						<span className='file-name'>No file uploaded</span>
					</label>
				</div>
			</div>

			{help ? <span className='help'>{help}</span> : null}
		</div>
	)
}

export default FileUpload
