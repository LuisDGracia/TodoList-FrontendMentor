import styled from 'styled-components'

export const FilterText = styled.label`
  display: inline-block;
  color: ${ ({theme}) => theme.colors.TextColor };

  &:hover{
    color: ${ ({ theme }) => theme.colors.HoverColor };
  }
`;

export const FilterOptn = styled.input`
  position: absolute;
  top: -100%;
  height: -100%;
  visibility: hidden;

  &:checked + label[ for="All" ],
  &:checked + ${FilterText}[ for="Completed" ],
  &:checked + ${FilterText}[ for="Active" ]{
    color: black;
  }
`;