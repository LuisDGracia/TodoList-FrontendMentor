import styled from 'styled-components'

export const FiltersContainer = styled.div`
  width:100%;
  background-color: ${ ({ theme }) => theme.colors.FormColor ? theme.colors.FormColor : "white" };
  padding: 20px 10px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${ ({theme}) => theme.colors.TextColor };
`

export const ItemsLeft = styled.p`
  color: ${ ({theme}) => theme.colors.TextColor };
  display: inline-block;
  margin: 0;
`

export const ClearBtn = styled.button`
  color: ${ ({theme}) => theme.colors.TextColor };
  background: none;
  border: none;

  &:focus{
    outline: none;
  }
`;

