const { promises } = require("node:dns");
const hhtp = require("node:http");
const { resolve } = require("node:path");
const { json } = require("node:stream/consumers");
const { server, resolveTypeReferenceDirective } = require("typescript")

const sports = ['soccer', 'volley', 'basketball', 'tennis'];

const servidor = hhtp.createServer(async(request, response) => {
    const { method, statusCode, url } = request;

    request.headers.accept = '*'
    request.headers.allow = '*'

    const bodyPromise = new Promise((resolve, reject) => {
        let body
        request.on('data', data => {
            body = JSON.parse(data)
        })
        
        request.on('end', data => {
            resolve(body)
        })
    })

    if(url === '/') {
         response.write("<div><h1>Hello From Node</h1><p>http Server</p></div>")
         response.end();
         return
    }

    if(url === '/api/sports') {
        if(method === "GET"){
            response.write(JSON.stringify(sports))
            response.end();
            return
        }
        
        if(method === "POST") {
            const body = await bodyPromise

            const { name } = body

            if(!sports.map(sport => sport.toLocaleLowerCase()).includes(name.toLocaleLowerCase())){

                sports.push(name.toLocaleLowerCase())
            }
            response.write(name.toLocaleLowerCase())
            response.end()
            return
        }
    }

    response.statusCode = 404;
    response.write("<h1>Pagina não encontrada</h1>")
})

servidor.listen(3000, 'localhost', () => {
    console.log('server running on http://localhost:3000')
})