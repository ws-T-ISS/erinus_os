import Image from 'next/image'
import { Button, CloseButton, IconButton } from '@chakra-ui/react'
import {MdExitToApp, MdMenu} from 'react-icons/md'
import {Sidebar, AvatarWrapper, OperatorName, ListItems, ListOption, MenuFooter, CloseSidebar} from '../styles/MenuSidebar'
import { useState } from 'react'

const MenuSidebar = () => {
    const [show, setShow] = useState(true)
    const handleSwitch = () => {
        setShow(!show)
    }

    return (
        <>
            <Sidebar show={show}>
                <CloseSidebar>
                    <CloseButton variant="ghost" onClick={handleSwitch}/>
                </CloseSidebar>
                <main>
                    <AvatarWrapper>
                        <Image src="/Avatar.svg" alt="Foto do operador" width={100} height={100} />
                    </AvatarWrapper>
                    <OperatorName>Antônio Carlos Magalhães</OperatorName>
                    <ListItems>
                        <ListOption>Painel de solicitações</ListOption>
                        <ListOption>Alterar senha</ListOption>
                    </ListItems>
                </main>
                <MenuFooter>
                    <span className='description-version'>ERINUS | Versão: 1.0.0</span>
                    <Button rightIcon={<MdExitToApp />} variant={'solid'} colorScheme="red">Sair</Button>
                </MenuFooter>
            </Sidebar>
        </>
    )
}

export default MenuSidebar