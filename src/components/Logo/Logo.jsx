import React from 'react';
import { LogoSpan, LogoContainer} from './styles/logo';

const Logo = ({ margin }) => (
  <LogoContainer style={{ margin: margin ?? "0 0 0 35px" }}>
    Lite<LogoSpan>Flix</LogoSpan>
  </LogoContainer>
);

export default Logo;