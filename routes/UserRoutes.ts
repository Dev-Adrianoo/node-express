import {Router, Request, Response} from "express"
import path from "node:path";
import { writeFileSync } from "node:fs";
import { config } from "dotenv"
import { randomUUID } from "node:crypto";
import dbJson from '../server.json';

const userRoutes = Router()

type User = {
  id: string
  name: string
  age: number
}


type ICreateUserDTO = Omit<User, "id"> // está apenas omitindo o id do USER
const dbjasonPath = path.resolve(process.cwd(), 'server.json') // Caminho de onde se encontra o banco de dados JSON
const users: User[] = dbJson.users  // Caminho aqui é o users "DENTRO" do banco de dados DB

userRoutes.get('/api/usuarios', (req: Request, res: Response) => {
  return res.status(200).json(users)
})

userRoutes.post('/api/usuarios', async (req: Request, res: Response) => {
  const { name, age }: ICreateUserDTO = req.body

  if (!name || !age || age <= 0) {
    return res.status(400).send("Usuário sem nome ou idade")
  }

  const user = ({id: randomUUID(), name, age })
  users.push(user)
  
  writeFileSync(dbjasonPath, JSON.stringify({...dbJson, users}))

  return res.status(201).json(user)
})

userRoutes.delete('/api/usuarios/:id', async (req: Request, res: Response) => {
  const  { id } = req.params

  if(!id){
    return res.status(404).send("Usuario precisa de um ID")
  }

  const foundUser = users.find(user => user.id === id)

  if(!foundUser){
    const errorMessage = `Usuario com o id ${id}\nNão foi encontrado`
    return res.status(404).send(errorMessage)
  }

   const UpdatedUsers = users.filter(user => user.id !== id) // os usuarios cujo ID Usuario é diferente do id informado
   writeFileSync(dbjasonPath, JSON.stringify({...dbJson, users: UpdatedUsers}))
   
  return res.status(204).json("")
})

export { userRoutes }