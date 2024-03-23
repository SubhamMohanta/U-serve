import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import play from "../../assets/Play.png"
import React from 'react'

const HeroContent = () => {
    return (
        <Box bg={"#FFFDF1"} display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white">
            <svg style={{marginTop:"-16%"}} width="1000" height="600" viewBox="0 0 1231 737" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_66_1118)">
<rect x="165" y="165" width="901" height="407" rx="160" fill="#4BB96A" fill-opacity="0.33"/>
</g>
<defs>
<filter id="filter0_f_66_1118" x="0.699997" y="0.699997" width="1229.6" height="735.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="82.15" result="effect1_foregroundBlur_66_1118"/>
</filter>
</defs>
            </svg>
            <Heading size="2xl" textAlign="center" color="#363636" lineHeight="60px" fontFamily={{}} style={{marginTop:"-13%"}} >Empowering communities <br />to make a difference</Heading>

            <Text color="#363636" textAlign="center" fontWeight="500" mt={5}>Explore volunteer opportunities. Earn badges, track your<br />impact, and change the world, one good deed at a time.</Text>
            <Box display={"flex"} gap={6} alignItems="center" mt={5}>
                <Button bg="#4BB96A"
                    size="lg"
                    color="white"
                    border="1px solid #4BB96A"
                    borderRadius="40px"
                    _active={{  transform:"scale(0.99)",
                    transition: "0.1s ease-in-out"}}
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
