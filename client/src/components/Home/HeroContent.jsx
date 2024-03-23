import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import play from "../../assets/Play.png"
import React from 'react'
// import Bold from '../../assets/SFProDisplay-Bold.ttf'

const HeroContent = () => {
    return (
        <Box bg={"#FFFEF8"} display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white">
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
            <Heading size="2xl" textAlign="center" color="#363636" lineHeight="60px" fontFamily="SF Pro Display" style={{marginTop:"-13%"}} >Empowering communities <br />to make a difference</Heading>

            <Text color="#353535" textAlign="center" fontFamily="SF Pro Text" fontWeight="500" mt={5}>Explore volunteer opportunities. Earn badges, track your<br />impact, and change the world, one good deed at a time.</Text>
            <Box display={"flex"} gap={6} alignItems="center" mt={5}>
                <Button fontFamily="SF Pro Text" bg="#4BB96A"
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
                <Button fontFamily="SF Pro Text" bg="#FFFEF8"
                    size="lg"
                    color="#353535"
                    border="1px solid #4BB96A"
                    borderRadius="40px"
                    _active={{  transform:"scale(0.99)",
                    transition: "0.1s ease-in-out"}}
                    _hover={{ bg: "#FFFEF8" }}
                    d={{ base: 'none', md: 'block' }}
                    px={8}
                    py={5}
                >
                    Watch Video<svg style={{marginLeft:"4%"}}width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8.5C17 10.7543 16.1045 12.9163 14.5104 14.5104C12.9163 16.1045 10.7543 17 8.5 17C6.24566 17 4.08365 16.1045 2.48959 14.5104C0.895533 12.9163 0 10.7543 0 8.5C0 6.24566 0.895533 4.08365 2.48959 2.48959C4.08365 0.895533 6.24566 0 8.5 0C10.7543 0 12.9163 0.895533 14.5104 2.48959C16.1045 4.08365 17 6.24566 17 8.5ZM7.21438 5.41131C7.13494 5.35475 7.04147 5.32115 6.9442 5.31419C6.84694 5.30722 6.74963 5.32716 6.66295 5.37182C6.57626 5.41648 6.50354 5.48413 6.45275 5.56738C6.40196 5.65062 6.37506 5.74624 6.375 5.84375V11.1562C6.37506 11.2538 6.40196 11.3494 6.45275 11.4326C6.50354 11.5159 6.57626 11.5835 6.66295 11.6282C6.74963 11.6728 6.84694 11.6928 6.9442 11.6858C7.04147 11.6788 7.13494 11.6452 7.21438 11.5887L10.9331 8.93244C11.002 8.88329 11.0581 8.81841 11.0969 8.7432C11.1356 8.66798 11.1558 8.5846 11.1558 8.5C11.1558 8.4154 11.1356 8.33202 11.0969 8.2568C11.0581 8.18158 11.002 8.1167 10.9331 8.06756L7.21438 5.41131Z" fill="#353535"/>
</svg>
                </Button>
            </Box>
        </Box>
    )
}

export default HeroContent;