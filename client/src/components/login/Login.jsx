import React, { useState } from "react";
import {
  Flex,
  Wrap,
  WrapItem,
  Stack,
  HStack,
  VStack,
  Heading,
  Box,
  Text,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import img from "../assets/Group 5.png";
import {
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
      width="100%"
      height="100vh"
      bg={"#4BB96A"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        m={"auto"}
        w={"60vw"}
        h={"85vh"}
        bg={"#FFFFFF"}
        borderRadius={"36px"}
      >
        <HStack>
          <Box
            w={"50%"}
            bg={"#F6F3E3"}
            h={"85vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ borderRadius: "36px 0 0 36px" }}
          >
            <Image w={"60%"} src={img}></Image>
          </Box>

          <Box p={"10% 2vw"}  w={"50%"}>
            <Box textAlign={"start"}>
            <Heading>Welcome</Heading>
            <Text py={"5%"}>Please confirm your details  to continue</Text>
            </Box>
            <VStack spacing={"6"}>

            <Input placeholder="Enter Username" size="md"></Input>
            <Input placeholder="Enter E-mail Address" size="md"></Input>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="row">
                
                <Radio colorScheme="green" value="1">
                  Volunteer
                </Radio>
                <Radio colorScheme="green" value="2">
                  Organiser
                </Radio>
              </Stack>
            </RadioGroup>

            <Button bg={"#2D5DC7"} textColor={"white"} w={"100%"}>Continue</Button>
                </VStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Login;
