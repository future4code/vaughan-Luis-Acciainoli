import app from "./app";
import connection from "./connection";
import express, {Request, Response} from "express"


const searchActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }

  const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
  };


  const updateActorById = async (
      id: string,
      salary: number
      ): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

  const deleteActorById = async (
      id: string
      ): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

  const avgSalaryByGender = async (
      gender: string
      ): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });

    return result[0].average;
  };

  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActorsByGender(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


  app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateActorById(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActorById(req.params.id);
      res.status(200).send({
          message: "Excluido com sucesso",
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });