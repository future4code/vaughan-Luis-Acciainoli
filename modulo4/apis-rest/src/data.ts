export type Usuario = {
    id: number,
    name: string,
    email: string,
    role: string,
    age: number
}

enum Role {
    ADMIN = "admin",
    USER = "user"
}

export let Usuarios: Usuario[] = [
    {
        id: 1,
        name: "Pedro",
        email: "pedro.acciainoli@gmail.com",
        role: Role.ADMIN,
        age: 28
    },
    {
        id: 2,
        name: "Carlos",
        email: "carlos@gmail.com",
        role: Role.USER,
        age: 23
    },
    {
        id: 3,
        name: "Alex",
        email: "Alex@gmail.com",
        role: Role.USER,
        age: 21
    },
    {
        id: 4,
        name: "Julia",
        email: "Julia@gmail.com",
        role: Role.ADMIN,
        age: 25
    }
]
