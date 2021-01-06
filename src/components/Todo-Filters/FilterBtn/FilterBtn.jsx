import React from 'react'
import { FilterText, FilterOptn, FilterContainer } from './StyledBtn'

function FilterBtn({ action, clicked }){
  return(
    <FilterContainer >
      <FilterOptn type="radio" name="Option" id={action} />
      <FilterText htmlFor={action} onClick={ clicked } >
        {action}
      </FilterText>
    </FilterContainer>
  )
}

export default FilterBtn
