const { parse } = require("node:path");
const querystring = require("node:querystring");
const url = require('node:url')

const baseUrl = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: 'Belo Horizonte',
    periodo: 'verão'
})

const fullUrl = `${baseUrl}/${uri}`

console.log(fullUrl)

const parsedUri = querystring.parse(uri)
console.log(uri)
console.log("\n")
console.log(parsedUri)
console.log(parsedUri.destino)
console.log(url.parse(fullUrl))


const uri2 = querystring.escape('Rio de Janeiro')
console.log(uri2)
const unescapedUri2 = querystring.unescape(uri2)
console.log(unescapedUri2)