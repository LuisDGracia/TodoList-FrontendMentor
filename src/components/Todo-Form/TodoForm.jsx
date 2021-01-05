import React, { Fragment, useState } from 'react'
import NewTodo from '../New-Todo/NewTodo'
import TodoBody from '../Todo-Body/TodoBody'
import TodoFilters from '../Todo-Filters/TodoFilters'
import TodoHeader from '../Todo-Header/TodoHeader'
import { Container } from './Todo-FormStyled'

function TodoForm() {

  const [todo, setTodo] = useState([{ id: 0, done: false, value: "First Todo", visible: true }])

  return (
    <Fragment>
      <Container>
        <TodoHeader />
        <NewTodo  todo={ todo } setTodo={ setTodo } />
        <div 
          style={{ 
            "box-shadow": "0px 00px 100px -10px rgba( 0, 0, 0, 0.5)", 
            borderRadius: "0px 0px 5px 5px" }}>
          <TodoBody todo={ todo } setTodo={ setTodo } />
          <TodoFilters todo={ todo } setTodo={ setTodo } />
        </div>
      </Container>
    </Fragment>
  )
}

export default TodoForm
