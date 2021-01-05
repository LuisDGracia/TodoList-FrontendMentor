import React from 'react'
import DeleteButtons from '../../UI/DeleteButton'
import RoundButtons from '../../UI/RoundButtons'
import { Item, Text } from './TodoItemStyled'

function TodoItem({ value, checked, change, click, id }) {
  return (
    <Item>
      <RoundButtons checked={checked} connect={id} change={change} />
      <Text done={checked} >{value}</Text>
      <DeleteButtons click={click} />
    </Item>
  )
}

export default TodoItem
