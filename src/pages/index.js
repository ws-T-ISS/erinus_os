import { Container, Heading, HStack, Text, Wrap } from '@chakra-ui/react'
import Head from 'next/head'
import Card from '../components/Card'

export default function Home() {
    return (
        <div>
            <Head>
                <title>ERINUS | O.S</title>
                <meta name="description" content="Solução em registros de ordens de serviço." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Container marginTop="7" maxW="container.xl">
                    <Text fontSize="24pt" color="#00135b">Seja bem vindo <b>{"Usuário"}</b>.</Text>
                </Container>
            </header>
            <main>
                <Container marginTop="7" maxW="container.xl">
                    <Wrap>
                        <Card title="Solicitações abertas" description="Solicitações abertas pendentes" redirectTo={"/solicitacao/aberto"}/>
                        <Card title="Ordem de serviço" description="Nova ordem de serviço" redirectTo={"/solicitacao/novo"}/>
                    </Wrap>
                </Container>
            </main>
        </div>
    )
}
