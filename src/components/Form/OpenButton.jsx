import { Button, ListItem, ListIcon,List } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from 'react-icons/ai';

const OpenButton = ({isNavbar,onOpen}) =>{
    if(isNavbar) {
        return(
            <Button
                leftIcon={<AiOutlinePlus  size={20} />}
                variant = "ghost"
                size = "sm"
                textTransform="uppercase"
                fontSize = "18px"
                fontWeight = "normal"
                letterSpacing="4px"
               
                _hover={{transform: "scale(1.1)", transition: "0.6s"}}
                onClick={onOpen}
            >
                Agregar película
            </Button>
        )
    }

    return(
        <List>
        <ListItem style={{ margin: "50px auto" }} onClick={onOpen} cursor="pointer">
        <ListIcon as={AiOutlinePlus} color="white" mb="4px"/>
        <span style={{letterSpacing:"4px"}}>Agregar Pelicula</span>
      </ListItem>
        </List>
    )
};

export default OpenButton;