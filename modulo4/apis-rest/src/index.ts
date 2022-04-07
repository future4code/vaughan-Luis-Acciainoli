import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Usuario, Usuarios } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());


app.get("/Usuarios", (req, res) => {
  try {
    if (!Usuarios) {
      throw new Error("Não há usuários listados.");
    }
    res.status(200).send(Usuarios);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});


app.get("/Usuarios/role/:role", (req, res) => {
    let errorCode = 400
  let role = req.params.role as string;
  try {
    if (!role) {
        errorCode = 404
      throw new Error("Informe o tipo de usuario, por favor.");
    } else {
      let roles = Usuarios.filter((Usuario) => {
        return Usuario.role === role.toUpperCase();
      });

      if (role.length >= 1) {
        res.status(202).send(roles);
      } else if (role.length < 1) {
          errorCode = 422
        throw new Error("Função não cadastrada.");
      }
    }
  } catch (e: any) {
      res.status(errorCode).send(e.message);
  }
});

app.get("/Usuarios/procurar/:name", (req, res) => {
  let name = req.params.name as string;
  let errorCode = 400;
  try {
    if (!name) {
    errorCode = 404
      throw new Error("Insira o nome corretamente");
    } else {
      let names = Usuarios.filter((Usuario) => {
        Usuario.name.toUpperCase() === name.toUpperCase();
      });
      if (names.length >= 1) {
        res.status(202).send(names);
      } else if (names.length < 1) {
        errorCode = 422;
        throw new Error("Usuário não encontrado.");
      }
    }
  } catch (e: any) {
    res.status(errorCode).send(e.message);
  }
});


app.post("/Usuarios", (req, res) => {
    let errorCode: number = 400
    try {
    const { id, name, email, role, age } = req.body;

    if (!id || !name || !email || !role || !age) {
      errorCode = 422;
      throw new Error("Verifique se todos os dados estão preenchidos")
    }

    const newUsuario: Usuario = {
      id,
      name,
      email,
      role,
      age,
    }

    Usuarios.push(newUsuario);
    res.status(201).send("Usuário cadastrado com sucesso!");

  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
})


app.put("/Usuarios/alterarUsuario", (req, res) => {
    const id = Number(req.query.id)
    let errorCode = 400
    try {
        if (!req.body.name) {
          errorCode = 422;
          throw new Error("Verifique se todos os dados estão preenchidos")
        }

        let alterarUsuario = Usuarios.filter((Usuario) => Usuario.id === id).map((Usuario) => {
        return ( Usuario = {
                id: id,
                name: req.body.name + "- ALTERADO",
                email: Usuario.email,
                role: Usuario.role,
                age: Usuario.age
            })
        })

        Usuarios.push(alterarUsuario[0]);
        res.status(201).end;

      } catch (error: any) {
        res.status(errorCode).send(error.message);
      }
})

app.patch("/Usuarios/alterarNome", (req, res) => {
    const id = Number(req.query.id)
    let errorCode = 400
    try {
        if (!req.body.name) {
          errorCode = 422;
          throw new Error("Verifique o nome do usuario")
        }

        let altUsuario = Usuarios.filter((Usuario) => Usuario.id === id).map((Usuario) => {
        return ( Usuario = {
                id: id,
                name: req.body.name + "- REALTERADO",
                email: Usuario.email,
                role: Usuario.role,
                age: Usuario.age
            })
        })

        Usuarios.push(altUsuario[0]);
        res.status(201).end;

      } catch (error: any) {
        res.status(errorCode).send(error.message);
      }
})



const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
