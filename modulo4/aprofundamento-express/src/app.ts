import express from "express";
import cors from "cors";
import {Task,toDO} from "./tasks"

const app = express();
app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("Pong!!");
});



//CRUD 

app.get("/list", (req, res) => {
  res.send(toDO);
});


app.get("/list/:status", (req, res) => {
  const status = req.params.status;

  const list = toDO.filter((task) => {
      return String(task.completed) === status
  }) 
 
  res.send(list)
})


app.post("/createtask", (req, res) => {
    const userId = Number(req.headers.authorization)
    const title: string = req.body.title
    const isCompleted: boolean = req.body.completed
    const id = Date.now()

    const newTask = {
        userId: userId,
        id: id,
        title: title,
        completed: isCompleted
    }

    toDO.push(newTask)

    res.send(toDO)
})


app.put("/list/:postId", (req, res) => {
    const postId = Number(req.params.postId)

    const changedTask = toDO.filter((task) => {
        return task.id === postId 
        }).map((task) => {
            return task = {
                userId: task.userId,
                id: task.id,
                title: task.title,
                completed: !task.completed
                }
        })

       res.status(220).send(changedTask) 
    })

    
app.delete("/list/delete/:postId", (req, res) => {
    const postId = Number(req.params.postId)

    const listUpdate = toDO.filter((task) => {
        return task.id !== postId
    })
    res.status(220).send(listUpdate)
})


app.get("/:userId/list", (req, res) => {
    const userId = req.params.userId
    
    const ListaUsuario = toDO.filter((task) => {
        return task.userId === Number(userId)
    })

    const Outros = toDO.filter((task) => {
      return task.userId !== Number(userId)
    })

    const newList = {
      toDo: {
        usuarioSelecionado: ListaUsuario, 
        outros: Outros
      }
    };

    res.status(220).send(newList)
})



app.listen(3000, () => {
  console.log("Server on");
});