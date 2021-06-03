import React from 'react'
import packFormats from '../pack_formats.json'
import Content from './Content'
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
								label='Upload Pack'
								help='Must be a valid resource or data pack, and correctly zipped.'
							></FileUpload>
						</Tab>
						<Tab title='PMC'>
							<TextInput
								id='pmc-link'
								label='Planet Minecraft Link'
								placeholder='https://www.planetminecraft.com/texture-pack/gliding-elytra/'
								help='Must be a link to a  texture pack or data pack on Planet Minecraft.'
								icon='fas fa-link'
								button='Find'
							></TextInput>
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
			</div>
			<div className='column' />
		</div>
	)
}

export default App
