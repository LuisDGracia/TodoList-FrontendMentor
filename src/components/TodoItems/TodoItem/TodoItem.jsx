import React from 'react'
import DeleteButtons from '../../UI/DeleteButton'
import RoundButtons from '../../UI/RoundButtons'
import { Item, Text } from './TodoItemStyled'

function TodoItem({ value, checked }) {

  let newCheck = checked;

  const checkHandler = ( event ) =>{
  }

  const onChangeHandler = ( event ) => {
    newCheck = document.getElementById(value).checked
  }

  return (
    <Item>
      <RoundButtons checked={newCheck} connect={value} clicked={ checkHandler } change={onChangeHandler} />
      <Text>{value}</Text>
      <DeleteButtons />
    </Item>
  )
}

export default TodoItem
