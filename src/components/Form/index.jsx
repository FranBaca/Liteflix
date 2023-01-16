import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import SuccessMessage from "./SuccessMessage";
import Form from "./Form";
import OpenButton from "./OpenButton";
import { useState } from "react";



export default function FormModal ({isNavbar})  {
  const [onSuccess, setOnSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formValues, setFormValues] = useState({
    original_title: '',
    backdrop_path: '',
  });
    const {isOpen, onOpen, onClose} = useDisclosure()

    const generateID = () => Math.random().toString(36).substr(2);

  const onSubmit = (e) => {
    e.preventDefault();
    const { original_title, backdrop_path } = formValues;

    if (original_title === '' || backdrop_path === '') return;

    const movie = {
      original_title,
      backdrop_path,
    };
    const myMovies = JSON.parse(localStorage.getItem('OwnMovies')) ?? [];
    const storagedMovie = Array.from(myMovies)
    movie.id = generateID();
    storagedMovie.push(movie);
    const sortedMovies = storagedMovie.sort(() => 0.5 - Math.random()).slice(0, 4);
    localStorage.setItem('OwnMovies', JSON.stringify(sortedMovies));
    setOnSuccess(true);
  };
    return(
        <>
        <OpenButton onOpen={onOpen}/>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
          {isNavbar && <ModalOverlay bg="black.100" backdropFilter="blur(3px)"/>}
          <ModalContent bg="#242424" borderRadius="none" height={isNavbar ? "440px" : "85vh"}>
            { !onSuccess && (
            <ModalHeader
              textAlign="center"
              color="#64EEBC"
              fontSize="20px"
              letterSpacing="5px"
              fontWeight="normal"
              mt="20px"
            >
              Agregar Pelicula
            </ModalHeader>
            )
            }
            <ModalCloseButton/>
            <ModalBody>{!onSuccess ? 
            <Form 
            isNavbar={isNavbar} 
            formValues={formValues}  
            setFormValues={setFormValues} 
            onSubmit={onSubmit} 
            onClose={ onClose} 
            isDisabled={isDisabled} 
            setIsDisabled={setIsDisabled}
            isError={isError}
            setIsError={setIsError}
            />  : 
            <SuccessMessage 
            isNavbar={isNavbar}
            isDisabled={isDisabled}
            onClose={onClose}
            />}
            </ModalBody>
          </ModalContent>
        </Modal>
        </>
    )
}

