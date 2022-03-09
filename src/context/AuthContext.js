import {useState, useContext, useEffect, createContext} from 'react'
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
        await api.post("/logout")
        setUser({})
        setLogged(false)
        handleResetSidebar()
        router.push("/login")
    }
    const handleSessionRequest = async () => {
        try{
            const request = await api.get("/autenticacao")
            if(request.data.erro){
                throw request.data.mensagem
            }
            setUser(request.data.usuario)
            setLogged(true)
            router.push("/")
        }catch(error){
            if(router.pathname !== "/login"){
                toast({
                    title: 'Erro!',
                    description: error.response ? error.response.data.mensagem : error.toString(),
                    status: 'error',
                    duration: 3500,
                    isClosable: true,
                })
                router.push("/login")
            }
        }
    }
    useEffect(() => {
        handleSessionRequest()
    }, [])
    return (
        <AuthContext.Provider value={{user, logged, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}