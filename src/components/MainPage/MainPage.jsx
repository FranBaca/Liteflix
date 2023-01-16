import React from 'react'
import {BsPlay, BsPlus} from "react-icons/bs"

import { ButtonsContainer, Container, Title, MainTitleContainer, SubTitle } from './styles/mainPage';
import CustomButton from "../CustomButton/CustomButton"


export default function MainPage({title}) {
  return (
        <Container>
            <SubTitle>
                Original de<span style={{fontWeight: "700" }}> Liteflix</span> 
            </SubTitle>
        <MainTitleContainer>
            <Title>{title}</Title>
            <ButtonsContainer>
                <CustomButton
                    title="Reproducir"
                    Icon={BsPlay}
                    background="#242424"
                    _hover={{background: "transparent", border: "1px solid #fff"}}
                />
                <CustomButton
                    title="Mi lista"
                    Icon={BsPlus}
                    background="rgba(36,36,36,0.5)"
                    border="1px solid rgba(255,255,255,0.5)"
                    marginTop="10px"
                    _hover={{background: "transparent", border: "1px solid #fff"}}
                />
            </ButtonsContainer>
        </MainTitleContainer>
        </Container>
  )
}
