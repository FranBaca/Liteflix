import React, {useState, useEffect} from 'react'
import { Spinner, useToast } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import MainPage from '../../components/MainPage/MainPage';
import { Container, MainPageContainer } from './styles/home';
import SidebarMovies from '../../SideBarMovies/SidebarMovies';

export default function Home({ popularMovie, setPopularMovie, myMovies }) {
    const [topMovie, setTopMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const toast = useToast();
  

   
  
    useEffect(() => {
      const getLatestMovie = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(process.env.REACT_APP_API_URL_GET_MOVIES);
          const { results } = await res.json();
          const randomMovie = results.sort(() => 0.5 - Math.random()).slice(0, 1);
    
          setTopMovie(randomMovie[0]);
          setIsLoading(false);
        } catch (e) {
          toast({
            title: 'Algo salio mal :(',
            description: 'Intenta de nuevo',
            duration: 3000,
            isClosable: true,
            variant: 'left-accent',
          });
    
          console.error(e);
          setIsLoading(false);
        }
      };
      getLatestMovie();
    }, [toast]);

    const getBackgroundStyle = () => {
        const urlImage = `${process.env.REACT_APP_GET_IMAGE_BACKGROUND}${topMovie?.poster_path}`;
    
        return topMovie?.poster_path
          ? {
              backgroundImage: `linear-gradient(to bottom, rgb(11 11 11 / 60%), rgb(13 13 13 / 1%)), url(${urlImage})`, 
              
           
                          }
          : { background: '#000' };
      };
    
      if (isLoading) return <Spinner />;

  return (
    <div>
      <Container style={getBackgroundStyle()}>
        <Navbar myMovies={myMovies}/>
        <MainPageContainer>
        <MainPage title={topMovie?.original_title} />
        <SidebarMovies popularMovie={popularMovie} setPopularMovie={setPopularMovie} myMovies={myMovies}/>
        </MainPageContainer>
      </Container>
    </div>
  )
}
