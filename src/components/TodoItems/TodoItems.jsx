import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import { TodoList } from './TodoItemsStyled'

function TodoItems({ todos, setTodo }) {

  const onChangeHandler = ( checked, value ) =>{
    let newTodos = todos
    let todoPos = todos.findIndex( id => id.value === value );

    if( todoPos !== -1 ){
      let temp = todos[todoPos];
      temp.done = !checked;

      newTodos[todoPos] = temp
      setTodo([ ...newTodos ])
    }
  }

  const deleteTodoHandler = ( status, value ) => {
    let newTodos = todos
    let todoPos = todos.findIndex( todo => todo.value === value )

    newTodos.splice(todoPos, 1)

    setTodo([ ...newTodos ])
  }

  return (
    <TodoList>
      {
        todos.map( todo => {
          return (
            <TodoItem 
              value={todo.value} 
              checked={todo.done} 
              key={todo.value} 
              change={ () => onChangeHandler( todo.done, todo.value ) }
              click = { () => deleteTodoHandler( todo.done, todo.value ) } />
          )
        })
      }
    </TodoList>
  )
}

export default TodoItems
