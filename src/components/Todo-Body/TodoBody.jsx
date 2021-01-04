import React from 'react'
import TodoItems from '../TodoItems/TodoItems'
import { BodyContainer } from './TodoBody-Styled'

function TodoBody({ todo }) {
  return (
    <BodyContainer>
      <TodoItems todos={todo} />
    </BodyContainer>
  )
}

export default TodoBody
