import React from 'react'
import styled from 'styled-components';

function RoundButtons({ clicked }) {
  return (
    <DoneBtn htmlFor="Done" onClick={ clicked } >
      <DoneCheck type="checkbox" name="done" id="Done" />
    </DoneBtn>
  )
}

const DoneBtn = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid hsl(0, 0%, 36%);
  border-radius: 50px;
`;

const DoneCheck = styled.input`
  visibility: hidden;
  position: absolute;
`;

export default RoundButtons;
