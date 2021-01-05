import React from 'react'
import RoundButtons from '../UI/RoundButtons'
import { NewContainer, NewInput } from './NewTodoStyled'

function NewTodo({ todo, setTodo }) {

  const addTodo = ( event ) => {
    event.preventDefault();

    const todoValue = document.getElementById('newTodo').value

    const Todo = {
      done: false,
      value: todoValue
    }

    setTodo([ ...todo, Todo ])
  }

  return (
    <NewContainer >
      <RoundButtons clicked={ addTodo } connect="NewTodo" />
      <NewInput type="text" placeholder="Create a new todo..." id="newTodo" />
    </NewContainer>
  )
}

export default NewTodo
