import styled from '@emotion/styled';

export const LogoContainer = styled.p`
  font-size: 34px;
  line-height: 34px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #64eebc;
  cursor: pointer;

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.2);
      transition-duration: 0.6s;
    }
  }
`;

export const LogoSpan = styled.span`
  font-weight: 300;
`;