import { Flex, Box, Heading, Button, Spacer, Container, HStack, Text, InputGroup, Input, Select } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { ContentTopbar, LinksTopbar, LinkTopbar, LogoTopbar, MainTopbar } from "../../styles/TopbarStyled"

const Topbar = () => {
    return (
        <MainTopbar>
            <ContentTopbar>
                <LogoTopbar>
                    <Image objectPosition={"static"} src="/LogoErinus.svg" alt="Logo ERINUS" width={96} height={96} />
                </LogoTopbar>
                <LinksTopbar>
                    <LinkTopbar>
                        <Link href="/">
                            <a>Principal</a>
                        </Link>
                    </LinkTopbar>
                    <LinkTopbar>
                        <Link href="/gestao">
                            <a>Gestão</a>
                        </Link>
                    </LinkTopbar>
                    <LinkTopbar>
                        <Link href="/conta">
                            <a>Conta</a>
                        </Link>
                    </LinkTopbar>
                </LinksTopbar>
            </ContentTopbar>
        </MainTopbar>
    )
}


export default Topbar