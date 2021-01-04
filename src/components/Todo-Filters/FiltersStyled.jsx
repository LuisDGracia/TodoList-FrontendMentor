import styled from 'styled-components'

export const FiltersContainer = styled.div`
  width:100%;
  background-color: ${ ({ theme }) => { return theme.colors.VeryDarkDesaturatedBlue } };
  padding: 10px;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ItemsLeft = styled.p`
  display: inline-block;
  margin: 0;
`

export const FilterOptn = styled.input``

export const ClearBtn = styled.button`
  background: none;
  border: none;

  &:focus{
    outline: none;
  }
`