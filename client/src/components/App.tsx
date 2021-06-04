import React from 'react'
import packFormats from '../pack_formats.json'
import FileUpload from './FileUpload'
import RadioTable from './RadioTable'
import Section from './Section'
import Tab from './Tab'
import Tabs from './Tabs'
import TextInput from './TextInput'

const App: React.FC = () => {
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
							></FileUpload>
						</Tab>

						<Tab title='File URL'>
							<TextInput
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
					Click on a table row to choose the new{' '}
					<code>pack_format</code> for your pack.
					<RadioTable
						columnTitles={['pack_format', 'Versions']}
						rows={packFormats.map(({ packFormat, versions }) => [
							packFormat,
							versions,
						])}
					/>
				</Section>

				<Section title='Convert Pack'></Section>
			</div>
			<div className='column' />
		</div>
	)
}

export default App
