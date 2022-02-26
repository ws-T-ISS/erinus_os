import { Box, Button, Container, FormLabel, Heading, Input, Select, SimpleGrid, Textarea, Wrap } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
export default function Novo(){
    const {register, handleSubmit, watch} = useForm()
    const tipo = watch("tipo")
    const handleCreateRequest = (data) =>{
        console.log(data)
    }
    return (
        <Container marginTop="7" marginBottom="7" maxW="container.xl">
            <form className="background-white" onSubmit={handleSubmit(handleCreateRequest)}>
                <Heading fontFamily="Mohave" fontWeight={500} color="#00135b" marginBottom="5" >Nova ordem de serviço</Heading>
                <Heading fontFamily="Mohave" fontWeight={500} size="lg" marginBottom="3">Informações do cliente</Heading>
                <Wrap marginBottom={5}>
                    <Box w={['100%', '25%', '15%']}>
                        <FormLabel htmlFor="cliente">Cliente</FormLabel>
                        <Input {...register("cliente")} id="cliente" placeholder="Código do cliente"/>
                    </Box>
                    <Box w={['100%', '70%', '35%']}>
                        <FormLabel htmlFor="nome_cliente">Nome do cliente</FormLabel>
                        <Input id="nome_cliente" disabled/>
                    </Box>
                </Wrap>
                <Heading fontFamily="Mohave" fontWeight={500} size="lg" marginBottom="3">Informações do chamado</Heading>
                <SimpleGrid w={['100%', '100%', '50%']} columns={2} spacingX="30px" spacingY="5" marginBottom="3">
                    <Box>
                        <FormLabel htmlFor="tipo">Tipo</FormLabel>
                        <Select {...register("tipo")} defaultValue="S" id="tipo">
                            <option value="I">Incidente</option>
                            <option value="S">Solicitação</option>
                        </Select>
                    </Box>
                    <Box>
                        <FormLabel htmlFor="categoria">Categoria</FormLabel>
                        <Select {...register("categoria")} id="categoria">
                                {
                                    tipo == "I" ?
                                    <>
                                        <option>Reparo</option>
                                        <option>Defeito desconhecido</option>
                                    </> :
                                    <>
                                        <option>Manutenção preventiva</option>
                                        <option>Instalação</option>
                                    </>
                                }
                        </Select>
                    </Box>
                    <Box>
                        <FormLabel htmlFor="gravidade">Gravidade</FormLabel>
                        <Select {...register("gravidade")} defaultValue="S" id="gravidade">
                            <option value="L">Leve</option>
                            <option value="M">Moderado</option>
                            <option value="A">Alto</option>
                        </Select>
                    </Box>
                </SimpleGrid>
                <Box w={['100%', '100%', '50%']} marginBottom={3}>
                    <FormLabel>Título</FormLabel>
                    <Input {...register("titulo")} id="titulo" placeholder="Título da ordem de serviço"/>
                </Box>
                <Box w={['100%', '100%', '50%']} marginBottom={3}>
                    <FormLabel htmlFor="descricao">Descrição</FormLabel>
                    <Textarea {...register("descricao")} id="descricao" placeholder="Descrição da ordem de serviço"/>
                </Box>
                <Button type="submit" colorScheme="teal">Finalizar</Button>
            </form>
        </Container>
    )
}