import React, { useState, useEffect } from 'react';
import { Select, Spinner, Text } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';

import { ContainerSidebarMovies, SelectContainer } from './styles/sidebar';
import MovieCard from '../components/MovieCard/MovieCard';

const SidebarMovies = ({ popularMovie, setPopularMovie, myMovies }) => {
  const defaultCategoryId = 1;
  const [categoryId, setCategoryId] = useState(defaultCategoryId);
  const [isLoading, setIsLoading] = useState(false);

  const categoryOptions = [
    { id: 1, name: 'Populares' },
    { id: 2, name: 'Mis películas' },
  ];

  useEffect(() => {
    const getPopularMovies = async () => {
      setIsLoading(true);
  
      if (categoryId === defaultCategoryId) {
        const res = await fetch(process.env.REACT_APP_API_URL_GET_MOVIES);
        const { results } = await res?.json();
        const sortedMovies = results.sort(() => 0.5 - Math.random()).slice(0, 4);
  
        setPopularMovie(sortedMovies);
      } else {
        setPopularMovie(myMovies);
      }
      setIsLoading(false);
    };
    getPopularMovies();
  }, [myMovies,setPopularMovie,categoryId]);

  const SelectCategory = () => (
    <SelectContainer>
      <Text fontSize='18px' paddingRight='10px'>
        Ver:
      </Text>
      <Select
        icon={<FiChevronDown />}
        variant='unstyled'
        fontSize='18px'
        transform='uppercase'
        value={categoryId}
        onChange={(e) => setCategoryId(Number(e.target.value))}
      >
        {categoryOptions.map((c) => (
          <option style={{ background: '#242424', border: 'none', textAlign:"start" }} key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );

  if (isLoading) return <Spinner style={{display:"flex", alignItems:"center", justifyContent:"center"}} />;

  return (
    <ContainerSidebarMovies>
      <SelectCategory />
      {categoryId === defaultCategoryId ? (
        <>
          {popularMovie?.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              categoryId={categoryId}
              defaultCategoryId={defaultCategoryId}
            />
          ))}
        </>
      ) : (
        myMovies[0].length > 0 && (
          <>
            {myMovies[0]?.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
                categoryId={categoryId}
                defaultCategoryId={defaultCategoryId}
              />
            ))}
          </>
        )
      )}
    </ContainerSidebarMovies>
  );
};

export default SidebarMovies;

