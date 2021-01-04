import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import { TodoList } from './TodoItemsStyled'

function TodoItems({ todos }) {
  return (
    <TodoList>
      {
        todos.map( todo => {
          return <TodoItem value={todo.value} checked={todo.done} key={todo.value} />
        })
      }
    </TodoList>
  )
}

export default TodoItems
