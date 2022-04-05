import express from "express";
import { produtos, Produto } from "./data";

const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
    res.status(200).send("A API está funcional");
});

app.post("/criaProduto", (req, res) => {
    try {
        let newProduto = {
            id: Date.now().toString(),
            name: req.body.name,
            price: req.body.price,
        };
        produtos.push(newProduto);
        let updatedprodutos = produtos.map((item) => {
            return {
                id: item.id,
                name: item.name,
                price: item.price,
            };
        });

        if (!newProduto.name) {
            throw new Error("Insira o nome do produto")
        } else if (!newProduto.price) {
            throw new Error("Insira o valor do produto")
        } else if (!newProduto.name && !newProduto.price) {
            throw new Error("Verifique os campos do produto")
        }
        if (typeof newProduto.name !== "string") {
            throw new Error("O nome do produto deve ser somente caracteres")
        }
        if (typeof newProduto.price !== "number") {
            throw new Error("O valor do produto deve ser um numero")
        }
        if (newProduto.price <= 0) {
            throw new Error("O valor do produto não pode ser menor ou igual a zero")
        }
        res.status(200).send(updatedprodutos)
    }

    catch (e: any) {
        switch (e.message) {
            case "Insira o nome do produto":
                res.status(422).send(e.message)
                break
            case "Insira o valor do produto":
                res.status(422).send(e.message)
                break
            case "Verifique os campos do produto":
                res.status(422).send(e.message)
                break
            case "O nome do produto deve ser somente caracteres":
                res.status(422).send(e.message)
                break
            case "O valor do produto deve ser um numero":
                res.status(422).send(e.message)
                break
            case "O valor do produto não pode ser menor ou igual a zero":
                res.status(422).send(e.message)
            default:
                res.status(500).send(e.message)
                break
        }
    }
});


app.get("/allProdutos", (req, res) => {
    let search = req.query.search

    if(!search) {
        let allProdutos = produtos.map((item) => {
            return {
                id: item.id,
                name: item.name,
                price: item.price,
            };
        });
        res.status(200).send(allProdutos);
    }

    if (search !== undefined) {
        let Produto = produtos.filter((item) => {
            return item.name === search
        })
        console.log(Produto[0])
        res.status(200).send(Produto[0]);
    }
});


app.put("/updateProduto/:ProdutoId", (req, res) => {
   try {
    let ProdutoId = req.params.ProdutoId;
    let ProdutoFound = false;

    for(let i=0; i<produtos.length; i++) {
        if (produtos[i].id === ProdutoId) {
            ProdutoFound = true
        }
    }
    if (!ProdutoFound) {
        throw new Error("Produto não encontrado!")
    }
    let Produto = produtos
        .filter((item) => {
            return item.id === ProdutoId; 
        })
        .map((item) => {
            return {
                id: item.id,
                name: item.name,
                price: req.body.price,
            };
        });

    let allProdutos = produtos.map((item) => {
        if (Produto[0].id !== item.id) {
            return { ...item };
        } else {
            return {
                ...item,
                price: Produto[0].price,
            };
        }
    });

    if(!req.body.price) {
        throw new Error("O valor do produto deve ser enviado")
    } else if (typeof req.body.price !== "number") {
        throw new Error("O valor do produto deve ser um numero")
    } else if(req.body.price <= 0) {
        throw new Error("O valor do produto deve ser maior que zero")
    }

    res.status(200).send(allProdutos);
}
catch (e: any){
    switch (e.message) {
        case "Produto não encontrado!":
            res.status(422).send(e.message)
            break
        case "O valor do produto deve ser enviado":
            res.status(422).send(e.message)
            break
        case "O valor do produto deve ser um numero":
            res.status(422).send(e.message)
            break
        case "O valor do produto deve ser maior que zero":
            res.status(422).send(e.message)
        default:
            res.status(500).send(e.message)
            break
    }
}
});


app.delete("/delete/:ProdutoId", (req, res) => {
    try {
    const ProdutoId = req.params.ProdutoId
    let ProdutoEncontrado = false;

    for(let i=0; i<produtos.length; i++) {
        if (produtos[i].id === ProdutoId) {
            ProdutoEncontrado = true
        }
    }

    if (!ProdutoEncontrado) {
        throw new Error("Produto não encontrado. Verifique o id.")
    }

    const deleteProduto = produtos.filter((item) => {
        return item.id !== ProdutoId
    })

    res.status(220).send(deleteProduto)
}
catch(e: any){
    if (e.message === "Produto não encontrado. Verifique o id.") {
            res.status(422).send(e.message)
    } else {
        res.status(500).send(e.message)
    }
}
})

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        console.log(`Server ON Port 3000`);
    } else {
        console.error(`Error ao iniciar o servidor.`);
    }
});