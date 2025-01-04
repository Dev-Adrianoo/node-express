import express, { Request, Response } from 'express'
import { config } from 'dotenv'
import path from 'node:path'
import { readFileSync } from 'node:fs'

interface User {
   name: string 
   age: number
 }

config()
const app = express()
app.use(express.static(path.join(__dirname, 'public'))) //Serve arquivos estáticos da pasta public com Express.
const url = process.env.API_BASE_URL ?? "http://localhost:3000/"
const porta = process.env.API_PORT ?? 3000
const users: User[] = [ 
  {
    name: "Adriano",
    age: 19
  },
  {
    name: "Hilary",
    age: 17
  }
]

app.get('/api', (req: Request, res: Response) => {
  const homePage = path.join(__dirname, 'index.html') //path.join é usada para "entrar" em pastas no caso index.html
  const homePageCarregada = readFileSync(homePage)  // basicamente vai ler tudo que o homePage passou usando readFileSync()
  return res.send(homePageCarregada)
});

app.get('/api/usuarios', (req: Request, res: Response) => {
  return res.json(users)
})

app.listen(porta,() => {
  console.log(` Servidor rodando no endereço: ${url}\n na porta ${porta}`)
})
