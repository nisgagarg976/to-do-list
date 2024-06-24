import React from 'react'
import Todoitem from '../MyComponents/Todoitem';
// import { colors } from 'aframe';

const Todos = (props) => {
let myStyle = {
  minHeight : "70vh"
}

  return (
    <div className='container' style={myStyle}>
      <h3 className=" my-3">My Todos List</h3>
      {/* <Todoitem todo={props.todos[0]}/> */}

      {props.todos.length===0? <p>No Todos to display</p> :
      props.todos.map((todo)=>{
         return <Todoitem todo={todo} onDelete={props.onDelete} key={todo.sno} />
      })
    }
    </div>
  )
}

export default Todos
