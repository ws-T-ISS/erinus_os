import Image from 'next/image'
import { Button, CloseButton } from '@chakra-ui/react'
import {MdExitToApp} from 'react-icons/md'
import {Sidebar, AvatarWrapper, OperatorName, ListItems, ListOption, MenuFooter, CloseSidebar} from '../styles/MenuSidebar'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const MenuSidebar = () => {
    const {showSidebar, handleDeactiveSidebar} = useContext(GlobalContext)
    return (
        <>
            {typeof showSidebar == 'undefined' ? 
                null :
                <Sidebar show={showSidebar}>
                    <CloseSidebar>
                        <CloseButton variant="ghost" onClick={handleDeactiveSidebar}/>
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
            }
        </>
    )
}

export default MenuSidebar