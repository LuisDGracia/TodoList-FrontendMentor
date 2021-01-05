import styled from 'styled-components'

export const NewContainer = styled.div`
  background-color: ${ ({ theme }) => theme.colors.VeryDarkBlue ? theme.colors.VeryDarkBlue : "white" };
  width: 100%;
  margin-top: 25px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const NewInput = styled.input`
  background: none;
  border: none;
  margin-left: 10px;
  color: ${ ({ theme }) => theme.colors.TextColor };

  &:focus{
    outline: none;
  }
`;