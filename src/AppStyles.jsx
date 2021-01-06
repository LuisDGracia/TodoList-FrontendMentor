import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: ${ ({ theme }) => theme.colors.MainBgColor };
  height: 100vh;
`

export const Banner = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
`;
