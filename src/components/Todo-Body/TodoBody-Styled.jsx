import styled from 'styled-components'

export const BodyContainer = styled.div`
  background-color: ${ ({ theme }) => { return theme.colors.VeryDarkDesaturatedBlue} };
  width: 100%;
  min-height: 250px;
  max-height: 250px;
  margin-top: 20px;
  overflow: auto;
  border-radius: 5px 5px 0 0;
  box-shadow: 45px 0px 50px 0px rgba( 0, 0, 0, 0.5);
`