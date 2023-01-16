import styled from "@emotion/styled";

export const Container = styled.header`
    width: 100%;
    height: 70px;
    display:flex;
    justify-content: space-around;
    align-items:center;

    @media(min-width: 768px) {
        justify-content: space-between
    }

`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;

    @media(min-width: 768px){
        margin-left: 50px;
        justify-content: space-evenly;
        width: 30%;
        flex-direction: row-reverse;
    }
`;

export const RightContainer = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 17%;
    animation: moveRight 1.5s ease-in;
    @media (min-width: 768px) {
        width: 200px, 
        margin-right: 103px;
    }

    @keyframes moveRight {
        0% {
          opacity: 0;
          transform: translateX(50px);
        }
    
        100% {
          opacity: 1;
          transform: translate(0);
        }
      }
`;