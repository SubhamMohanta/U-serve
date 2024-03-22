import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Event1 from "../../assets/Event1.png"

const TopEvents = () => {

    return (
        <Box bg="#FFFDF1">
            {/* <Heading size="lg" textAlign="center" color={"#363636"} mt={10}>Highlights</Heading> */}

            <Box bg="#FFFDF1" display="flex" overflowX="auto" maxW={"100vw"} mx="0" sx={{ '&::-webkit-scrollbar': { display: "none" } }} gap={5} pt={'3%'} pl={"5%"}>
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
                <img src={Event1} height={'350px'} style={{ borderRadius: "25px" }} />
            </Box>
        </Box>
    )
}

export default TopEvents
