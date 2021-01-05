import React from 'react';
import styled from 'styled-components';
import check from '../../assets/svg/icon-check.svg';

function RoundButtons({ clicked, connect, checked, change }) {
  return (
    <div style={{ "position": "relative" }} >
      <DoneCheck 
        type="checkbox" 
        name="done" 
        id={connect}
        defaultChecked={checked} 
        onChange={ change } />
      <DoneBtn htmlFor={connect} onClick={ clicked } />
    </div>
  )
}

const DoneBtn = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid hsl(0, 0%, 36%);
  border-radius: 50px;
  &:after{
    position: absolute;
    left: 5px;
    top: 0px;
  }
`;

const DoneCheck = styled.input`
  position: absolute;
  visibility: hidden;

  &:checked + ${DoneBtn}{
    border: none;
    background: linear-gradient(0.35turn, #57ddff, #c058f3);
  }

  &:checked + ${DoneBtn}:after{
    content: url(${check});
  }
`;

export default RoundButtons;
