import React from 'react'
import FilterBtn from '../FilterBtn/FilterBtn'
import { FilterGroup } from './GroupStyled'

function FiltersGroup({ todo, setTodo }) {

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
  
      default: break;
    }
  }

  return (
    <FilterGroup >
      <FilterBtn action="All" clicked={ () => filterHandler("All") } />
      <FilterBtn action="Active" clicked={ () => filterHandler("Active") } />
      <FilterBtn action="Completed" clicked={ () => filterHandler("Completed") } />
    </FilterGroup>
  )
}

export default FiltersGroup
