import React from 'react'
import DeleteButtons from '../../UI/DeleteButton'
import RoundButtons from '../../UI/RoundButtons'
import { Item, Text } from './TodoItemStyled'

function TodoItem({ value }) {
  return (
    <Item>
      <RoundButtons />
      <Text>{value}</Text>
      <DeleteButtons />
    </Item>
  )
}

export default TodoItem
