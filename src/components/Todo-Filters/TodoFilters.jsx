import React from 'react'
import { FilterOptn, FiltersContainer, ItemsLeft, ClearBtn } from './FiltersStyled'

function TodoFilters() {
  return (
    <FiltersContainer >
      <ItemsLeft >x items left</ItemsLeft>
      <FilterOptn type="radio" name="Option" id="FilterOptn" />
      <FilterOptn type="radio" name="Option" id="FilterOptn" />
      <FilterOptn type="radio" name="Option" id="FilterOptn" />
      <ClearBtn >Clear Completed</ClearBtn>
    </FiltersContainer>
  )
}

export default TodoFilters
