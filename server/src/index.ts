// imports
import { config } from 'dotenv'
import { Dropbox } from 'dropbox'
import express from 'express'

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

// ...

// listen express server
const port = process.env.PORT || 3100
app.listen(port, () => console.log(`Server running on port ${port}`))
