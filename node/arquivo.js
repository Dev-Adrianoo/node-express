const path = require('node:path');
const fs = require('node:fs');
const { error } = require('node:console');
const dotenv = require('dotenv')
dotenv.config()

const filePath = path.join(process.cwd(), 'node', 'texto.txt')
const fileOutPath = path.join(process.cwd(), 'node', 'texto-com-linhas.txt')

console.time("leitura do arquivo")
fs.readFile(filePath, {} ,(error, dados) =>{
    if(error){
        console.error(`erro na leitura do arquivo no caminho ${filePath}`)
        return
    }
    console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`)

    const texto = dados.toString();
    const linhas = texto.split("\n");

    const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) => (`${index + 1} - ${linha}`))
    
    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (error) => {
        if (error){
            console.error(`Erro na leitura do arquivo no caminho ${filePath}`)
            return
        }
    })
    console.timeEnd("leitura do arquivo")
})

console.log(filePath)