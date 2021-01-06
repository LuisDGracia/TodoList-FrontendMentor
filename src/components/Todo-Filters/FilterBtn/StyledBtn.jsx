import styled from 'styled-components'

export const FilterText = styled.label`
  display: inline-block;
  color: ${ ({theme}) => theme.colors.DisabledTextColor };

  &:hover{
    color: ${ ({ theme }) => theme.colors.HoverColor };
    cursor: pointer;
  }
`;

export const FilterOptn = styled.input`
  position: absolute;
  top: -100%;
  height: -100%;
  visibility: hidden;

  &:checked + ${FilterText}[ for="All" ],
  &:checked + ${FilterText}[ for="Completed" ],
  &:checked + ${FilterText}[ for="Active" ]{
    color: ${ ({ theme }) => theme.colors.FilterActive };
  }
`;

export const FilterContainer = styled.div`
  width: auto;
  text-align: center;
  font-size: 14px;
  display: inline-block;
`;
