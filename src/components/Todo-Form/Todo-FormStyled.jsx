import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  z-index:10;
  @media screen and (max-width: 375px){
    width: 80%;
  }
`;

export const TodosContainer = styled.div`
  background-color: ${ ({ theme }) => theme.colors.FormBgColor };
  box-shadow: 0px 00px 100px -10px rgba( 0, 0, 0, 0.5); 
  border-radius: 5px;
`;

export const MobileFilters = styled.div`
`;
