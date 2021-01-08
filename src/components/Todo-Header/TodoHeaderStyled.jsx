import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  margin: 0;
  cursor: default;
`;

export const ThemeChanger = styled.label``;

export const ThemeButton = styled.img`
  &:hover{
    cursor: pointer;
  }
`

export const Checkbox = styled.input`
  position: absolute;
  top: -100%;
  left: -100%;
  visibility: hidden;
`;