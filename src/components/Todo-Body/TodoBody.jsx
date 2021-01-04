import React from 'react'
import TodoItems from '../TodoItems/TodoItems'
import { BodyContainer } from './TodoBody-Styled'

function TodoBody() {
  return (
    <BodyContainer>
      <TodoItems />
    </BodyContainer>
  )
}

export default TodoBody
