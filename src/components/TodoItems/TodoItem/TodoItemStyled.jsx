import styled from 'styled-components'

export const Item = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid hsl(0, 0%, 40%);
  position: relative;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: ${ props => props.done ? "hsl(0, 0%, 40%)" : "white" };
  margin: 0;
  margin-left: 20px;
  font-weight: 300;
  text-decoration: ${ props => props.done ? "line-through" : "none" };
`;