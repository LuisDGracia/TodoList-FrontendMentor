import React, { Fragment, useState } from 'react'
import NewTodo from '../New-Todo/NewTodo'
import TodoBody from '../Todo-Body/TodoBody'
import TodoFilters from '../Todo-Filters/TodoFilters'
import TodoHeader from '../Todo-Header/TodoHeader'
import { Container, TodosContainer } from './Todo-FormStyled'

function TodoForm() {

  const [todo, setTodo] = useState([{ id: 0, done: false, value: "First Todo", visible: true }])

  return (
    <Fragment>
      <Container>
        <TodoHeader />
        <NewTodo  todo={ todo } setTodo={ setTodo } />
        <TodosContainer >
          <TodoBody todo={ todo } setTodo={ setTodo } />
          <TodoFilters todo={ todo } setTodo={ setTodo } />
        </TodosContainer>
      </Container>
    </Fragment>
  )
}

export default TodoForm
