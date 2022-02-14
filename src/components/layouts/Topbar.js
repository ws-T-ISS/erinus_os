import { Flex, Box, Heading, Button, Spacer, Container } from "@chakra-ui/react"

const Topbar = () => {
    return (
        <Container maxW="container.lg" padding={3}>
            <Flex>
                <Box>
                    <Heading size="md">ERINUS O.S</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Button />
                </Box>
            </Flex>
        </Container>
    )
}


export default Topbar