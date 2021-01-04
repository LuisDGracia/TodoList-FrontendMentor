import React from 'react'
import styled from 'styled-components';

function RoundButtons({ clicked, connect, checked, change }) {
  return (
    <div>
        <DoneCheck 
          type="checkbox" 
          name="done" 
          id={connect}
          defaultChecked={checked} 
          onChange={ change } />
      <DoneBtn htmlFor={connect} onClick={ clicked } defaultChecked={checked} className="someone" />
    </div>
  )
}

const DoneBtn = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid hsl(0, 0%, 36%);
  border-radius: 50px;

`;

// #57ddff
// #c058f3

const DoneCheck = styled.input`
  position: absolute;
  visibility: hidden;

  &:checked + .someone{
    border: none;
    background: linear-gradient(0.35turn, #57ddff, #c058f3);
  }
`;

export default RoundButtons;
