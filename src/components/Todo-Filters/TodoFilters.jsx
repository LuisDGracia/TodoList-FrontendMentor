import React from 'react'
import { FilterOptn, FiltersContainer, ItemsLeft, ClearBtn } from './FiltersStyled'

function TodoFilters({ todo, setTodo }) {

  const filterHandler = ( action ) => {

    switch( action ){
      case "All":
        let allTodos = todo

        allTodos.map( todo => {
          if( !todo.visible ){
            todo.visible = true
          }

          return todo
        })

        setTodo([ ...allTodos ])
        break;

      case "Active":

        let activeTodos = todo

        activeTodos.map( todo => {
          if( !todo.done ){
            todo.visible = true
          }else{
            todo.visible = false
          }

          return todo
        })

        setTodo([ ...activeTodos ])

        break;

      case "Completed":
         let completeTodos = todo

          completeTodos.map( todo => {
          if( todo.done ){
            todo.visible = true
          }else{
            todo.visible = false
          }

          return todo
        })

        setTodo([ ...completeTodos ])  

        break;
      
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
      <FilterBtn action="All" clicked={ () => filterHandler("All") } />
      <FilterBtn action="Active" clicked={ () => filterHandler("Active") } />
      <FilterBtn action="Completed" clicked={ () => filterHandler("Completed") } />
      <ClearBtn onClick={ () => filterHandler("Clear") } >Clear Completed</ClearBtn>
    </FiltersContainer>
  )
}

function FilterBtn({ action, clicked }){
  return(
    <label htmlFor={action} onClick={ clicked } >
      <p style={{"display": "inline-block", "color": "white" }} >{action}</p>
      <FilterOptn type="radio" name="Option" id={action} />
    </label>
  )
}

export default TodoFilters
