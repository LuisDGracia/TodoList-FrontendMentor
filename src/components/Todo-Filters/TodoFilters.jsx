import React from 'react'
import { FilterOptn, FiltersContainer, ItemsLeft, ClearBtn } from './FiltersStyled'

function TodoFilters() {
  return (
    <FiltersContainer >
      <ItemsLeft >x items left</ItemsLeft>
      <FilterBtn action="All" />
      <FilterBtn action="Active" />
      <FilterBtn action="Completed" />
      <ClearBtn >Clear Completed</ClearBtn>
    </FiltersContainer>
  )
}

function FilterBtn({ action }){
  return(
    <label htmlFor={action} >
      <p style={{"display": "inline-block", "color": "white" }} >{action}</p>
      <FilterOptn type="radio" name="Option" id={action} />
    </label>
  )
}

export default TodoFilters
