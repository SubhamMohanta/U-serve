import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import play from "../../assets/Play.png"
import 'aos/dist/aos.css'
import {motion} from 'framer-motion'

import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'

const HeroContent = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <Box bg={"#FFFDF1"} display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white" data-aos="fade-zoom-in">
            <Flex mt={50} gap={2} alignItems={"center"}>
                <Text letterSpacing={4} color="#4BB96A" fontSize="12px" fontWeight="700">WELCOME TO U-SERVE</Text>
            </Flex>
            <Heading size="2xl" textAlign="center" color="#363636" lineHeight="60px">Empowering communities <br />to make a difference</Heading>

            <Text color="#363636" textAlign="center" fontWeight="500" mt={5}>Explore volunteer opportunities. Earn badges, track your<br />impact, and change the world, one good deed at a time.</Text>
            <Box display={"flex"} gap={6} alignItems="center" mt={5}>
                <Button bg="#4BB96A"
                    size="lg"
                    color="white"
                    border="1px solid #4BB96A"
                    borderRadius="40px"
                    style={{
                        filter: "drop-shadow(0 0 5px #4BB96A)",
                    }}
                    _hover={{ bg: "#4BB96A" }}
                    d={{ base: 'none', md: 'block' }}
                    px={8}
                    py={5}
                    onClick={() => loginWithRedirect()}
                >
                    Explore Events
                </Button>
                <Button bg="#FFFDF1"
                    size="lg"
                    color="black"
                    border="1px solid #4BB96A"
                    borderRadius="40px"
                    _hover={{
                        bg: "#4BB96A", border: "3px solid #4BB96A", filter: "drop-shadow(0 0 5px #4BB96A)",
                        transition: "background-color 0.3s ease",
                        color: "white"
                    }}
                    d={{ base: 'none', md: 'block' }}
                    px={8}
                    py={5}
                >
                    <Image src={play} mr={3}></Image>Watch Video
                </Button>
            </Box>
        </Box>
    )
}

export default HeroContent
