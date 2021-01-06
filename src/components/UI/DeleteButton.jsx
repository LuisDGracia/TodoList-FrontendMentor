import React from 'react'
import styled from 'styled-components';
import deleteImg from '../../assets/svg/icon-cross.svg'

function DeleteButtons({ click }) {
  return (
    <DeleteBtn htmlFor="Delete" >
      <DeleteIcon src= { deleteImg } onMouseDown={click} />
      <DeleteCheck type="checkbox" name="done" id="Delete" />
    </DeleteBtn>
  )
}

const DeleteBtn = styled.label`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

const DeleteCheck = styled.input`
  visibility: hidden;
  position: absolute;
`;

const DeleteIcon = styled.img`
  width: 20px;
`

export default DeleteButtons;
