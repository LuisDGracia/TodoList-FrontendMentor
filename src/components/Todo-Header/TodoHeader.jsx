import React from 'react'
import { Checkbox, HeaderContainer, HeaderTitle, ThemeButton, ThemeChanger } from './TodoHeaderStyled'
import sun from '../../assets/svg/icon-sun.svg'

function TodoHeader() {
  return (
    <HeaderContainer>
      <HeaderTitle >TODO</HeaderTitle>
      <ThemeChanger for="themer" >
        <ThemeButton src={ sun } />
        <Checkbox type="checkbox" id="themer" name="HeaderCheckbox" />
      </ThemeChanger>
    </HeaderContainer>
  )
}

export default TodoHeader
