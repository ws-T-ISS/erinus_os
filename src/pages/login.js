import Image from 'next/image'
import Head from 'next/head';
import { Heading, FormLabel, Input, Box, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { Background } from "../styles/FormLogin";

export default function Login(){
    const {register, handleSubmit} = useForm()
    const {handleLogin} = useContext(AuthContext)
    
    return (
        <>  
            <Head>
                <title>ERINUS | Login</title>
            </Head>
            <Background>
                <form className="background-white" onSubmit={handleSubmit(handleLogin)}>
                    <Heading fontFamily="Mohave" color="#00135b" textAlign="center">
                        <Image src="/LogoErinus.svg" alt="Logo da ERINUS na tela de login"
                         width={128} height={48} />
                    </Heading>
                    <Box marginBottom={3}>
                        <FormLabel color="#00135b">Login:</FormLabel>
                        <Input {...register("usuario")} type="text" placeholder="Digite seu usuário" required />
                    </Box>
                    <Box marginBottom={5}>
                        <FormLabel color="#00135b">Senha:</FormLabel>
                        <Input {...register("senha")} type="password" placeholder="Digite sua senha" required />
                    </Box>
                    <Button type="submit" colorScheme="blue" fontWeight={400}>Login</Button>
                </form>
            </Background>
        </>
    )
}