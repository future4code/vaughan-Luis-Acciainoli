type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
  }


export const users: User[] = [
    {
      "id": 1,
      "name": "Pedro",
      "phone": "5521971318436",
      "email": "pedro@gmail.com",
      "website": "livelove.net"
    },
    {
        "id": 2,
        "name": "Peter",
        "phone": "55219121318436",
        "email": "peter@gmail.com",
        "website": "dingdong.com"
      },
      {
        "id": 3,
        "name": "Petera",
        "phone": "552123121318436",
        "email": "petera@gmail.com",
        "website": "hellyeh.ind"
      },
      {
        "id": 4,
        "name": "Junior",
        "phone": "55931121318436",
        "email": "junior@gmail.com",
        "website": "junin.gov"
      },
      {
        "id": 4,
        "name": "Constante",
        "phone": "5223123121318436",
        "email": "const@gmail.com",
        "website": "js.com.br"
      },
]


type Post = {
    id: number,
    title: string,
    body: string,
    userId: number 
  }


  export const posts: Post[] = [
    {
      "id": 1,
      "title": "Qui placeat doloribus ut optio iure et maiores quas.",
      "body": "Vel aliquid expedita ea quis omnis est aliquid perspiciatis et sint quos.",
      "userId": 1
    },
    {
      "id": 2,
      "title": "Id veniam illo in consequuntur adipisci aut aliquid quis aut quod internos.",
      "body": "Qui ducimus tempora aut dolore animi aut natus nihil id voluptatum laudantium",
      "userId": 2
    },
    {
      "id": 3,
      "title": "Est voluptates tempora in aspernatur laudantium et quae quidem id obcaecati blanditiis",
      "body": "Qui voluptatem iure id eveniet maiores sed dolor officia ea animi ducimus.",
      "userId": 3
    },
    {
      "id": 4,
      "title": "Est saepe ipsam et Quis autem id commodi aliquid.",
      "body": " Aut ipsam cumque ab illum saepe et repellendus assumenda.",
      "userId": 4
    },
    {
      "id": 5,
      "title": "Hic suscipit quasi 33 voluptate magni et fuga debitis sit quia ipsam.",
      "body": "Quo aperiam harum et galisum mollitia qui maxime rerum ut iure praesentium ut repudiandae cumque.",
      "userId": 5
    },
]