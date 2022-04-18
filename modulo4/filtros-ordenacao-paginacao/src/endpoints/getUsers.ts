import { Request, Response } from "express"
import { connection } from "../data/connection"




export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
   `)

   return result[0]
}

export const getUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await selectAllUsers()

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)

   } catch (error) {
      if(error instanceof Error){
         res.send(error.message)
      }
   }
}