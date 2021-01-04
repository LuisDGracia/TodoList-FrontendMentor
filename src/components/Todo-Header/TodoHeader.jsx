import React from 'react'
import { Checkbox, HeaderContainer, HeaderTitle, ThemeChanger } from './TodoHeaderStyled'

function TodoHeader() {
  return (
    <HeaderContainer>
      <HeaderTitle >TODO</HeaderTitle>
      <ThemeChanger for="themer" >
        Some button
        <Checkbox type="checkbox" id="themer" name="HeaderCheckbox" />
      </ThemeChanger>
    </HeaderContainer>
  )
}

export default TodoHeader
