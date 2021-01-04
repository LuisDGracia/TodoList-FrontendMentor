import styled from 'styled-components'

export const FiltersContainer = styled.div`
  width:100%;
  background-color: ${ ({ theme }) => { return theme.colors.VeryDarkDesaturatedBlue } };
  padding: 10px;
  border-radius: 0 0 5px 5px;
  box-shadow: 45px 10px 50px 0px rgba( 0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ItemsLeft = styled.p`
  color: white;
  display: inline-block;
  margin: 0;
`

export const FilterOptn = styled.input`
  position: absolute;
  top: -100%;
  height: -100%;
  visibility: hidden;
`

export const ClearBtn = styled.button`
  color: white;
  background: none;
  border: none;

  &:focus{
    outline: none;
  }
`