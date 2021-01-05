import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import { TodoList } from './TodoItemsStyled'

function TodoItems({ todos, setTodo }) {

  const onChangeHandler = ( id, checked ) =>{
    let newTodos = todos
    let todoPos = todos.findIndex( todo => todo.id === id );

    if( todoPos !== -1 ){
      let temp = todos[todoPos];
      temp.done = !checked;

      newTodos[todoPos] = temp
      setTodo([ ...newTodos ])
    }
  }

  const deleteTodoHandler = ( id ) => {
    let newTodos = todos
    let todoPos = todos.findIndex( todo => todo.id === id )

    newTodos.splice(todoPos, 1)

    setTodo([ ...newTodos ])
  }

  return (
    <TodoList>
      {
        todos.map( todo => {
          if( todo.visible ){
            return (
              <TodoItem 
                value={todo.value} 
                checked={todo.done} 
                key={todo.id}
                id={todo.id}
                change={ () => onChangeHandler( todo.id, todo.done ) }
                click = { () => deleteTodoHandler( todo.id ) } />
            )
          }else return <></>
        })
      }
    </TodoList>
  )
}

export default TodoItems
