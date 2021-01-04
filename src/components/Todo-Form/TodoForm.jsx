import React, { Fragment } from 'react'
import NewTodo from '../New-Todo/NewTodo'
import TodoBody from '../Todo-Body/TodoBody'
import TodoFilters from '../Todo-Filters/TodoFilters'
import TodoHeader from '../Todo-Header/TodoHeader'
import { Container } from './Todo-FormStyled'

function TodoForm() {
  return (
    <Fragment>
      <Container>
        <TodoHeader />
        <NewTodo />
        <TodoBody />
        <TodoFilters />
      </Container>
    </Fragment>
  )
}

export default TodoForm
