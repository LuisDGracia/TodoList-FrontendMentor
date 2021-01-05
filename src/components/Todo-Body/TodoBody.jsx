import React from 'react'
import TodoItems from '../TodoItems/TodoItems'
import { BodyContainer } from './TodoBody-Styled'

function TodoBody({ todo, setTodo }) {
  return (
    <BodyContainer>
      <TodoItems todos={ todo } setTodo={ setTodo } />
    </BodyContainer>
  )
}

export default TodoBody
