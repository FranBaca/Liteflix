import React from 'react'
import {Icon, useMediaQuery} from "@chakra-ui/react"
import {VscPlayCircle} from "react-icons/vsc"
import HoverDetails from './HoverDetails';
import {
    MovieCardContainer,  
    PlayBtnContainer,
    TitleContainer,
    HoverContainer,
} from "./styles/card";
import MovieHoverInfo from "../MovieHoverInfo/MovieHoverInfo"

export default function MovieCard({movie, categoryId, defaultCategoryId}) {
    const { backdrop_path, original_title,vote_average, release_date } = movie;
    const [isMobile] = useMediaQuery('(min-width: 768px)');
   
  return (
    <MovieCardContainer>
    <MovieHoverInfo
      imgSrc={
        categoryId === defaultCategoryId
          ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
          : `${backdrop_path}`
      }
      bgColor='rgba(36, 36, 36, 0.7)'
      width={isMobile ? '220px' : '350px'}
      height={isMobile ? '123px' : '199px'}
    >
      <HoverDetails original_title={original_title} vote_average={vote_average}release_date={release_date} />
    </MovieHoverInfo>
    <HoverContainer>
      <PlayBtnContainer>
        <Icon as={VscPlayCircle} width={isMobile ? '40px' : '48px'} height={isMobile ? '40px' : '48px'} />
      </PlayBtnContainer>
      <TitleContainer>{original_title}</TitleContainer>
    </HoverContainer>
  </MovieCardContainer>
  )
}
