import { useState } from 'react';
import {FormControl, Input, Progress, Icon,Text} from '@chakra-ui/react';
import { AiOutlinePaperClip } from 'react-icons/ai';
import {ContainerForm} from "./styles/form";
import handlerImage from './HandlerImage';
import CustomButton from '../CustomButton/CustomButton';
import { useDropzone } from 'react-dropzone';
import ProgressText from './ProgressText';

const Form = (props) => {
  const [progress, setProgress] = useState(0);
  
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: (acceptFiles) => {
      const file = acceptFiles[0];
      handlerImage(file, props.setIsError, setProgress, props.setFormValues,props.formValues,progress,props.setIsDisabled);
    },
  });

  return(
    <FormControl textAlign='center'>
      {progress > 0 ? (
        <>
          {props.isError ? (
            <>
              {ProgressText('¡Error! No se pudo cargar la pelicula', null, 'left', null, '10px')}
              <Progress colorScheme='red' value={progress} />
              <Text
                color='#fff'
                textAlign='right'
                fontSize='18px'
                fontWeight='normal'
                mt='10px'
                lineHeight='21px'
                letterSpacing='4px'
              >
                Reintentar
              </Text>
            </>
          ) : (
            <>
              {ProgressText(`${progress}% Cargado`, null, 'left', null, '10px')}
              <Progress colorScheme='teal' value={progress} />
              {progress === 100
                ? ProgressText('Listo!', '#64EEBC', 'right', '10px')
                : ProgressText('Cancelar', null, 'right', null, '10px')}
            </>
          )}
        </>
      ) : (
        <ContainerForm {...getRootProps()}>
          <Input
            type='file'
            id='movie'
            defaultValue=''
            accept='image/png,image/jpeg'
            onChange={(e) => handlerImage(e.target.files[0])}
            {...getInputProps()}
          />
          <Icon as={AiOutlinePaperClip} height='16px' mr="5px"/>
          {props.isNavbar ? (
            <Text style={{textAlign:"center"}}>Agregá un archivo o arrastralo y soltalo aquí</Text>
          ) : (
            <Text>Agregá un archivo</Text>
          )}
        </ContainerForm>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Input
          value={props.formValues.original_title}
          placeholder='Título'
          type='text'
          border='none'
          background='transparent'
          fontSize='16px'
          mt={props.isNavbar ? '25px' : '94px'}
          letterSpacing='4px'
          lineHeight='16px'
          textAlign='center'
          variant='unstyled'
          width='248px'
          p='16px'
          borderRadius='none'
          borderBottom='solid 1px #fff'
          onChange={(e) => props.setFormValues({ ...props.formValues, original_title: e.target.value })}
        />
        <CustomButton
          title='Subir Película'
          type='submit'
          background='#fff'
          border='1px solid rgba(255, 255, 255, 0.5)'
          _hover={{ background: '#242424', color:"#fff" }}
          margin={props.isNavbar ? '48px 0 0' : '100px 0 0'}
          disabled={props.isDisabled}
          onClick={(e) => props.onSubmit(e)}
          color='#242424'
          isForm={true}
        />
        {!props.isNavbar && (
          <CustomButton
            title='Salir'
            onClick={() => props.onClose()}
            background='rgba(36, 36, 36, 0.5)'
            border='1px solid rgba(255, 255, 255, 0.5)'
            _hover={{ background: '#242424' }}
            margin='24px 0 0'
            isForm={true}
          />
        )}
      </div>
    </FormControl>
  )
};

  export default Form;