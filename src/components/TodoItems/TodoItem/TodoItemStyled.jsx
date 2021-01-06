import styled from 'styled-components'

export const Item = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.DisabledTextColor };
  position: relative;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  margin: 0;
  margin-left: 20px;
  font-weight: 300;

  ${ ({ done, theme }) =>{
    
    if( done ){
      return(`
        text-decoration: line-through;
        color: ${ theme.colors.DisabledTextColor };
        `)
      }else return(`
        text-decoration: none;
        color: ${ theme.colors.ActiveTextColor };
      `)
  }}

`;