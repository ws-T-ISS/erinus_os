import Image from "next/image"
import Link from "next/link"
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { ContentTopbar, LinksTopbar, LinkTopbar, LogoTopbar, MainTopbar } from "../../styles/TopbarStyled"

const Topbar = () => {
    const {handleActiveSidebar} = useContext(GlobalContext)
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
                        <button onClick={handleActiveSidebar}>Conta</button>
                    </LinkTopbar>
                </LinksTopbar>
            </ContentTopbar>
        </MainTopbar>
    )
}


export default Topbar