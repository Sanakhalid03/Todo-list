import { Link } from "react-router-dom"
function TodoList(props) {
  return (
    <>
    <div className="list-container">
  <li className='list-item'>
 <Link
  to={`/todo/${props.index}`}
>
  {props.item}
</Link>
    <span className='icons ' onClick={(e)=>{
        props.deleteItem(props.index)
    }}><i className="fa-solid fa-trash icon-delete"></i>
</span>
   </li>
   </div>
 
  
   </>
  )
}

export default TodoList