import React from 'react'
import DeleteButtons from '../../UI/DeleteButton'
import RoundButtons from '../../UI/RoundButtons'
import { Item, Text } from './TodoItemStyled'

function TodoItem() {
  return (
    <Item>
      <RoundButtons />
      <Text>Some Li</Text>
      <DeleteButtons />
    </Item>
  )
}

export default TodoItem
