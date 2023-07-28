import React, { useReducer, useState } from 'react'

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo'
}

function reducer(todos, action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
    default:
      return todos
  }
}

function newTodo(name){
  return {id: Date.now(), name: name, complete: false}
}

const Menu = () => {
  const [todos, dispatch] = useReducer(reducer, []) // pass an initial state
  const [name,setName] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload: {name:name}})
    setName('')
  }

  console.log(todos)
  return (
    <div>
      {/* Menu */}
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      </form>
      {/* Render todos */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default Menu