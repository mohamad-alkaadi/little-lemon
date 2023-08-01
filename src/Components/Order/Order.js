import React, {useState, useReducer} from 'react'

const actions = {
  increment: 'inc',
  decrement: 'dec'
}

function reducer(state, action){
  switch(action.type){
    case actions.increment:
      return {count: state.count + 1}
    case actions.decrement:
      return {count: state.count - 1}
    default:
      return state
  }
}
const Order = () => {
  const [state, dispatch] = useReducer(reducer, {count:0})

  const increase= () => {
    dispatch({type: actions.increment})
  }


  const decrease= () => {
    dispatch({type: actions.decrement})
  }
  return (
    <>
      <button onClick={decrease}>-</button>
      <span>{state.count}</span>
      <button onClick={increase}>+</button>

    </>
  )
}

export default Order