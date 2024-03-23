import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Event1 from "../../assets/Event1.png";

const TopEvents = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const images = [Event1, Event1, Event1, Event1, Event1]; // Add more images as needed
    const gapBetweenImages = -100; // Adjust this value to decrease the gap between images

    return (
        <Box bg="#FFFDF1" zIndex={-1}>
            <Box
                bg="#FFFDF1"
                display="flex"
                overflowX="hidden"
                maxW="100vw"
                mx="0"
                pt="3%"
                pb="3%"
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
