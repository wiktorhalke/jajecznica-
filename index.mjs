import http, { METHODS } from 'http'
import { readFile, writeFile} from 'fs/promises'
import { write} from 'fs'

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(async (req, res) => {
	const url = req.url
    const method = req.method
	if (url === '/') {
        res.statusCode = 200
		const html = await readFile('./index.html')
		res.setHeader('content-type', 'text/html')
		res.write(html)
		res.end()
	} else if (url === '/dziekujemy') {
        res.statusCode = 200
		const html = await readFile('./dziekujemy.html')
		res.setHeader('content-type', 'text/html')
		res.write(html)
		res.end()
	} else if (url === '/api') {
        res.statusCode = 200
		const tablica = {
			zadanie: [
				{ name: 'Filip', numer: 10 },
				{ name: 'Kuba', numer: 14 },
				{ name: 'Wiktor', numer: 12 },
				{ name: 'Bartoszek', numer: 1 },
				{ name: 'Marcin', numer: 7 },
			]
		}
		res.setHeader('content-type', 'application/json')
		res.write(JSON.stringify(tablica))
		res.end()
	} else if (url === '/contact' && method == "POST") {
        const body = []

        req.on('data', (chunk) => {
            console.log(chunk.toString())
            body.push(chunk)
        })

        req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            await writeFile(`contact/message-${Date.now().toString()}.txt`, message)
            res.statusCode = 302
            res.setHeader('Location', '/dziekujemy')
            return res.end()
        })
	}
    else{
        const json ={
            text: 'Zły adres strony!'
        }
        res.statusCode = 404
        res.setHeader('content-type', 'application/json')
		res.write(JSON.stringify(json))
		res.end()
    }
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})

