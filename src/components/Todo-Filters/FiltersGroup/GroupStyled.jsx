import styled from 'styled-components'

export const FilterGroup = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;

  @media screen and ( max-width: 1023px ){
    position: absolute;
    bottom: 5px;
    left: 30%;
    background-color: ${ ({ theme}) => theme.colors.FormBgColor };
    padding: 10px;
    border-radius: 0px 0px 10px 10px;
  }

`