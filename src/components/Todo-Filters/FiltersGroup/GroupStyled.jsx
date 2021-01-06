import styled from 'styled-components'

export const FilterGroup = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  background-color: ${ ({ theme}) => theme.colors.FormBgColor };
  border-radius: 0px 0px 10px 10px;

  @media screen and ( max-width: 1023px ){
    position: absolute;
    bottom: 5px;
    left: 30%;
    padding: 10px;
  }

  @media screen and ( max-width: 426px ){
    position: absolute;
    width: 80%;
    bottom: 5px;
    left: 10%;
    padding: 10px;
  }

`