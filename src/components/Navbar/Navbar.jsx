import React, {useRef} from 'react'
import defaultProfilePic from "../../assets/Perfil.png"
import Menu from '../Menu/Menu';
import { Icon, Avatar, useMediaQuery } from '@chakra-ui/react';
import { VscBellDot } from 'react-icons/vsc';
import { Container, LeftContainer, RightContainer } from './styles/navbar';
import Logo from '../Logo/Logo';
import Form from '../Form/index';
export default function Navbar({myMovies}) {
  const [isMobile] = useMediaQuery('(min-width: 800px)')
  const btnRef = useRef();

  return (
    <Container>
      <LeftContainer>
      {!isMobile ? <Menu ref={btnRef} /> : <Form isNavbar myMovies={myMovies} />}      
      <Logo/>
      </LeftContainer>
      <RightContainer>  
      {isMobile && (
          <>
            <Menu ref={btnRef} isLargerThan800={isMobile} />
            <Icon
              as={VscBellDot}
              width={25}
              height={14}
              color='white'
              _hover={{ transform: 'scale(1.2)', transition: '0.6s' }}
            />
          </>
        )}
        <Avatar size='sm' name='Profile Picture' src={defaultProfilePic} />
      </RightContainer>
    </Container>
  )
}
