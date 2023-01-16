import styled from "@emotion/styled";

export const LogoContainer = styled.p`
    font-size: 34px;
    line-height: 34px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #64eebc;
    cursor:pointer;
    animation: drop 1.5s ease-in-out;
    :hover{
        color: #fff;
        transform: scale(1.5);
      }

      @keyframes drop {
        0% {
          opacity: 0;
          rotate(10deg)
        }
      
        100% {
          opacity: 1;
          rotate(0deg)
        }
      }  
`;

export const LogoSpan = styled.span`
      font-weight: 300;
`
