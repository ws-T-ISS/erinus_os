import {ChakraProvider} from '@chakra-ui/react'
import Topbar from '../components/layouts/Topbar'
import MenuSidebar from '../components/MenuSidebar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Topbar />
      <MenuSidebar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
