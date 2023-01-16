import React from "react"
import {Icon} from "@chakra-ui/react"
import {IoStarSharp} from "react-icons/io5";
import dayjs from "dayjs"
import {
    DetailsHeader,
    DetailsTitle,
    RangeValoration,
    ReleaseDate,
    DetailsFooter,
} from "./styles/card";
import {VscPlayCircle} from "react-icons/vsc"

const HoverDetails = ({original_title,vote_average, release_date }) => (
    <>
   <DetailsHeader>
    <Icon as={VscPlayCircle} height='26px' width='26px' />
    <DetailsTitle>{original_title}</DetailsTitle>
  </DetailsHeader>
  <DetailsFooter>
    {vote_average && (
      <>
        <Icon as={IoStarSharp} height='14px' width='14px' color='#64EEBC' />
        <RangeValoration>{vote_average.toString().replace('.', ',')}</RangeValoration>
      </>
    )}
    {release_date && <ReleaseDate>{dayjs(release_date).format('YYYY')}</ReleaseDate>}
  </DetailsFooter>
    </>
)

export default HoverDetails;