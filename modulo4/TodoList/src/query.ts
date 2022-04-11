import connection from "./connection";
import { v4 as uuidv4 } from 'uuid';


export const createUser = async (name: string, nickname: string, email: string): Promise<void> => {

    await connection("UserTodo")
        .insert({
            id: uuidv4(),
            name: name,
            nickname: nickname,
            email: email
        })

}

export const createTask = async  (title: string, description: string, limitDate: string): Promise<any> => {
    await connection("TaskTodo")
        .insert({
            id: uuidv4(),
            title: title,
            description: description,
            limit_date: limitDate,
        })
}

export const UserHasTask = async  (UserTodo_id: string, TaskTodo_id: string): Promise<any> => {
    await connection("UserTodo_has_TaskTodo")
        .insert({
            UserTodo_id: UserTodo_id,
            TaskTodo_id: TaskTodo_id,
        })
    }

export const getUserById = async (id: string): Promise<any> => {
    const result = await connection("UserTodo")
        .select("id", "nickname")
        .from("UserTodo")
        .where("id", id)

    return result
}

export const getTaskById = async (id: string): Promise<any> => {

}




export const updateUser = async (id: string, name?: string, nickname?: string): Promise<void> => {

    await connection("UserTodo")
        .update({
            name: name,
            nickname: nickname
        })
        .where("id", id)
}



