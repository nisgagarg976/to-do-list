import React from 'react'

const Todoitem = ({todo, onDelete}) => {
  return (
    <>
    <div className='container'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <br /> <hr /> <br />
    </div>
    </>
  )
}

export default Todoitem

