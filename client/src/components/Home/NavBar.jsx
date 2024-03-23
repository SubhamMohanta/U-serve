import Headroom from 'react-headroom';
import {
    Box,
    Flex,
    HStack,
    Button,
    Text,
    Link,
    Stack,
    IconButton,
    useDisclosure,
    Avatar
} from '@chakra-ui/react';

import logo from "../../assets/logo.png"
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/ParentContext';

const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'How it Works', path: '/how' },
    { name: 'FAQs', path: 'faqs' }
];



export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { loginWithRedirect, isAuthenticated, user, logout, setUserProfile, userProfile } = useContext(AppContext)

    useEffect(() => {
        setUserProfile(user)
    }, [isAuthenticated, user])

    return (
        <Headroom>
            <Box px={"10%"} bg={'rgba(255,254,248,1)'} alignItems="center" pt="5" backdropFilter='blur(20px)'>
                <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
                    <img src={logo} width={'159px'} height={'65px'} />

                    <HStack spacing={8} alignItems="center">
                        <HStack as="nav" spacing={6} d={{ base: 'none', md: 'flex' }} alignItems="center">
                            {navLinks.map((link, index) => (
                                <NavLink key={index} {...link} onClose={onClose} />
                            ))}
                        </HStack>
                    </HStack>

                    {isAuthenticated ?

                        <Box display={"flex"} gap={4} alignItems="center">
                            <Link to={"/profile"}>
                                <Avatar
                                    as={Link}
                                    border="3px solid #4BB96A"
                                    rounded="full"
                                    src={userProfile?.picture}
                                />
                            </Link>

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
                                px={8}
                                onClick={logout}
                            >
                                Log out
                            </Button>
                        </Box> :
                        <Box display={"flex"} gap={4}>
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
                                px={8}
                                onClick={() => loginWithRedirect()}
                            >
                                Sign in
                            </Button>
                            <Button bg="#4BB96A"
                                size="md"
                                color="white"
                                border="3px solid #4BB96A"
                                borderRadius="20px"
                                style={{
                                    filter: "drop-shadow(0 0 5px #4BB96A)",
                                    transition: "background-color 0.3s ease",
                                }}
                                _hover={{ bg: "#4BB96A" }}
                                d={{ base: 'none', md: 'block' }}
                                px={8}
                                onClick={() => loginWithRedirect()}
                            >
                                Sign Up
                            </Button>

                        </Box>
                    }
                </Flex>

                {/* Mobile Screen Links */}
                {isOpen ? (
                    <Box pb={4} d={{ base: 'inherit', md: 'none' }}>
                        <Stack as="nav" spacing={2}>
                            {navLinks.map((link, index) => (
                                <NavLink key={index} {...link} onClose={onClose} />
                            ))}
                            <Text fontWeight="semibold" color="gray.500">
                                Community
                            </Text>
                            <Stack pl={2} spacing={1} mt={'0 !important'}>
                                {dropdownLinks.map((link, index) => (
                                    <NavLink key={index} {...link} onClose={onClose} />
                                ))}
                            </Stack>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </Headroom>
    );
}

const NavLink = ({ name, path, onClose }) => {
    return (
        <Link
            href={path}
            lineHeight="inherit"
            fontWeight="600"
            _hover={{
                textDecoration: 'none',
                color: '#4BB96A'
            }}
            onClick={() => onClose()}
        >
            {name}
        </Link>
    );
};