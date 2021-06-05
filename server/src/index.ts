// imports
import { config } from 'dotenv'
import { Dropbox } from 'dropbox'
import express from 'express'
import { File, IncomingForm } from 'formidable'
import { existsSync } from 'fs'
import streamZip from 'node-stream-zip'
import pEvent from 'p-event'

// dotenv setup
config()

// dropbox setup
const dbx = new Dropbox({
	accessToken: process.env.DROPBOXTOKEN,
})

// express setup
const app = express()
app.use(express.json()) // to support JSON-encoded bodies
app.get('/ping', (req, res) => res.send('pong'))

// handle file update requests
app.post('/update_pack_with_file', (req, res, next) => {
	const form = new IncomingForm()
	form.parse(req, async (err, fields, files) => {
		if (err) {
			next(err)
			return
		}

		const { path, name } = files.packFile as File

		// res.send(await generateResponseFromFilePath(path, name))
		console.log(await generateResponseFromFilePath(path, name))
	})
})

// handle url update requests
app.post('/update_pack_with_url', async (req, res) => {
	// ...
})

const generateResponseFromFilePath = async (
	path: string,
	name: string | null
) => {
	// check file exists
	if (!existsSync(path))
		return JSON.stringify({
			success: false,
			reason: 'File did not exist.',
		})

	const zip = new streamZip.async({ file: path })

	// check file has valid pack.mcmeta
	try {
		const stream = await zip.stream('pack.mcmeta')
		// console.log(await pEvent(stream, 'data'))
		const oldPackMcmetaContents = JSON.parse(
			(await pEvent(stream, 'data')).toString()
		)
		if (typeof oldPackMcmetaContents?.pack?.pack_format !== 'number')
			return JSON.stringify({
				success: false,
				reason: 'pack.mcmeta was not valid.',
			})
	} catch {
		return JSON.stringify({
			success: false,
			reason: 'Pack had no pack.mcmeta. Make sure it was a valid resource or data pack and is zipped correctly.',
		})
	}

	// todo: create zip with update pack.mcmeta
	// todo: upload zip to dropbox
	// todo: get direct download link
	// todo: return direct download link
}

// listen express server
const port = process.env.PORT || 3100
app.listen(port, () => console.log(`Server running on port ${port}`))
