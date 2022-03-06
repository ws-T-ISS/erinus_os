import { useRouter } from 'next/router'
import {ChakraProvider} from '@chakra-ui/react'
import Topbar from '../components/layouts/Topbar'
import MenuSidebar from '../components/MenuSidebar'
import { GlobalProvider } from '../context/GlobalContext'
import '../styles/globals.css'
import { AuthProvider } from '../context/AuthContext'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ChakraProvider>
      <GlobalProvider>
        <AuthProvider>
            {router.pathname !== "/login" ? <Topbar /> : null }
            <MenuSidebar />
            <Component {...pageProps} />
        </AuthProvider>
      </GlobalProvider>
    </ChakraProvider>
  )
}

export default MyApp
