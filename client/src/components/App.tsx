import React from 'react'
import packFormats from '../pack_formats.json'
import Button from './Button'
import Content from './Content'
import FileUpload from './FileUpload'
import RadioTable from './RadioTable'
import Section from './Section'
import Tab from './Tab'
import Tabs from './Tabs'
import TextInput from './TextInput'
import Warning from './Warning'

const App: React.FC = () => {
	const [warning, setWarning] = React.useState('')
	return (
		<div className='columns is-desktop'>
			<div className='column' />
			<div className='column is-7'>
				<Section title='Upload Pack'>
					<Tabs>
						<Tab title='Upload File'>
							<FileUpload
								id='pack-upload'
								label='Upload'
								help='Must be a valid resource or data pack, and correctly zipped.'
								accept='.zip'
							></FileUpload>
						</Tab>

						<Tab title='File URL'>
							<TextInput
								id='pack-url'
								type='url'
								label='File URL'
								placeholder='https://www.example.com/'
								help='Must be a direct download link to a valid resource or data pack, and correctly zipped.'
								icon='fas fa-link'
							/>
						</Tab>
					</Tabs>
				</Section>

				<Section title='Choose Pack Format'>
					<Content>
						Click on a table row to choose the new{' '}
						<code>pack_format</code> for your pack.
					</Content>
					<RadioTable
						columnTitles={['pack_format', 'Versions']}
						rows={packFormats.map(({ packFormat, versions }) => [
							packFormat,
							versions,
						])}
					/>
				</Section>

				<Section title='Update Pack'>
					<div>
						<Content>
							Press the button below to update your pack's
							version.
							<br />
							<Button
								text='Update Pack'
								onClick={async () => {
									const packUpload = document.getElementById(
										'pack-upload'
									) as HTMLInputElement | null

									if (packUpload) {
										if (packUpload.files?.length !== 1)
											return setWarning(
												'No file was uploaded.'
											)

										const packFile = packUpload.files[0]
										// todo: send request to server using file
									} else {
										// using file url
										const packUrl = document.getElementById(
											'pack-url'
										) as HTMLInputElement

										if (!packUrl.value)
											return setWarning(
												'No pack URL was provided.'
											)
									}
								}}
							></Button>
						</Content>
						{warning ? <Warning>{warning}</Warning> : null}
					</div>
				</Section>
			</div>
			<div className='column' />
		</div>
	)
}

export default App
