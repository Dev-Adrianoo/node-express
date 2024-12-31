const { error } = require('node:console')
const dns = require('node:dns')
const { resolve } = require('node:path')


async function bootstrap () {
    const urlPesquisada = 'google.com'

    console.time("Pesquisando url por DNS PADRÃO")
    const address = await dns.promises.resolve4(urlPesquisada)
    console.timeEnd("Pesquisando url por DNS PADRÃO")
    console.log(address)

    
    console.log("=-=-=-=-=-=-=-=-=-==-=-=--=-=-=")
    
    const nameServes = await dns.promises.resolveNs(urlPesquisada)
    console.log(nameServes)

    const ipNS = await dns.promises.resolve4(nameServes[1])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNS)
    
    console.time("pesquisando por dns especifico")
    
    resolver.resolve4(urlPesquisada, (error, address) => {
        if(error){
            console.error("não foi possivel encontrar IPV4")
            return
        }
        console.timeEnd("pesquisando por dns especifico")
        console.log(address)
    })

}

bootstrap()

// const ipv4 = dns.resolve4(urlPesquisada, (error,address) => {
//     if (error){
//         console.error("URL NÃO ENCONTRADA!")
//         return
//     }
//     console.log(address)
// })
// console.log(ipv4)
