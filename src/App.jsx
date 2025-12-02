import { useState } from 'react'
import './App.css'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList';
import {Routes,Route} from 'react-router-dom'
import TodoDetails from './Components/TodoDetails';

function App() {
const[listTodo,setListTodo]=useState([]);
let addList=(inputText)=>{
  if(inputText!==""){
  setListTodo([...listTodo,inputText])}
}
const deleteListItem=(key)=>{
   setListTodo(listTodo.filter((_, index)=> index !== key))
}
  return (
    <>
     <Routes>
       <Route path="/" element={
     <div className="main-container">
      
      <div className="center-container">
        <TodoInput addList={addList}/>
         <h1 className="app-heading">TODO</h1>
         <hr />
       {listTodo.map((listItem,i)=>{
        return(
         < TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
       })}
          </div>
     </div>}
   />
        <Route path="/todo/:id" element={<TodoDetails list={listTodo} />} />

       
   
     </Routes>
    </>
  )
}

export default App
