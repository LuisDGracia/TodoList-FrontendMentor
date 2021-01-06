import styled from 'styled-components'

export const FiltersContainer = styled.div`
  width:100%;
  padding: 20px 10px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${ ({theme}) => theme.colors.DisabledTextColor };
`

export const ItemsLeft = styled.p`
  color: ${ ({theme}) => theme.colors.DisabledTextColor };
  display: inline-block;
  margin: 0;
  cursor: default;
`

export const ClearBtn = styled.button`
  color: ${ ({theme}) => theme.colors.DisabledTextColor };
  background: none;
  border: none;

  &:hover{
    color: ${ ({ theme }) => theme.colors.HoverColor };
    cursor: pointer;
  }

  &:focus{
    outline: none;
  }
`;

