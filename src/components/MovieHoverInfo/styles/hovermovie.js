import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;

  &:hover {
    z-index: 99;
    transition: 0.5s ease-in-out;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease-in-out;
  color: white;
  cursor:pointer;
  &:hover {
    opacity: 1;
    transform: translateX(400px);
    transform: translateY(0px);
  }
`;

export const ChildrenContainer = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 25px;
  font-size: 14px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;