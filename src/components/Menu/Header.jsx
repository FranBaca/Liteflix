import {  
    Icon,
    Avatar,
    Grid,
    GridItem,
  } from '@chakra-ui/react';
  import { VscBellDot, VscClose } from 'react-icons/vsc';
  import defaultProfilePic from '../../assets/Perfil.png';

const Header = ({onClose}) => (
    <Grid templateColumns='repeat(8, 1fr)' gap={4} marginTop='14px'>
      <GridItem colSpan={6}>
        <Icon as={VscClose} color='white' onClick={() => onClose()} fontSize='28px' />
      </GridItem>
      <GridItem colSpan={1}>
        <Icon as={VscBellDot} fontSize='30px' color='white' />
      </GridItem>
      <GridItem colSpan={1} textAlign='right' w='100%'>
        <Avatar size='sm' name='Profile Picture' marginLeft='10px' src={defaultProfilePic} />
      </GridItem>
    </Grid>
  );

  export default Header;