import React from 'react'
import styled from 'styled-components';

function RoundButtons() {
  return (
    <DoneBtn for="Done">
      <DoneCheck type="checkbox" name="done" id="Done" />
    </DoneBtn>
  )
}

const DoneBtn = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50px;
`;

const DoneCheck = styled.input`
  visibility: hidden;
  position: absolute;
`;

export default RoundButtons;
