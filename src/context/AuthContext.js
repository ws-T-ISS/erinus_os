import {useState, useContext, createContext} from 'react'
import { useRouter } from 'next/router'
import api from '../services/api'
import { useToast } from '@chakra-ui/react'
import { GlobalContext } from './GlobalContext'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [logged, setLogged] = useState(false)
    const {handleResetSidebar} = useContext(GlobalContext)
    const router = useRouter()
    const toast = useToast()
    const handleLogin = async (data) => {
        try{
            const request = await api.post("/autenticacao", data)
            if(request.data.erro){
                throw request.data.mensagem
            }
            setUser(request.data.usuario)
            setLogged(true)
            router.push("/")
        }catch(error){
            toast({
                title: 'Erro!',
                description: error,
                status: 'error',
                duration: 3500,
                isClosable: true,
            })
        }
    }
    const handleLogout = async () => {
        setUser({})
        setLogged(false)
        handleResetSidebar()
        router.push("/login")
    }

    return (
        <AuthContext.Provider value={{user, logged, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}