import React from 'react'
import img1 from "../../assets/Group1.png"
import img2 from "../../assets/Group 2.png"
import img3 from "../../assets/Group 3.png"
import img4 from "../../assets/Group 4.png"

import { Flex, Heading, Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/react';

const HomeContent = () => {
    return (
        <>
            <Box bg="#FFFDF1">
                <Flex justifyContent={"space-center"} alignItems={"center"}>
                    <Flex align={"between"} justify={"space-between"} m={"15vh 15vw 15vh 10vw"}>

                        <Image src={img1} w={"40%"}></Image>

                        <Box my={"2%"} textAlign={"end"}>
                            <Heading fontSize={"48px"}>Volunteer Oppurtunity</Heading>
                            <Heading fontSize={"48px"}>MarketPlace</Heading>
                            <Text paddingLeft={"40%"} textAlign={"end"}>
                                Explore and sign up for college and local volunteer opportunities, tailoring searches by interests, skills, availability, and causes.
                            </Text>
                            <Button bg="transparent"
                                size="md"
                                color="black"
                                border="3px solid #4BB96A"
                                borderRadius="20px"
                                _hover={{
                                    bg: "#4BB96A", border: "3px solid #4BB96A", filter: "drop-shadow(0 0 5px #4BB96A)",
                                    transition: "background-color 0.3s ease", color: "white"
                                }}
                                d={{ base: 'none', md: 'block' }}
                                px={4}
                                mt={5}
                            >
                                Explore →
                            </Button>
                        </Box>
                    </Flex>
                </Flex>


                <Flex justifyContent={"space-center"} alignItems={"center"}>
                    <Flex align={"between"} justify={"space-between"} m={"15vh 10vw 15vh 15vw"}>

                        <Box my={"2%"} textAlign={"start"}>
                            <Heading fontSize={"48px"}>Community Events</Heading>
                            <Heading fontSize={"48px"}>and Projects</Heading>
                            <Text paddingRight={"40%"} mt={"2%"} textAlign={"start"}>
                                Explore a calendar of community events, service projects and workshops.
                            </Text>
                            <Button bg="transparent"
                                size="md"
                                color="black"
                                border="3px solid #4BB96A"
                                borderRadius="20px"
                                _hover={{
                                    bg: "#4BB96A", border: "3px solid #4BB96A", filter: "drop-shadow(0 0 5px #4BB96A)",
                                    transition: "background-color 0.3s ease", color: "white"
                                }}
                                d={{ base: 'none', md: 'block' }}
                                px={4}
                                mt={5}
                            >
                                Events →
                            </Button>
                        </Box>
                        <Image src={img2} w={"40%"}></Image>
                    </Flex>
                </Flex>



                <Flex justifyContent={"space-center"} alignItems={"center"}>
                    <Flex align={"between"} justify={"space-between"} m={"15vh 15vw 15vh 10vw"}>

                        <Image src={img3} w={"40%"}></Image>

                        <Box my={"2%"} textAlign={"end"}>
                            <Heading fontSize={"48px"}>Volunteer Recognition</Heading>
                            <Heading fontSize={"48px"}>and Rewards</Heading>
                            <Text paddingLeft={"40%"} mt={"2%"} textAlign={"end"}>
                                Earn virtual badges and certificates for showcasing volunteer experience.
                            </Text>
                            <Button bg="transparent"
                                size="md"
                                color="black"
                                border="3px solid #4BB96A"
                                borderRadius="20px"
                                _hover={{
                                    bg: "#4BB96A", border: "3px solid #4BB96A", filter: "drop-shadow(0 0 5px #4BB96A)",
                                    transition: "background-color 0.3s ease", color: "white"
                                }}
                                d={{ base: 'none', md: 'block' }}
                                px={4}
                                mt={5}
                            >
                                Rewards →
                            </Button>
                        </Box>
                    </Flex>
                </Flex>


                <Flex justifyContent={"space-center"} alignItems={"center"}>
                    <Flex align={"between"} justify={"space-between"} m={"15vh 10vw 15vh 15vw"}>

                        <Box my={"2%"} textAlign={"start"}>
                            <Heading fontSize={"48px"}>Impact Tracking</Heading>
                            <Heading fontSize={"48px"}>and Reporting</Heading>
                            <Text paddingRight={"40%"} mt={"2%"} textAlign={"start"}>
                                Monitor the social impact of volunteer activities with reporting dashboards.
                            </Text>
                            <Button bg="transparent"
                                size="md"
                                color="black"
                                border="3px solid #4BB96A"
                                borderRadius="20px"
                                _hover={{
                                    bg: "#4BB96A", border: "3px solid #4BB96A", filter: "drop-shadow(0 0 5px #4BB96A)",
                                    transition: "background-color 0.3s ease", color: "white"
                                }}
                                d={{ base: 'none', md: 'block' }}
                                px={4}
                                mt={5}
                            >
                                Dashboard →
                            </Button>
                        </Box>

                        <Image src={img4} w={"40%"}></Image>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default HomeContent
