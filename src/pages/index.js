import { useContext } from 'react'
import { Container, Text, Wrap } from '@chakra-ui/react'
import Head from 'next/head'
import Card from '../components/Card'
import { AuthContext } from '../context/AuthContext'

export default function Home() {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Head>
                <title>ERINUS | O.S</title>
                <meta name="description" content="Solução em registros de ordens de serviço." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Container marginTop="7" maxW="container.xl">
                    <Text fontSize="24pt" color="#00135b">Seja bem vindo <b>{user.nome}</b>.</Text>
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
