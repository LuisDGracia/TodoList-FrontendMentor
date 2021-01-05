import React from 'react'
import { FilterText, FilterOptn } from './StyledBtn'

function FilterBtn({ action, clicked, checked }){
  return(
    <FilterText htmlFor={action} onClick={ clicked } >
      {action}
      <FilterOptn type="radio" name="Option" id={action} checked={checked} />
    </FilterText>
  )
}

export default FilterBtn
