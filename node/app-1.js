const { stdin, stdout } = require('process')
const rl = require('readline')

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

prompt.question('qual seu número favorito?: ', (resposta) => {
    console.log(`o Dobro desse número favorito é: ${parseInt(resposta) * 2}`)

    prompt.question(`Seu animal favorito?: `, (Response) => {
        console.log(`Seu animal favorito é: ${Response}`)
        prompt.close()
    })
    
})