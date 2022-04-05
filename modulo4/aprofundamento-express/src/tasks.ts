export type Task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  };


export const toDO: Task[] = [
    {
      userId: 1,
      id: 1,
      title: "arrumar cama",
      completed: false,
    },
    {
      userId: 2,
      id: 2,
      title: "escovar dentes",
      completed: true,
    },
    {
      userId: 2,
      id: 3,
      title: "fazer café",
      completed: false,
    }
  ];
  