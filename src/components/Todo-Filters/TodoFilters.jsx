import React from 'react'
import { FiltersContainer, ItemsLeft, ClearBtn } from './FiltersStyled'
import FiltersGroup from './FiltersGroup/FiltersGroup'

function TodoFilters({ todo, setTodo }) {

  const filterHandler = ( action ) => {

    switch( action ){
      case "Clear":

        let clearTodos = todo

        let newClearTodos = clearTodos.filter( todo => {

          if( todo.done !== true ){
            return todo
          }else return null

        })

        setTodo([ ...newClearTodos ])

        break;

      default: break;
    }

  }

  return (
    <FiltersContainer >
      <ItemsLeft >{ todo.length } items left</ItemsLeft>
      <FiltersGroup todo={todo} setTodo={setTodo} />
      <ClearBtn onClick={ () => filterHandler("Clear") } >Clear Completed</ClearBtn>
    </FiltersContainer>
  )
}

export default TodoFilters
