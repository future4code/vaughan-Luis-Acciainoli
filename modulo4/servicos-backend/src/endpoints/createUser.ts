import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Address } from "../types";
import { getAddressInfo } from '../services/getAddress'
import { handlebarsOptions, transporter } from "../services/mailTransporter";
const hbs = require('nodemailer-express-handlebars');
import path from 'path';
import {v4 as uuidv4} from 'uuid';




const hbsConfig = {
   viewEngine: {
     extName: '.hbs',
     partialsDir: path.join(__dirname, '../views/'),
     layoutsDir: path.join(__dirname, '../views/'),
     defaultLayout: ''
   },
   viewPath: path.join(__dirname, '../views/'),
   extName: '.hbs'
 };
 


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { zipcode, number, complement} = req.body
      
      const address = await getAddressInfo(zipcode, number, complement)
      console.log(address)

      if (!zipcode || !number || !complement) {
         res.statusCode = 422
         throw new Error ("zipcode', 'number' e 'complement' são obrigatórios")
      }
      if (!address){
         res.statusCode = 422
         throw new Error ("Não foi possivel localizar este endereço")
      }
       

      

    
      let id = uuidv4();
      
      const insertId = { 
         ...address,
         id
      }
      
      await connection('servico_backend').insert(insertId)


      transporter.use('compile', hbs(handlebarsOptions));
     /*  const info = await transporter.sendMail({
         from: `<${process.env.NODEMAILER_USER}>`,
         to: "g6e8k2i3m1o7e5d9@labenualunos.slack.com",
         subject: "Cadastro na plataforma API",
         text: "Olá, g6e8k2i3m1o7e5d9@labenualunos.slack.com!",
         html: `<p>Olá, g6e8k2i3m1o7e5d9 <strong>o objeto utilizado</strong> para enviar este e-mail, possui:
         o "from" que indica o e-mail que enviou a mensagem, 
         </p>`
     }) */

     res.status(200).send({ info, message: "Usuario Criado!" })

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}


