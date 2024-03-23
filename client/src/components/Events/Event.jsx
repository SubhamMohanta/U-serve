import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../Home/NavBar'
import SubNav from '../Home/SubNav'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { IoChevronDown, IoChevronDownCircleOutline } from 'react-icons/io5'
import EventBox from './EventBox'
import sampleImg from "../../assets/SampleEnentImg.png"

const Event = () => {
    return (
        <Box bg="#FFFDF1">
            <NavBar />
            <SubNav tab={"explore"} />
            <Box mx="auto" w="80%">
                <Menu>
                    <MenuButton as={Button} rightIcon={<IoChevronDown />} bg="#E0DFD6">
                        Filter
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Upcoming</MenuItem>
                        <MenuItem>Live</MenuItem>
                        <MenuItem>Completed</MenuItem>
                    </MenuList>
                </Menu>
                <Box display="flex" mx="auto" justifyContent="space-between">
                    <Box>
                        <EventBox />
                    </Box>
                    <Box w={"30vw"} bg="#E0DFD6" borderRadius="40px">
                        <Image src={sampleImg} />
                        <Text fontWeight={700} fontSize="32px">Event Name</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, repellat? Maiores delectus in ea veritatis ducimus natus tempora quod nihil minima libero, neque eligendi ullam porro officia dolorum suscipit ipsa!</Text>
                        <Flex>
                            <Text fontWeight="bold">Location:</Text>
                            <Text mx={2}>XYZ Place</Text>
                        </Flex>
                        <Flex>
                            <Text fontWeight="bold">Starting Date:</Text>
                            <Text mx={2}>XYZ Place</Text>
                        </Flex>
                        <Flex>
                            <Text fontWeight="bold">Ending Date:</Text>
                            <Text mx={2}>XYZ Place</Text>
                        </Flex>
                        <Flex>
                            <Text fontWeight="bold">Organizer:</Text>
                            <Text mx={2}>XYZ Place</Text>
                        </Flex>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}

export default Event
