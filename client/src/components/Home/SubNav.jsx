import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/ParentContext'
import {
    Box,
    Button
} from '@chakra-ui/react'
import { IoGlobeOutline, IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'
import Aos from 'aos';

const SubNav = ({ tab }) => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    const { isAuthenticated } = useContext(AppContext)
    const navigate = useNavigate();
    return (
        <Box bg={"#FFFDF1"} textAlign="center" pt={"16px"} data-aos="fade-zoom-in">
            {<Box display="flex"  justifyContent="space-around" w="120px" p={"2px"} height="50px" bg="#E6E6E6" alignItems="center" borderRadius="16px" mx="auto">
                <Button w="55px" h="42px" borderRadius="16px" bg={tab=="home" ? "#FFF8FE" : "transparent"} 
                onClick={()=>{navigate("/")}} ><IoHomeOutline size="36px"/></Button>
                <Button w="55px" h="40px" borderRadius="16px" bg={tab=="home" ? "transparent" : "#FFF8FE"}
                   onClick={()=>{navigate("/explore")}} ><IoGlobeOutline size="36px"/></Button>
            </Box>}

        </Box>
    )
}

export default SubNav
