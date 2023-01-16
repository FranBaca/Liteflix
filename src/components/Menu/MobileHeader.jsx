import React from 'react';
import {
  Icon,
  Avatar,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import defaultProfilePic from '../../assets/Perfil.png';
import Logo from '../Logo/Logo';
import { VscClose } from 'react-icons/vsc';

const MobileHeader = ({onClose}) => (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      <GridItem w='100%'>
        <Icon as={VscClose} color='white' onClick={() => onClose()} fontSize='32px' _hover={{
          transform: 'scale(1.1)',
          transition: '0.6s',
          background: 'none',
          cursor:"pointer",
        }} />
      </GridItem>
      <GridItem w='100%'>
      <Logo/>
      </GridItem>
      <GridItem w='100%' textAlign='right'>
        <Avatar margin='auto' size='sm' name='Profile Picture' src={defaultProfilePic} />
      </GridItem>
    </Grid>
  );

  export default MobileHeader;