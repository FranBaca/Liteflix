import styled from '@emotion/styled';

export const ContainerSidebarMovies = styled.div`
  width: 100%;
  background: linear-gradient(360deg, rgba(36, 36, 36, 0) 0%, #242424 100%);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    background: inherit;
    width: 90%;
  }

 
`;

export const SelectContainer = styled.div`
  width: 160px;
  display: flex;
  justify-content: center;
  margin: 50px auto 23px auto;
 
  @media (min-width: 768px) {
    margin-top: 40px;
    height: 18px
    display: flex;
    align-items: center;
    background: inherit;
  }



`;
