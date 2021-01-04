import React from 'react'
import RoundButtons from '../UI/RoundButtons'
import { NewContainer, NewInput } from './NewTodoStyled'

function NewTodo() {
  return (
    <NewContainer >
      <RoundButtons />
      <NewInput type="text" placeholder="Create a new todo..." />
    </NewContainer>
  )
}

export default NewTodo
