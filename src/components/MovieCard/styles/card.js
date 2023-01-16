import styled from "@emotion/styled";

export const MovieCardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 194px;
  margin: 10px auto;
  animation: rise 1.5s ease-in-out;
  @media (min-width: 768px) {
    position: relative;
    margin: 10px auto;
    background: inherit;
    width: 220px;
    height: auto;
  }

  @keyframes rise {
    0% {
      opacity: 0;
      transform: translateY(100vh);
    }
  
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HoverContainer = styled.div`
  transition: 0.5s ease-in-out;
  z-index: 98;
  width: 100%;
`;

export const PlayBtnContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  @media (min-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const TitleContainer = styled.p`
  width: 100%;
  font-size: 13.5px;
  margin-top: 24px;
  letter-spacing: 4px;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    margin-top: 18px;
  }
`;

export const DetailsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 350px;
  margin-top: 93px;
  margin-left: 24px;

  @media (min-width: 768px) {
    position: relative;
    width: 220px;
    height: auto;
    margin-top: 60px;
    margin-left: 16px;
  }
`;

export const DetailsTitle = styled.p`
  font-size: 13.5px;
  letter-spacing: 4px;
 
  padding-left: 5px;
  color: "#fff";
`;

export const DetailsFooter = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  margin-left: 26px;
  margin-top: 20px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    position: relative;
    width: 100%;
    margin-left: 20px;
    margin-bottom: 16px;
  }
`;

export const RangeValoration = styled.p`
  font-size: 14px;
  letter-spacing: 2px;
  padding-left: 10px;
  padding-right: 10px;
  color: "#fff";
`;

export const ReleaseDate = styled.p`
  font-size: 14px;
  text-align: right;
  letter-spacing: 2px;
  padding-left: 230px;
  color: "#fff";

  @media (min-width: 768px) {
    padding-left: 110px;
  }
`;


