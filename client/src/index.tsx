import React from 'react'
import ReactDOM from 'react-dom'
import FileUpload from './components/FileUpload'
import RadioTable from './components/RadioTable'
import Section from './components/Section'
import Tab from './components/Tab'
import Tabs from './components/Tabs'
import './index.css'
import packFormats from './pack_formats.json'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	<React.StrictMode>
		<div className='columns is-desktop'>
			<div className='column' />
			<div className='column is-7'>
				<Section title='Upload Pack'>
					<Tabs>
						<Tab title='Upload File'>
							<FileUpload></FileUpload>
						</Tab>
						<Tab title='PMC'></Tab>
					</Tabs>
				</Section>
				<Section title='Choose Pack Format'>
					<RadioTable
						columnTitles={['pack_format', 'Versions']}
						rows={packFormats}
					/>
				</Section>
			</div>
			<div className='column' />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
