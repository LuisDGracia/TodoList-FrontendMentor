import React from 'react'
import { NewContainer, NewInput } from './NewTodoStyled'

function NewTodo() {
  return (
    <NewContainer >
      <NewInput type="text" placeholder="Create a new todo..." />
    </NewContainer>
  )
}

export default NewTodo
