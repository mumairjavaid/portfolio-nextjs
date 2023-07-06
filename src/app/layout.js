'use client'
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <ColorModeScript initialColorMode='light' />
       <ChakraProvider> {children} </ChakraProvider>
        </body>
    </html>
  )
}
