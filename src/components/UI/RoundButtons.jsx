import React from 'react'
import styled from 'styled-components';

function RoundButtons() {
  return (
    <DoneBtn>
      <DoneCheck type="checkbox" />
    </DoneBtn>
  )
}

const DoneBtn = styled.label``;

const DoneCheck = styled.input``;

export default RoundButtons;
