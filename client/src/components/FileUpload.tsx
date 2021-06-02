import React from 'react'

const FileUpload: React.FC = () => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.files!.length > 0) {
			;(
				event.currentTarget.parentElement!
					.lastElementChild as HTMLSpanElement
			).textContent = event.currentTarget.files![0].name
		}
	}
	return (
		<div className='file has-name'>
			<label className='file-label'>
				<input
					type='file'
					name='pack'
					className='file-input'
					onChange={onChange}
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
	)
}

export default FileUpload
