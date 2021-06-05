// imports
import AdmZip from 'adm-zip'
import { config } from 'dotenv'
import { Dropbox } from 'dropbox'
import express from 'express'
import { File, IncomingForm } from 'formidable'
import { existsSync } from 'fs'

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

		console.log(
			await generateResponseFromFilePath(
				path,
				name,
				Number(fields.newPackFormat)
			)
		)
	})
})

// handle url update requests
app.post('/update_pack_with_url', async (req, res) => {
	// ...
})

const generateResponseFromFilePath = async (
	path: string,
	name: string | null,
	newPackFormat: number
) => {
	// check pack zip file exists
	if (!existsSync(path))
		return JSON.stringify({
			success: false,
			reason: 'Pack zip file did not exist.',
		})

	// check pack_format is valid
	if (
		isNaN(newPackFormat) || // must be a number
		!Number.isInteger(newPackFormat) || // must be an integer
		newPackFormat < 1 || // must be at least 1
		newPackFormat > 99 // dont allow pack formats greater than 99
	)
		return JSON.stringify({
			success: false,
			reason: 'Provided pack_format was not a valid number.',
		})

	const zip = new AdmZip(path)

	// check pack.mcmeta exists
	if (
		!zip.getEntries().some(zipEntry => zipEntry.entryName === 'pack.mcmeta')
	)
		return JSON.stringify({
			success: false,
			reason: 'Pack had no pack.mcmeta. Make sure it was a valid resource or data pack and is zipped correctly.',
		})

	const oldPackMcmetaContents = zip.readAsText('pack.mcmeta')

	// check pack.mcmeta is valid
	try {
		const oldContentsParsed = JSON.parse(oldPackMcmetaContents) // will throw an error if invalid json syntax
		if (typeof oldContentsParsed?.pack?.pack_format !== 'number')
			// throw error if not valid pack.mcmeta
			throw 'not valid'
	} catch {
		return JSON.stringify({
			success: false,
			reason: 'pack.mcmeta was not valid.',
		})
	}

	let packMcmetaContentsParsed = JSON.parse(oldPackMcmetaContents)
	packMcmetaContentsParsed.pack.pack_format = newPackFormat
	const newPackMcmetaContents = Buffer.from(
		JSON.stringify(packMcmetaContentsParsed)
	)
	zip.updateFile('pack.mcmeta', newPackMcmetaContents)

	// todo: update pack.mcmeta and rewrite zip
	// todo: upload zip to dropbox
	// todo: get direct download link
	// todo: return direct download link
}

// listen express server
const port = process.env.PORT || 3100
app.listen(port, () => console.log(`Server running on port ${port}`))
