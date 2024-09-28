import { Container, Heading, VStack, Input, Button, HStack,Box,useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const AuthenticateUser = () => {
    return (
        <Container>
            <Box
        w={"full"} bg={useColorModeValue("white", "gray.800")}
        rounded={"lg"} p={6} shadow={"md"} mt={"20"} >
            <VStack  gap={3}  >
                <Heading as={"h1"} mb={10}>
                    Please Login!
                </Heading >

                <Input placeholder="Enter your 12 digit Aadhar number" name='password' type='number' />
                <Input placeholder='Enter the Phone number registered with aadhar' type='number' name='account' />
                <HStack>
                    <Link to={"/register"}>

                        <Button>Register</Button>
                    </Link>
                    <Button>Login</Button>
                </HStack>
            </VStack>
            </Box>
        </Container>
    )
}

export default LoginPage