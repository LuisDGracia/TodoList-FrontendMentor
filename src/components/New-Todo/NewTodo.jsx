import React, { useEffect } from 'react'
import RoundButtons from '../UI/RoundButtons'
import { NewContainer, NewInput } from './NewTodoStyled'

function NewTodo({ todo, setTodo }) {

  useEffect(() => {
    window.addEventListener('keyup', addTodo)
    return () => {
      window.removeEventListener('keyup', addTodo)
    }
  })

  const addTodo = ( event ) => {
    event.preventDefault();
    
    let todoValue = document.getElementById('newTodo').value
    
    if( todoValue.replace(" ", '')  !== '' && event.keyCode === 13 ){
      const newId = Math.floor( Math.random() * 10000000 )
      
      const Todo = {
        id: newId,
        done: false,
        value: todoValue,
        visible: true,
      };
      setTodo([ ...todo, Todo ]);
      document.getElementById('newTodo').value = '';
    }
  }

  return (
    <NewContainer >
      <RoundButtons clicked={ addTodo } connect="NewTodo" />
      <NewInput type="text" placeholder="Create a new todo..." id="newTodo" />
    </NewContainer>
  )
}

export default NewTodo
