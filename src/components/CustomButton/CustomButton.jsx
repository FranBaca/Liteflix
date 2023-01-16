import React from 'react'
import { Button as ChakraButton} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { keyframes } from '@chakra-ui/react';

export default function CustomButton({Icon, title, background, border, isForm, ...rest }) {

  const animationKeyframes = keyframes`
  from {
     transform: translate3d(70px, 0, 0);
    opacity: 0;
    width: 0%;
    fontSize: 0px;
    color:${background};
  }
  to {
     transform: translate3d(0, 0, 0);
    opacity: 1;
    width:248px;
    color:#fff;
    fontSize: 20px;
    
  }
`;

const animation = `${animationKeyframes} 2s ease-in-out`;
  return (
    <ChakraButton
      as={motion.div}
         animation={isForm? null: animation}
        leftIcon = {Icon && <Icon size="30px"/>}
        width="248px"
        height="56px"
        borderRadius="none"
        background={background}
        fontSize="20px"
        lineHeight="21.6px"
        letterSpacing = "4px"
        fontWeight="normal"
        border={border ?? ""}
        {...rest}
        marginLeft="10px"
        cursor="pointer"
    >
        {title}
    </ChakraButton>
  )
}
