import React from 'react'
import {
    Container,
    Image,
    Overlay,
    ChildrenContainer,
} from "./styles/hovermovie";

export default function ImageOverlay({
    children,
    imgSrc,
    bgColor,
    width,
    height,
    fSize,
    fColor,
  }) {
    return (
        <Container style={{ width: width, height: height }}>
          <Image src={imgSrc} alt="Movie Image" />
          <Overlay style={{ backgroundColor: bgColor }}>
            <ChildrenContainer style={{ fontSize: fSize, color: fColor }}>
              {children}
            </ChildrenContainer>
          </Overlay>
        </Container>
      );
}
