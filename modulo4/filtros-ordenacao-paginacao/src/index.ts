import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getUsers } from "./endpoints/getUsers";

app.get("/recipes", getAllRecipes)

app.get("/users", getUsers)
