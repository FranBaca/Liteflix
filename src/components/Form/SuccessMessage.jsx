import { Box,Text } from "@chakra-ui/react";
import CustomButton from "../CustomButton/CustomButton"
import Logo from "../Logo/Logo"

const renderSuccessMessage = (props) => (
    <Box textAlign="center">
        {props.isNavbar && <Logo margin="64px 0 0 0" />}
        <Text mt={props.isNavbar ? "70px" : "190px"} 
        fontSize="24px" 
        lineHeight="26px"
        letterSpacing="4px"
        >
            ¡Felicitaciones!
        </Text>
        <Text mt='32px' fontSize='20px' lineHeight='32px' letterSpacing='4px'>
        Liteflix The Movie fue correctamente subida.
      </Text>
        <CustomButton
        title="Ir a home"
        background="#fff"
        border="1px solid rgba(255,255,255,0.5)"
        _hover={{background: "#242424", color: "#fff"}}
        margin = {props.isNavbar ? "48px 0 0" : "100px 0 0" }
        disabled={props.isDisabled}
        color="#242424"
        onClick={props.onClose}
        isForm={true}
        ></CustomButton>
    </Box>
);

export default renderSuccessMessage;