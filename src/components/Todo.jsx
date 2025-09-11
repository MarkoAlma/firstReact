import React from "react";
//import { todosData } from "../data";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import NewTodo from "./NewTodo";
import TodoSummary from "./TodoSummary";
import { useEffect } from "react";
import { addTodo, deleteAllTodo, deleteTodo, getTodos, patchTodo} from "../utils";

export const Todo = () => {
  const [todo, setTodo] = useState(null);
  console.log(todo);

  useEffect(()=>{
    getTodos(setTodo)
  },[])

  /*
  const handleDelete = (id)=> {
    setTodo(prev=>prev.filter(obj => obj.id != id))
  }

  const checkMark = (id)=> {
    setTodo(prev=>prev.map((obj) => obj.id != id ? obj : {...obj,done:!obj.done}))
  }

  const allClear = ()=> {
    setTodo(prev => prev.filter(obj  => obj.id != obj.id))
  }

  const handleAdd = (desc) => {
    const uj = {id:Date.now(), desc, done:false}
    setTodo(prev=>[...prev,uj])
  }
  */
  const handleSummary = () => {
    const alma = todo.filter((obj)=>obj.done==true)
    return [todo.length, alma.length]
  }
    

  const handleDelete = async (id)=> {
     await deleteTodo(id)
     getTodos(setTodo)
  }

    const allClear = async ()=> {
     await deleteAllTodo()
     getTodos(setTodo)
  }

  const handleAdd = async(desc) => {
    await addTodo(desc)
    getTodos(setTodo)
  }

    const checkMark = async(id, done) => {
    await patchTodo(id)
    getTodos(setTodo)
  }

  //const handleSummary = async()=> {
  //  await summaryTodo(todo)
  //}

  return (
    <>
    <span style={{fontSize:'xx-large'}} onClick={()=>allClear()}><FaRegTrashAlt /></span>
      <div style={{width:'100%'}}>
        <NewTodo handleAdd={handleAdd}/>
        <ListGroup>
          {todo && todo.map((obj) => (
            <ListGroupItem key={obj.id}>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'larger'}}>
              <div style={{textDecoration: obj.done ?'line-through':'none', display:'flex', justifyContent:'center', alignItems:'center'}}>{obj.desc}</div>
              <div>
                <span style={{color:'darkred'}} onClick={()=>handleDelete(obj.id)}><FaRegTrashAlt /></span>
                <span style={{paddingLeft:'15px', color: obj.done ?'green':'gray'}} onClick={()=>checkMark(obj.id)}><IoCheckmarkDoneSharp /></span>
              </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
        {todo && <TodoSummary handleSummary={handleSummary}/>}
      </div>
    </>
  );


};