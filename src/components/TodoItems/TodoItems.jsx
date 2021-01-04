import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import { TodoList } from './TodoItemsStyled'

function TodoItems() {
  return (
    <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoList>
  )
}

export default TodoItems
