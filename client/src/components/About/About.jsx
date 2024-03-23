import React from 'react'
import NavBar from '../Home/NavBar'
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import img8 from "../../assets/Group 8.png";
import img6 from "../../assets/Group 6.png";
import img7 from "../../assets/Group 7.png";

const About = () => {
    return (
        <Box bg="#FFFDF1">
            <NavBar />
            <Box>
                <Flex justifyContent="center" alignItems="center">
                    <Flex align="center" justify="space-between" flexDirection={{ base: "column", md: "row" }} m={{ base: "5", md: "15vh 15vw 15vh 10vw" }}>
                        <Image src={img6} w={{ base: "80%", md: "40%" }} />
                        <Box my={{ base: "5", md: "2%" }} textAlign={{ base: "center", md: "end" }}>
                            <Heading fontSize={{ base: "36px", md: "48px" }}>Introduction</Heading>
                            <Text paddingLeft={{ base: "0%", md: "40%" }} mt={{ base: "3", md: "2%" }} textAlign={{ base: "center", md: "end" }}>
                                Welcome to u-serve, revolutionizing college campus volunteering. Discover tailored opportunities, plan events, and track impact effortlessly. Join our vibrant community where students, faculty, and partners unite to drive meaningful change. Together, let's shape a future where service and civic engagement flourish.
                            </Text>
                        </Box>
                    </Flex>
                </Flex>

                <Flex justifyContent="center" alignItems="center">
                    <Flex align="center" justify="space-between" flexDirection={{ base: "column-reverse", md: "row" }} m={{ base: "5", md: "15vh 10vw 15vh 15vw" }}>
                        <Box my={{ base: "5", md: "2%" }} textAlign={{ base: "center", md: "start" }}>
                            <Heading fontSize={{ base: "36px", md: "48px" }}>Mission & Value</Heading>
                            <Text mt={{ base: "3", md: "2%" }} paddingRight={{ base: "0%", md: "40%" }} textAlign={{ base: "center", md: "start" }}>
                                At u-serve, our mission is to empower college communities through service, collaboration, and social impact. Guided by inclusivity and transparency, we connect individuals with meaningful opportunities, inspiring collective action for positive change and a more equitable society.
                            </Text>
                        </Box>
                        <Image src={img7} w={{ base: "80%", md: "40%" }} />
                    </Flex>
                </Flex>

                <Flex justifyContent="center" alignItems="center">
                    <Flex align="center" justify="space-between" flexDirection={{ base: "column", md: "row" }} m={{ base: "5", md: "15vh 15vw 15vh 10vw" }}>
                        <Image src={img8} w={{ base: "80%", md: "40%" }} />
                        <Box my={{ base: "5", md: "2%" }} textAlign={{ base: "center", md: "end" }}>
                            <Heading fontSize={{ base: "36px", md: "48px" }}>Community Engagement</Heading>
                            <Text paddingLeft={{ base: "0%", md: "40%" }} mt={{ base: "3", md: "2%" }} textAlign={{ base: "center", md: "end" }}>
                                At u-serve, we foster vibrant community engagement on college campuses. Through our innovative platform, we connect students, faculty, and partners, empowering collaboration on impactful initiatives. Join us to create a dynamic environment where every voice is heard, driving positive change together.
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

        </Box>
    )
}

export default About
