import React, { useContext } from 'react'
import { Checkbox, HeaderContainer, HeaderTitle, ThemeButton, ThemeChanger } from './TodoHeaderStyled'
import sun from '../../assets/svg/icon-sun.svg'
import moon from '../../assets/svg/icon-moon.svg'
import { AppContext } from '../../AppProvider'

function TodoHeader() {

  const { toggleTheme, themeMode } = useContext(AppContext)

  const themeHandler = () => {
    toggleTheme()
  }

  return (
    <HeaderContainer>
      <HeaderTitle >TODO</HeaderTitle>
      <ThemeChanger htmlFor="themer" >
        <ThemeButton src={ themeMode === 'lightTheme'? moon : sun } />
        <Checkbox 
          type="checkbox" 
          id="themer" 
          name="HeaderCheckbox"
          defaultChecked= { themeMode === 'lightTheme'? true : false }
          onChange={ () => themeHandler() } />
      </ThemeChanger>
    </HeaderContainer>
  )
}

export default TodoHeader
