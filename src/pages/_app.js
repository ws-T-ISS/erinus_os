import {ChakraProvider} from '@chakra-ui/react'
import Topbar from '../components/layouts/Topbar'
import MenuSidebar from '../components/MenuSidebar'
import { GlobalProvider } from '../context/GlobalContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalProvider>
        <Topbar />
        <MenuSidebar />
        <Component {...pageProps} />
      </GlobalProvider>
    </ChakraProvider>
  )
}

export default MyApp
