import express, { Request, Response } from "express"
import cors from "express"
import { AddressInfo } from "net"
import { body, validationResult,check } from 'express-validator';
import {createUser, getUserById,getTaskById, updateUser, createTask, UserHasTask} from './query'


const app = express()
app.use(express.json())
app.use(cors())

//====================== INICIANDO SERVIDOR LOCAL NA PORTA 3000 =========================================

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Servidor rodando em: http://localhost:${address.port}`)
    } else {
        console.error(`Falha ao iniciar servidor.`)
    }
})



//====================== POST user | Criação de usuário respeitando as validações da lib express validator =========================================



app.post(
    '/user',
    [
        body('name').isLength({min:5}),
        body('nickname').isLength({ min:3 }).withMessage("Campo precisa ter pelo menos 3 caracteres"),
        body('email').isEmail().withMessage("O e-mail precisa ser válido").normalizeEmail()
    ], 
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.send({ message: 'Tudo válido' })
        createUser(req.body.name,req.body.nickname,req.body.email);
    });




//====================== POST task | cria uma task =========================================


app.post(
    '/task', 
    [
        body('title').isLength({min:5}).withMessage("Campo precisa ter pelo menos 5 caracteres"),
        body('title').not().isEmpty().withMessage("Campo não pode ser vazio"),
        body('description').isLength({min:15}).withMessage("Campo precisa ter pelo menos 15 caracteres"),
        body('description').not().isEmpty().withMessage("Campo não pode ser vazio"),
        body('limitDate').not().isEmpty().withMessage("Campo não pode ser vazio")
    ],
    (req: Request, res: Response) => {
        
        let date: string;
        date = req.body.limitDate.split("/")
        date = `${date[2]}-${date[1]}-${date[0]}`
        
        //console.log(date);

        // tipo date mysql YYYY-MM-DD
       
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.send({ message: 'Tudo válido' })
        createTask(req.body.title,req.body.description, date);
});

//====================== POST selecionar task para user =========================================

app.post(
    '/taskUser', 
    [
        body('UserTodo_id').not().isEmpty().withMessage("Selecione o seu id de usuario"),
        body('TaskTodo_id').not().isEmpty().withMessage("Selecione o seu id da sua task"),
    ],
    (req: Request, res: Response) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.send({ message: 'Tudo válido' })
        UserHasTask(req.body.UserTodo_id,req.body.TaskTodo_id);
});


//====================== GET user | Retorna Usuario Cadastrado pelo ID =========================================
app.get(
    '/user/:id', 
    async (req: Request, res: Response) => {
        let errorCode: number = 500;
    try {

        const id: string = req.params.id
        //console.log(id);
        const result = await getUserById(id)

        //verificação de id vazio no body e resultado não encontrado
        if (!id) {
            errorCode = 422
            throw new Error("Id não inserido.");
        }

        else if (result.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        res.status(200).send({
            user: result
        })

    } catch (err: any) {
        res.status(errorCode).send("Erro "+errorCode+" Valor invalido de ID, tente novamente." )
    }
})


//====================== GET getTaskById | Retorna tarefa pelo id da mesma =========================================
app.get(
    '/task/:id',
     async (req: Request, res: Response) => {
        let errorCode: number = 500;
    try {
        const id = req.params.id

        const result = await getTaskById(id)

        if (!result.length) {
            errorCode = 404
            throw new Error("Tarefa não encontrada.")
        }


        res.status(200).send(result)

    } catch (err: any) {
        if(errorCode === 404){
            res.statusCode = 404;
        }
        res.status(errorCode).send("Erro "+errorCode+" Valor invalido de ID, tente novamente." )
    }
})


//====================== PUT user | Atualiza os campos de nome e nickname pelo id =========================================

app.put(
    '/user/edit/:id',
     async (req: Request, res: Response) => {
         let errorCode: number = 500
    try {
        const id: string = req.params.id
        const { name, nickname} = req.body

        //verificar se há os valores de nome e nickname

        if (!name || !nickname) {
            errorCode = 404
            throw new Error("Confirme se os valores de nome e nickname estão preenchidos.")
        }


        await updateUser(id, name, nickname)

        res.status(200).send("Usuário atualizado com sucesso.")

    } catch (err: any) {
        res.status(errorCode).send("Erro "+errorCode+" Valores invalidos, tente novamente." )
    }
})