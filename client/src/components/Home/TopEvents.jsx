import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Event1 from "../../assets/Event1.png";
import Event from "../../assets/Event.png";
import Event3 from "../../assets/Event3.png";
import Event4 from "../../assets/Event4.png";
import Event5 from "../../assets/Event5.png";

const TopEvents = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const images = [Event1, Event, Event3, Event4, Event5];
    const gapBetweenImages = -100;
    return (
        <Box bg="#FFFEF8">
            <Box
                bg="#FFFEF8"
                display="flex"
                overflowX="hidden"
                maxW="100vw"
                mx="0"
                pt="8%"
                pl="5%"
                sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
                position="relative"
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        height="350px"
                        style={{
                            borderRadius: '25px',
                            marginRight: `${gapBetweenImages}px`, // Adjust the marginRight here
                            transform: `translateX(${(index - currentSlideIndex) * (370 + gapBetweenImages)}px)`,
                            transition: 'transform 0.5s ease-in-out',
                            left: `${index * (370 + gapBetweenImages)}px`
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default TopEvents;
