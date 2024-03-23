import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Eventimg from "../../assets/Eventimg.png"

const EventBox = () => {
  return (
    <Box bg="#E0DFD6" display="flex" alignItems="center" w="30vw" borderRadius="25px" p={3} my={5}>
      <Image src={Eventimg} w={"75px"}/>
      <Box ml={5}>
        <Text fontWeight={700} fontSize="32px">Event Name</Text>
        <Text>Short Description about the event</Text>
      </Box>
    </Box>
  )
}

export default EventBox
