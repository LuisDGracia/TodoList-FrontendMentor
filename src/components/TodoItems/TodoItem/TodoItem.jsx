import React from 'react'
import DeleteButtons from '../../UI/DeleteButton'
import RoundButtons from '../../UI/RoundButtons'
import { Item } from './TodoItemStyled'

function TodoItem() {
  return (
    <Item>
      <RoundButtons />
      Some li
      <DeleteButtons />
    </Item>
  )
}

export default TodoItem
