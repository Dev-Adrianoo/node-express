const rl = require('readline');

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

//criando objeto prommise
const promptPromise = {
    question: pergunta => new Promise((resolve, reject) => {
        try{
            prompt.question((pergunta), (resposta) => resolve(resposta))
        }catch(error){
            reject(error)
        }
    }),
    close : () => prompt.close()   
}

//prompt.question("Qual seu numero favorito? ", (resposta) => {
//    console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`)

// prompt.question("Qual seu Animal Favorito? ", (resposta) => {
//    console.log(`seu animal favorito é: ${resposta}`)
//    prompt.close()
// })
//})

async function askUser() {
    const numero = await promptPromise.question("Qual seu Número Favorito? ");
    console.log(`O dobro do seu número favorito é: ${parseInt(numero) * 2}`)
    
    const animal = await promptPromise.question("Qual seu Animal Favorito? ");
    console.log(`Seu Animal Favorito é: ${animal}`);

    promptPromise.close();
}

askUser()