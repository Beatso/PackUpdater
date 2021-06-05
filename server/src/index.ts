// imports
import { config } from 'dotenv'
import { Dropbox } from 'dropbox'
import express from 'express'
import { IncomingForm } from 'formidable'

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
app.post('/update_pack_with_file', (req, res) => {
	const form = new IncomingForm()
	// ...
})

// handle url update requests
app.post('/update_pack_with_url', (req, res) => {
	// ...
})

// listen express server
const port = process.env.PORT || 3100
app.listen(port, () => console.log(`Server running on port ${port}`))
