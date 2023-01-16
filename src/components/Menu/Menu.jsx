import React from 'react';
import {
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  List,
  ListItem,
  forwardRef,
} from '@chakra-ui/react';
import MobileHeader from './MobileHeader';
import Header from './Header';
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from 'react-icons/hi';

import FormModal from '../Form';


const Menu = forwardRef((props, ref) => {
  const { isMobile } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        ref={ref}
        as={Button}
        icon={!isMobile ? <HiOutlineMenuAlt2 color='white' /> : <HiOutlineMenuAlt3 color='white' />}
        fontSize='32px'
        backgroundColor='inherit'
        onClick={onOpen}
        _hover={{
          transform: 'scale(1.1)',
          transition: '0.6s',
          background: 'none',
          cursor:"pointer",
        }}
      />
      <Drawer isOpen={isOpen} placement='right' finalFocusRef={ref} size='md'>
        <DrawerOverlay />
        <DrawerContent backgroundColor='#242424' lineHeight='40px' fontSize='16px' letterSpacing='4px'>
          <DrawerHeader width='100%' display='flex' flexDirection='row'>
            {!isMobile ? <MobileHeader onClose={onClose} /> : <Header onClose={onClose} />}
          </DrawerHeader>
          <DrawerBody>
            <List
              spacing='22px'
              marginLeft={!isMobile ? '14px' : '28px'}
              fontSize='22px'
              fontWeight='normal'
              letterSpacing='4px'
              color="#fff"
              _hover={{
                cursor:"pointer",
              }}
            >
              <ListItem>Inicio</ListItem>
              <ListItem>Series</ListItem>
              <ListItem>Peliculas</ListItem>
              <ListItem>Agregadas Recientemente</ListItem>
              <ListItem>Populares</ListItem>
              <ListItem>Mis Peliculas</ListItem>
              <ListItem>Mi Lista</ListItem>
              <FormModal/>
              <ListItem>Cerrar Sesión</ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});

export default Menu;

