import { Container, Heading } from "@chakra-ui/react";

export default function Aberto(){
    return (
        <Container maxW="container.xl" marginTop="7">
            <div className="background-white">
                <Heading fontFamily="Mohave" fontWeight={500} color="#00135b" marginBottom="5" >Busca de ordem de serviço</Heading>
                
            </div>
        </Container>
    )
}