import React from "react";
import { todosData } from "../data";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import NewTodo from "./NewTodo";
import TodoSummary from "./TodoSummary";

export const Todo = () => {
  const [todo, setTodo] = useState(todosData);
  console.log(todo);

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

  const handleSummary = () => {
    const alma = todo.filter((obj)=>obj.done==true)
    return [todo.length, alma.length]
  }

  return (
    <>
    <span style={{fontSize:'xx-large'}} onClick={()=>allClear()}><FaRegTrashAlt /></span>
      <div style={{width:'100%'}}>
        <NewTodo handleAdd={handleAdd}/>
        <ListGroup>
          {todo.map((obj) => (
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
        <TodoSummary handleSummary={handleSummary}/>
      </div>
    </>
  );


};