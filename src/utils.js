import axios from "axios"
const baseUrl = "http://localhost:8001/"

export const getTodos = async (setTodo)=> {
    const resp = await axios.get(baseUrl+"todos")
    setTodo(resp.data)
}

export const deleteTodo = async (id) => {
    await axios.delete(`${baseUrl}todos/${id}`)
}

export const deleteAllTodo = async (id) => {
    await axios.delete(`${baseUrl}todos/`)
}

export const addTodo = async (desc) => {
    await axios.post(baseUrl +"todos", {desc})
}

export const patchTodo = async (id, done) => {
    await axios.patch(`${baseUrl}todos/${id}`, {done: !done})
}

//export const summaryTodo = async (todo) => {
//    console.log("ALMAAJDHGAHDGHGD");
//    console.log(todo);
//}