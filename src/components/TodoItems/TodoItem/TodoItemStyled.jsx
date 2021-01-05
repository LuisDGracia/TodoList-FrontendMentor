import styled from 'styled-components'

export const Item = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.TextColor };
  position: relative;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: ${ ({ done, theme }) => done ? theme.colors.HoverColor : theme.colors.VeryDarkGrayishBlue };
  margin: 0;
  margin-left: 20px;
  font-weight: 300;
  text-decoration: ${ ({ done, theme }) => done ? "line-through" : "none" };
`;