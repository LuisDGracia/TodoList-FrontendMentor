import styled from 'styled-components'

export const BodyContainer = styled.div`
  background-color: ${ ({ theme }) => theme.colors.BodyColor ? theme.colors.BodyColor : "white" };
  width: 100%;
  min-height: 250px;
  max-height: 250px;
  margin-top: 20px;
  overflow: auto;
  border-radius: 5px 5px 0 0;
`