import React, { useContext } from 'react'
import { AppContext } from '../../context/ParentContext'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Box,
    Button
} from '@chakra-ui/react'
import { IoGlobeOutline, IoHome } from "react-icons/io5";

const SubNav = ({ tab }) => {
    const { isAuthenticated } = useContext(AppContext)
    return (
        <Box bg={"#FFFDF1"} textAlign="center">
            {isAuthenticated && <Box display="flex" justifyContent="space-around" w="150px" height="75px" bg="#E6E6E6" alignItems="center" borderRadius="22px" mx="auto">
                <Button w="50px" h="50px" borderRadius="16px"><IoHome size="36px"/></Button>
                <Button w="50px" h="50px" borderRadius="16px"><IoGlobeOutline size="36px"/></Button>
            </Box>}

        </Box>
    )
}

export default SubNav
