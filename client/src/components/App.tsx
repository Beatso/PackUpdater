import React from 'react'
import packFormats from '../pack_formats.json'
import Button from './Button'
import Content from './Content'
import FileUpload from './FileUpload'
import Footer from './Footer'
import RadioTable from './RadioTable'
import Section from './Section'
import Tab from './Tab'
import Tabs from './Tabs'
import TextInput from './TextInput'
import Warning from './Warning'

const SERVER_URL = process.env.REACT_APP_SERVER_URL

const App: React.FC = () => {
	const [warning, setWarning] = React.useState('')
	const [newPackFormat, setNewPackFormat] = React.useState(6)
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
						onUpdate={setNewPackFormat}
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
									const packUploadInput =
										document.getElementById(
											'pack-upload'
										) as HTMLInputElement | null

									if (packUploadInput) {
										if (packUploadInput.files?.length !== 1)
											return setWarning(
												' No file was uploaded.'
											)

										const packFile =
											packUploadInput.files[0]

										const data = new FormData()
										data.append('packFile', packFile)
										data.append(
											'newPackFormat',
											String(newPackFormat + 1)
										)

										// send request
										const response = await (
											await fetch(
												`${SERVER_URL}/update_pack_with_file`,
												{ method: 'POST', body: data }
											)
										).json()
									} else {
										// using file url
										const packUrlInput =
											document.getElementById(
												'pack-url'
											) as HTMLInputElement

										const packUrl = packUrlInput.value

										if (!packUrl)
											return setWarning(
												'No pack URL was provided.'
											)

										// send request
										const response = await (
											await fetch(
												`${SERVER_URL}/update_pack_with_url`,
												{
													method: 'POST',
													body: JSON.stringify({
														packUrl: packUrl,
														newPackFormat:
															newPackFormat + 1,
													}),
												}
											)
										).json()
									}
								}}
							></Button>
						</Content>
						{warning ? <Warning>{warning}</Warning> : null}
					</div>
				</Section>
				<Footer>
					<strong>Pack Updater</strong> by{' '}
					<a href='https://github.com/Beatso'>Beatso</a>. The project
					is{' '}
					<a href='https://github.com/Beatso/PackUpdater'>
						open source
					</a>{' '}
					under{' '}
					<a href='https://github.com/Beatso/PackUpdater/blob/master/LICENSE'>
						MIT
					</a>
					.
					<br />
					The favicon is copyright Twitter, Inc and other
					contributors, from{' '}
					<a href='https://github.com/twitter/twemoji'>Twemoji</a>.
					The{' '}
					<a href='https://github.com/twitter/twemoji/blob/master/assets/svg/1f4c2.svg'>
						graphic
					</a>{' '}
					is licensed under{' '}
					<a href='https://github.com/twitter/twemoji/blob/master/LICENSE-GRAPHICS'>
						CC-BY 4.0.
					</a>
					<br />
					<a href='https://www.planetminecraft.com/'>Minecraft</a> is
					copyright{' '}
					<a href='https://www.planetminecraft.com/'>
						Mojang Studios
					</a>{' '}
					and is not affiliated with this site.
				</Footer>
			</div>
			<div className='column' />
		</div>
	)
}

export default App
